import React from "react";
import { Image } from "react-bootstrap";
import logo from "../assets/img/logo.png";

const Logo = () => {
  return (
    <div className="logo p-5">
      <Image src={logo} fluid></Image>
    </div>
  );
};

export default Logo;
