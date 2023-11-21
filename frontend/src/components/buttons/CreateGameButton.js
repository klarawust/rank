import Button from "./Button";
import { useState } from "react";

function CreateGameButton({ setPage, username }) {
  // const [data, setData] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/createGame", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username: username }),
  //     });
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //     console.log(jsonData);
  //   } catch (error) {
  //     console.error("Error fetching data", error);
  //   }
  // };

  const createGame = () => {
    if (username === "") {
      alert("Write your name before joining or starting a game.");
    } else {
      setPage("waitingroomPage");
      // fetchData();
    }
  };
  return (
    <div>
      <Button onClick={createGame} name="New Game" />
      {/* {page === "waitingroomPage" && (
        <>
          <h1>{data.message}</h1>
        </>
      )} */}
    </div>
  );
}

export default CreateGameButton;
