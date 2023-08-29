import React, { useContext, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { appContext } from "./App";
import EditNote from "./EditNote";

function Note({ note }) {
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const { userLogged } = useContext(appContext);

  const editNote = () => {
    setShowEdit(true)
  };
  return (
    <div style={{margin: '25px'}}>
      <EditNote note={note} show={showEdit} setShow={setShowEdit} />
      
      <Card style={{ width: '18rem' }}>      
      <Card.Body>
          <Card.Title>{note.title}</Card.Title>
        <Card.Text>
          {note.content}
        </Card.Text>
        {userLogged && <Button variant="primary" onClick={() => {
              editNote(note.id);
            }}>Edit</Button>}
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
    </div>
  );
}

export default Note;
