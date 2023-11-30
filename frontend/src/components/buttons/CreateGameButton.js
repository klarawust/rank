import { createGameRequest } from "../../helpers/api";
import Button from "./Button";

function CreateGameButton({ setPage, setGameState, username }) {
  const createGame = () => {
    if (username === "") {
      alert("Write your name before joining or starting a game.");
    } else {
      createGameRequest(setGameState, username);
      setPage("game");
    }
  };

  return (
    <div>
      <Button onClick={createGame} name="New Game" />
    </div>
  );
}

export default CreateGameButton;
