import { useState } from "react";
import { Modal } from "react-bootstrap";


const AddNoteModal = (props) => {

    const [note, setNote] = useState(props.init)
    
    const onSubmit = ()=> {        
        if (note.length == 0){ 
            window.alert("לא ניתן להוסיף משימה ריקה")
            props.setShowCreateNote(false)
            return
        }
        props.addNoteHandler(note);
        setNote("")
        props.setShowCreateNote(false);
    }

    const onHide = ()=>{
        setNote(props.init)
        props.setShowCreateNote(false)
    }

    return (
    <Modal show={props.showCreateNote}         
        //    onHide={()=>{props.setShowCreateNote(false)}}> 
           onHide={onHide}> 

           <textarea placeholder="כתוב כאן תוכן משימה" rows={5} style={{'textAlign':'right'}} name="newNote" value={note} 
                     onChange={(e)=>{setNote(e.target.value)}}> 
            </textarea> 

            <div style={{maxWidth: '30%', textAlign: 'center', margin: 'auto'}}>
           <button className="btn btn-primary" onClick={onSubmit}> אישור </button>           
                <button className="btn btn-secondary" onClick={onHide}> ביטול</button>           
                </div>

    </Modal>

    )
}

export default AddNoteModal