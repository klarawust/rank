import { useEffect, useState } from "react";
import Lobby from "./pages/Lobby";
import { useWebSocket } from "../WebSocketContext";

const GameWrapper = ({ gameState, setGameState, username }) => {
  const [messages, setMessages] = useState([]);

  const ws = useWebSocket();

  useEffect(() => {
    ws?.webSocket?.addEventListener("message", (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);

      // setGameState(message) - oppdater gameState hær
    });
  }, [ws]);

  console.log(messages);

  return <Lobby gameState={gameState} />;
};

export default GameWrapper;
