import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import AddNoteModal from "./AddNoteModal";
import Note from "./Note.js";

export default function Main() {
  const [notes, setNotes] = useState({ 1: "להוסיף משימות חדשות" });
  const [notesCounter, setNotesCounter] = useState(2);
  const [showCreateNote, setShowCreateNote] = useState(false);

  const addNoteHandler = (note) => {    
    notes[notesCounter] = note;    
    setNotesCounter(notesCounter + 1);
  };  
  const setContent = (k, v) => {
    
    let newNotes = { ...notes };
    newNotes[k] = v;
    setNotes(newNotes);
  };
  const deleteNote = (k) => {  
    let newNotes = { ...notes };
    delete newNotes[k];
    console.log(newNotes);
    setNotes(newNotes);
  };

  const mapNotes = () => {
    let res = [];
    for (const [key, value] of Object.entries(notes)) {
      res.push(        
          <Note
            key={key}
            content={value}
            setContent={setContent}
            deleteNote={deleteNote}
            noteKey={key}
          />
      );
    }
    return res;
  };
  
  return (
    <>
      <div style={{textAlign: 'right'}}>        
        {Object.entries(notes).map((k) => {          
          return <Note
            key={k[0]}
            content={k[1]}
            setContent={setContent}
            deleteNote={deleteNote}
            noteKey={k[0]}
          />
        })}
        </div>

      <br />      
      <button className="btn btn-primary"
        style={{ backgroundColor: "green" }}
        onClick={() => {
          setShowCreateNote(true);
        }}
      >        
        הוספת משימה
      </button>

      <AddNoteModal
        showCreateNote={showCreateNote}
        setShowCreateNote={setShowCreateNote}
        addNoteHandler={addNoteHandler}
      >
      </AddNoteModal>
    </>
  );
}
