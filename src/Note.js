import { useState } from "react";
import { Modal } from "react-bootstrap";
import AddNoteModal from "./AddNoteModal";
import "./css.css";

export default function Note(props) {
  const [editMode, setEditMode] = useState(false);
  const [note, setNote] = useState(props.content);

  const onSubmit = (newContent) => {
    if (newContent.length == 0) {
      window.alert("לא ניתן לשמור משימה ריקה");
      setEditMode(false);
      return;
    }
    if (newContent == props.content) {
      // no changed detected
      setEditMode(false);
      return;
    }

    props.setContent(props.noteKey, newContent);
    setEditMode(false);
  };

  return (
    <div style={{ textAlign: "right", margin: '10px' }}>
      <div className="multiline" style={{ textAlign: "right" }}>
        {props.content}
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "red", marginLeft: "10px" }}
          onClick={() => {
            props.deleteNote(props.noteKey);
          }}
        >
          מחיקה
        </button>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "green" }}
          onClick={() => {
            setEditMode(true);
          }}
        >
          עריכה
        </button>
              <input style={{ width: '20px', height: '20px', margin: '5px' }}
                  type="checkbox" />
      </div>

      <AddNoteModal
        showCreateNote={editMode}
        setShowCreateNote={setEditMode}
        addNoteHandler={onSubmit}
        init={props.content}
      ></AddNoteModal>
    </div>
  );
}
