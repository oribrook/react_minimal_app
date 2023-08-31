import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { createNote } from './client/notes_client'

const CreateNote = ({show, setShow}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    
    const handleSubmit = async () => {
        const res = createNote({
            title: title,
            content: content,
        })

        if (res) {
            alert("note created")    
            setShow(false)
            window.location = window.location
        }
        
    }

  return (
      <div>
          <Modal show={show} onHide={() => { setShow(false) }}>
              
              <Modal.Title> Create new Note </Modal.Title>
              <Modal.Body>
                  <input placeholder='title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                  <br/>
                  <input placeholder='content' value={content} onChange={(e) => { setContent(e.target.value) }} />
                  
                  
                  
                  
              </Modal.Body>
              <Modal.Footer>
              <Button onClick={handleSubmit}> Ok </Button>  
              </Modal.Footer>

          </Modal>

    </div>
  )
}

export default CreateNote