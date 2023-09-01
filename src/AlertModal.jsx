import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const AlertModal = ({title, msg, b1Text, show, setShow, block,
    handleClickB1}) => {    

const InternalhandleClick = ()=>{
    if(handleClickB1){
        handleClickB1()        
    }
    setShow(false)
}

  return (
    <Modal show={show} onHide={()=>{
        if (block){
            return;
        }
        setShow(false)}
        }>

         <Modal.Header closeButton>
         {title &&  <Modal.Title>
            {title}
          </Modal.Title>}
        </Modal.Header>

        <Modal.Body>
            {msg}
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={InternalhandleClick}> {b1Text ? b1Text : "אישור"} </Button>
        </Modal.Footer>

    </Modal>

  )
}

export default AlertModal