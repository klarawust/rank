import bodyParser from "body-parser";
import express from "express";

const app = express();
const jsonParser = bodyParser.json();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/isak", (req, res) => {
  res.send("Hello Isak!");
});

app.post("/", jsonParser, (req, res) => {
  console.log(req.body.best);
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
