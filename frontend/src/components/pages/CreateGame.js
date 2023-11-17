import { useState, useEffect } from "react";

const CreateGame = (username) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/createGame", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username }),
      });
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl my-12">Your game</h1>
      {data && data.message && (
        <div>
          <h1>{data.message}</h1>
          <h1>{data.gameId}</h1>
        </div>
      )}
    </div>
  );
};
export default CreateGame;
