import Button from "./Button";

function JoinGameButton({ setPage, username }) {
  const JoinGame = () => {
    if (username === "") {
      alert("Write your name before joining or starting a game.");
    } else {
      console.log(username);
      setPage("joinGamePage");
    }
  };
  return (
    <div>
      <Button onClick={JoinGame} name="Join Game" />
    </div>
  );
}

export default JoinGameButton;
