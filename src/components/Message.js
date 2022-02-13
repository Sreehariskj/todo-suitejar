import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Dropdown } from "react-bootstrap";

const Message = () => {
  return (
    <div className="message">
      <div className="message-card">
        <div className="left-side">
          <h4>Todo Title 1</h4>
          <h5>Description comes here...</h5>
        </div>
        <Dropdown  className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true" variant="white">
    <MoreVertIcon></MoreVertIcon>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item eventKey="1">Completed</Dropdown.Item>
      <Dropdown.Item eventKey="1">Favourite</Dropdown.Item>
      <Dropdown.Item eventKey="1">Deleted</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
        {/* <MoreVertIcon></MoreVertIcon> */}
      </div>
    </div>
  );
};

export default Message;
