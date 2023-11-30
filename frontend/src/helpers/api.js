export const createGameRequest = async (setGameState, username) => {
  try {
    const response = await fetch("http://localhost:8080/createGame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    });
    const jsonData = await response.json();
    setGameState(jsonData.newGame);
    console.log(jsonData.newGame);
    console.log("now we are sending a new message");
    /*
    ws.sendMessage(`{ "createGame": {
        "gameId": "${jsonData.newGame.gameId}",
        "username": "${username}"
      } }`);
      */
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export const joinGameRequest = async (gameId, username, setGameState) => {
  try {
    const response = await fetch("http://localhost:8080/joinGame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gameId, username }),
    });
    const jsonData = await response.json();
    setGameState(jsonData.currentGame);
    console.log(jsonData.currentGame);
    console.log(jsonData);
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
