import React, { useState } from "react";
import Axios from "axios";

const axios = () => {
  return Axios.create({
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};

function Jokes() {
  const [jokes, setJokes] = useState([]);

  axios()
    .get("http://localhost:3300/api/jokes")
    .then(res => {
      setJokes(res.data);
    });
  return (
    <div>
      {jokes.map(joke => (
        <div key={joke.id}>
          <p>{joke.joke}</p>
        </div>
      ))}
    </div>
  );
}

export default Jokes;
