import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login.svg";
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="login image" />
        <h1>Search github users</h1>
        <button className="btn" onClick={loginWithRedirect}>
          Login / Signup
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    height: 300px;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;
export default Login;
