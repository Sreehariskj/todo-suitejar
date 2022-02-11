import React from "react";
import logo from "../assets/img/logo.png";
import google from "../assets/img/google.png";
import { Button, Container, Image } from "react-bootstrap";

const LoginLeftSide = () => {
  return (
    <Container className="login-container">
      <div className="logo">
        <Image src={logo}></Image>
      </div>
      <div className="login-form text-center">
        <h1>Login</h1>
        <div className="description mt-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at
            eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat
            vitae faucibus nibh dolor dui.
          </p>
        </div>
        <Button variant="primary" className="w-100 mt-4">
          <div className="google-btn">
            <Image src={google} className="google-img"></Image>
            <span className="google-text">Sign in using Google</span>
          </div>
        </Button>
      </div>
    </Container>
  );
};

export default LoginLeftSide;
