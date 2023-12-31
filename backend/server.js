import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();
const jsonParser = bodyParser.json();
const port = 8080;
app.use(cors());

const games = [];

const generateGameId = () => {
  return Math.floor(Math.random() * (99999 - 10000) + 10000);
};

//endepunkt createGame
app.post("/createGame", jsonParser, (req, res) => {
  const username = req.body.username;
  const gameId = generateGameId();

  const game = {
    gameId: gameId,
    creator: username,
    players: [],
  };
  game.players.push(username);
  games.push(game);

  res.json({
    message:
      "Game created and added to list of games, creator of game added as a player.",
    newGame: game,
  });
});

//endepunkt joinGame
app.post("/joinGame", jsonParser, (req, res) => {
  const username = req.body.username;
  const gameIdInput = req.body.gameId;

  let gameFound = false;
  let currentGame = {};

  console.log(req.body);
  for (let i = 0; i < games.length; i++) {
    if (games[i].gameId.toString() === gameIdInput) {
      games[i].players.push(username);
      gameFound = true;
      currentGame = games[i];
      break;
    }
  }
  console.log({ games });
  console.log(currentGame);

  if (gameFound) {
    res.json({
      message: "Successfully added user to game",
      currentGame: currentGame,
    });
  } else {
    res.json({
      message: "Game does not exist",
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
