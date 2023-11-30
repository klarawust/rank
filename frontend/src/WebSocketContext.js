import { createContext, useContext, useEffect, useState } from "react";

const WebSocketContext = createContext({
  webSocket: "...",
  sendMessage: (message) => console.log(message, "😳"),
});

export const useWebSocket = () => useContext(WebSocketContext);

export const WebSocketProvider = ({ children, username }) => {
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:4000?username=${username}`);
    setWebSocket(ws);

    ws.onopen = () => console.log("Connected to WebSocket");
    ws.onclose = () => console.log("Disconnected from WebSocket");

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (message) => {
    console.log("vi er her");
    if (webSocket) {
      console.log("vi er her på nytt");

      webSocket.send(message);
    }
  };

  return (
    <WebSocketContext.Provider value={{ webSocket, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};
