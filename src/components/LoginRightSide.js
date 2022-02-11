import React from "react";
import { Image } from "react-bootstrap";
import illustration from "../assets/img/illustration.png";

const LoginRightSide = () => {
  return (
    <div className="h-100">
      <Image src={illustration} fluid className="w-100 h-100"></Image>
    </div>
  );
};

export default LoginRightSide;
