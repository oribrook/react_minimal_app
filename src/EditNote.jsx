import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { editNote } from "./client/notes_client";

const EditNote = ({ note, show, setShow }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
    
  const handleSubmit = async () => {
      const res = await editNote(title, content, "wait", note.id);
    //   refresh page:
      window.location = window.location
      
    setShow(false);
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
      >
        <div style={{ maxWidth: "60%", margin: "auto" }}>
          <p> title </p>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <br />
          <p> content </p>
          <input
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <br />
          <Button onClick={handleSubmit}> אישור </Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditNote;
