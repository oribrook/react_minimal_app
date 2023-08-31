import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

function Note({ note }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card style={{ width: "18rem", margin: '2%' }}>
        <Card.Body onClick={() => setShowModal(true)}>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>ID: {note.id}</Card.Text>      
        </Card.Body>
      </Card>
     

      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Modal.Header>
          <h4> {note.title}</h4>
        </Modal.Header>
        <Modal.Body>
          <p> {note.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <p> {note.status}</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Note;
