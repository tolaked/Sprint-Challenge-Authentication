import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Styled from "styled-components";

function Login(props) {
  const initialState = {
    username: "",
    password: ""
  };
  const [newUser, setnewUser] = useState(initialState);

  const submitInfo = (event, credentials) => {
    event.preventDefault();
    axios
      .post("http://localhost:3300/api/auth/register", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.data.token);

        props.history.push("/jokes");
      })
      .catch(err => console.log(err));
  };

  const handleNewUser = event => {
    const { name, value } = event.target;
    setnewUser({ ...newUser, [name]: value });
  };

  return (
    <div>
      <div className="SignupformContainer">
        <StyledForm onSubmit={e => submitInfo(e, newUser)}>
          <StyledH3>Please enter your credentials to sign up</StyledH3>
          <Label>
            username
            <StyledInput
              type="text"
              value={newUser.username}
              name="username"
              onChange={handleNewUser}
            />
          </Label>
          <Label>
            password
            <StyledInput
              type="text"
              value={newUser.password}
              name="password"
              onChange={handleNewUser}
            />
          </Label>
          <StyledButton>Join the platform</StyledButton>
        </StyledForm>
      </div>
    </div>
  );
}

export default Login;

const StyledForm = Styled.form`
padding: 0px 30px 25px 30px;
width: 310px;
height:400px;
margin:0 auto;
background: #f3f3f3;
border: 1px solid #fff;
border-radius: 5px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
justify-content: center;
position:relative
`;
const Label = Styled.label`
    text-align: center;
`;
const StyledInput = Styled.input`
width: 188px;
padding: 10px 25px;
margin: 0 auto;
margin-bottom:20px;
font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
  Helvetica, Arial, "Lucida Grande", sans-serif;
font-weight: 400;
font-size: 16x;
color: #9d9e9e;
text-shadow: 1px 1px 0 rgba(256, 256, 256, 1);
background: #fff;
border: 1px solid #fff;
border-radius: 5px;
box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const StyledH3 = Styled.h3`
text-align:center;
font-size:18px;
font-style:italic;
padding-bottom:30px;
padding-top:10px;
color:#323f58;
font-weight:bolder
`;

const StyledButton = Styled.button`
background: #323f58;
border-color: transparent;
color: #fff;
cursor: pointer;
width: 80%
margin: 0 auto;
margin-top:25px;
font-weight:bold;
font-size:14px;
height:50px;
border-radius:5px
&:hover{
  background:#323f58d7;
}
`;

const StyledParagraph = Styled.div`
text-align: center;
margin-top:35px
`;
