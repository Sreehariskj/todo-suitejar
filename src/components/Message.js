import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Dropdown } from "react-bootstrap";

const Message = ({ title, description }) => {
  return (
    <div className="message">
      <div className="message-card">
        <div className="left-side">
          <h4>{title}</h4>
          <h5>{description}</h5>
        </div>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true" variant="white">
            <MoreVertIcon></MoreVertIcon>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Completed</Dropdown.Item>
            <Dropdown.Item eventKey="1">Favourite</Dropdown.Item>
            <Dropdown.Item eventKey="1">Deleted</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Message;
