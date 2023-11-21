import Logo from "./components/Logo";
import JoinGameButton from "./components/buttons/JoinGameButton";
import CreateGameButton from "./components/buttons/CreateGameButton";
import InputField from "./components/InputField";
import Lobby from "./components/pages/Lobby";
import JoinGame from "./components/pages/JoinGame";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("homePage");
  const [username, setUsername] = useState("");
  const [gameState, setGameState] = useState({
    gameId: "",
    creator: "",
    players: [],
  });

  /**
   {
            "gameId": 54482,
            "creator": "klara",
            "players": [
                "klara",
                "isak",
                "aurora"
            ]
  },
   */

  return (
    <div className="flex flex-col justify-center items-center font-JosefinSans font-bold">
      {page === "homePage" && (
        <>
          <Logo />
          <InputField setInput={setUsername} placeholder="name" />
          <div>
            <CreateGameButton
              setPage={setPage}
              username={username}
              setGameState={setGameState}
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
      {page === "lobby" && <Lobby gameState={gameState} />}
    </div>
  );
}

export default App;
