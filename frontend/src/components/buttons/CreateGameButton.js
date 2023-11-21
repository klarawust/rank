import Button from "./Button";
import { createGameRequest } from "../../helpers/api";

function CreateGameButton({ setPage, setGameState, username }) {
  const createGame = () => {
    if (username === "") {
      alert("Write your name before joining or starting a game.");
    } else {
      createGameRequest(setGameState, username);
      setPage("lobby");
    }
  };
  return (
    <div>
      <Button onClick={createGame} name="New Game" />
    </div>
  );
}

export default CreateGameButton;
