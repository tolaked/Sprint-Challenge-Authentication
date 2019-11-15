import React, { useState } from "react";
import Axios from "axios";

function Jokes() {
  const [jokes, setJokes] = useState([]);
  Axios.get("http://localhost:3300/api/jokes").then(res => {
    console.log("this", res.data);
  });
  return <div></div>;
}

export default Jokes;
