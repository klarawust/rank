import Button from "./Button";

function CreateGameButton({ setPage, username }) {
  const createGame = () => {
    if (username === "") {
      alert("Write your name before joining or starting a game.");
    } else {
      console.log(username);
      setPage("waitingroomPage");
    }
  };
  return (
    <div>
      <Button onClick={createGame} name="New Game" />
    </div>
  );
}

export default CreateGameButton;
