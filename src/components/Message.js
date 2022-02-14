import React, { useEffect, useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Form } from "react-bootstrap";
import { db } from "../Firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

const Message = ({ title, description, id }) => {
  const [select, setSelect] = useState("");
  useEffect(() => {
    if (select) {
      // console.log(id, select);

      // -- function to update data according message-select --
      const handleUpdate = async () => {
        const taskDocRef = doc(db, "tasks", id);
        try {
          await updateDoc(taskDocRef, {
            [select]: true,
          });
          console.log("update");
        } catch (err) {
          alert(err);
        }
      };
      handleUpdate();
    }
  }, [select, id]);

  return (
    <div className="message">
      <div className="message-card">
        <div className="left-side">
          <h4>{title}</h4>
          <h5>{description}</h5>
        </div>
        <div>
          <Form.Select
            aria-label="Default select example"
            className=" message-select shadow-none"
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Options
            </option>
            <option value="completed">Completed</option>
            <option value="favourite">Favourite</option>
            <option value="deleted">Delete</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
};

export default Message;
