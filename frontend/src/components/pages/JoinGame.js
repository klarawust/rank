import InputField from "../InputField";
import { useState } from "react";
import ActualJoinGameButton from "../buttons/ActualJoinGameButton";

const JoinGame = ({ setPage, username, setGameState }) => {
  const [gameId, setGameId] = useState("");

  return (
    <div className="text-2xl mt-36 text-center flex flex-col gap-8">
      <h1>GameID:</h1>
      <InputField setInput={setGameId} placeholder="12345" />
      <ActualJoinGameButton
        setPage={setPage}
        gameId={gameId}
        username={username}
        setGameState={setGameState}
      />
    </div>
  );
};

export default JoinGame;
