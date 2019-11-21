import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";

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
    <>
      <h2>Daddy jokes</h2>
      <StyledGrid>
        {jokes.map(joke => (
          <div key={joke.id}>
            <p>{joke.joke}</p>
          </div>
        ))}
      </StyledGrid>
    </>
  );
}

export default Jokes;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 2rem;
  padding-top: 5px;

  div {
    padding: 2rem;
    background: grey;
  }
`;
