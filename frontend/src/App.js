import Logo from "./components/Logo";
import JoinGameButton from "./components/buttons/JoinGameButton";
import CreateGameButton from "./components/buttons/CreateGameButton";
import InputField from "./components/InputField";
import GameId from "./components/GameId";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("homePage");
  const [username, setUsername] = useState("");

  return (
    <div className="flex flex-col justify-center items-center font-JosefinSans font-bold">
      {page === "homePage" && (
        <>
          <Logo />
          <InputField username={username} setUsername={setUsername} />
          <div>
            <CreateGameButton setPage={setPage} username={username} />
            <JoinGameButton setPage={setPage} username={username} />
          </div>
        </>
      )}
      {page === "waitingroomPage" && (
        <>
          <GameId />
        </>
      )}
    </div>
  );
}

export default App;
