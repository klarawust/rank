import { joinGameRequest } from "../../helpers/api";
import Button from "./Button";

function ActualJoinGameButton({ setPage, gameId, username, setGameState }) {
  const actualJoinGame = () => {
    if (gameId === "") {
      alert("Write the ID of the game you want to join.");
    } else {
      console.log(gameId);
      joinGameRequest(gameId, username, setGameState);
      setPage("game");
    }
  };
  return (
    <div className="mt-44">
      <Button onClick={actualJoinGame} name="Join Game" />
    </div>
  );
}

export default ActualJoinGameButton;
