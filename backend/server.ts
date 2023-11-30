import { ServerWebSocket } from "bun";

let messages: { username: string; message: string }[] = [];
let users: string[] = [];

Bun.serve({
  port: 4000,
  fetch(req, server) {
    const url = new URL(req.url);
    const username = url.searchParams.get("username");

    // upgrade the request to a WebSocket
    const success = server.upgrade(req, {
      // Set userId to semi-random text, collisions probably do not use in production
      data: { username },
    });

    return success
      ? undefined
      : new Response("Upgrade failed :(", { status: 500 });
  },
  websocket: {
    open(ws: ServerWebSocket<{ username: string }>) {
      // Store username
      console.log("😥 webscoket open", ws.data.username);
      users.push(ws.data.username);

      // Subscribe to pubsub channel to send/receive broadcasted messages,
      // without this the socket could not send events to other clients
      ws.subscribe("chat");

      // Broadcast that a user joined
      ws.publish(
        "chat",
        JSON.stringify({ type: "USERS_ADD", data: ws.data.username })
      );

      // Send message to the newly connected client containing existing users and messages
      ws.send(JSON.stringify({ type: "USERS_SET", data: users }));
      ws.send(JSON.stringify({ type: "MESSAGES_SET", data: messages }));
    },
    message(ws, data: string) {
      // Data sent is a string, parse to object
      console.log("😥 webscoket message:", ws.data);
      console.log("🃏 dette er data: ", data);

      const message = JSON.parse(data);
      message.username = ws.data.username;
      messages.push(message);

      console.log(messages);

      // Send message to all clients subscribed to the chat channel with new message
      ws.send(JSON.stringify({ type: "MESSAGES_ADD", data: message }));
      ws.publish(
        "chat",
        JSON.stringify({ type: "MESSAGES_ADD", data: message })
      );
    },
    close(ws) {
      users = users.filter((username) => username !== ws.data.username);

      // Send message to all clients subscribed to the chat channel that user left
      ws.publish(
        "chat",
        JSON.stringify({ type: "USERS_REMOVE", data: ws.data.username })
      );
    },
  },
});
