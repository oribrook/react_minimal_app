import React, { useEffect, useState } from "react";
import { getAllNotes } from "./client/notes_client";
import Note from "./Note";
import { Button } from "react-bootstrap";
import CreateNote from "./CreateNote";

function NotesWithoutPagination() {
  const [notes, setNotes] = useState([]);
  const [addNoteModal, setAddNoteModal] = useState(false);

  useEffect(() => {
    getAllNotes().then((res) => {
      console.log(res);
      res.reverse()
      setNotes(res);
    });
  }, []);

  return (<>
    <Button onClick={()=>setAddNoteModal(true)}> + </Button>
    <CreateNote show={addNoteModal} setShow={setAddNoteModal} />
    
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      {notes &&
        notes.map((n) => {
          return <Note key={n.id} note={n} />;
        })}
    </div>
    </>
  );
}

export default NotesWithoutPagination;
