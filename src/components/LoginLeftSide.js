import React from "react";

import google from "../assets/img/google.png";
import { Button, Container, Image } from "react-bootstrap";
import Logo from "./Logo";
import { SignInWithGoogle } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";

const LoginLeftSide = () => {
  const navigate = useNavigate();

  // google signInBtn function
  const googleSignIn = () => {
    SignInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Logo />
      <div className="login-container">
        <div className="login-form text-center">
          <form>
            <h1>Login</h1>
            <div className="description mt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
                at eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend
                feugiat vitae faucibus nibh dolor dui.
              </p>
            </div>
            <Button
              variant="primary"
              className="w-100 my-4"
              onClick={googleSignIn}
            >
              <div className="google-btn">
                <Image src={google} className="google-img"></Image>
                <span className="google-text">Sign in using Google</span>
              </div>
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default LoginLeftSide;
