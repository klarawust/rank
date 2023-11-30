import Logo from "./components/Logo";
import JoinGameButton from "./components/buttons/JoinGameButton";
import CreateGameButton from "./components/buttons/CreateGameButton";
import InputField from "./components/InputField";
import JoinGame from "./components/pages/JoinGame";
import { useState } from "react";
import GameWrapper from "./components/GameWrapper";
import { WebSocketProvider } from "./WebSocketContext";

function App() {
  const [page, setPage] = useState("homePage");
  const [username, setUsername] = useState("");
  const [gameState, setGameState] = useState({
    state: "",
    gameId: "",
    creator: "",
    players: [],
  });

  return (
    <div className="flex flex-col justify-center items-center font-JosefinSans font-bold">
      {page === "homePage" && (
        <>
          <Logo />
          <InputField setInput={setUsername} placeholder="name" />
          <div>
            <CreateGameButton
              setPage={setPage}
              setGameState={setGameState}
              username={username}
            />
            <JoinGameButton setPage={setPage} username={username} />
          </div>
        </>
      )}
      {page === "joinGamePage" && (
        <JoinGame
          setPage={setPage}
          username={username}
          setGameState={setGameState}
        />
      )}
      {page === "game" && (
        <WebSocketProvider username={username}>
          <GameWrapper
            gameState={gameState}
            setGameState={setGameState}
            username={username}
          />
        </WebSocketProvider>
      )}
    </div>
  );
}

export default App;
