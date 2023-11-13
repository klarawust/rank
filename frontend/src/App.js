import Logo from "./components/Logo";
import Button from "./components/Button";
import InputField from "./components/InputField";

let userName = "";

function CreateGame() {
  if (document.getElementById("nameInput").value === "") {
    alert("Write your name before joining or starting a game.");
  }
  userName = document.getElementById("nameInput").value;
  console.log(userName);
}

function JoinGame() {
  if (document.getElementById("nameInput").value === "") {
    alert("Write your name before joining or starting a game.");
  }
  userName = document.getElementById("nameInput").value;
  console.log(userName);
}

function App() {
  return (
    <div className="flex flex-col font-JosefinSans font-bold">
      <Logo />
      <InputField />
      <div>
        <Button onClick={CreateGame} name="New Game" />
        <Button onClick={JoinGame} name="Join Game" />
      </div>
    </div>
  );
}

export default App;
