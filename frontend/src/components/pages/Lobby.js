const Lobby = ({ gameState }) => {
  /**
   * gameState: {
   *  gameId: "",
   *  players: ["isak", "klara"]
   * }
   */
  return (
    <div className="text-2xl my-12 text-center flex flex-col gap-8">
      <h1>Your game</h1>
      <h1 className="text-4xl">{gameState.gameId}</h1>
      <div className="mt-12 text-left">
        <ul>
          {gameState.players.map((player) => (
            <li key={player}>{player}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lobby;
