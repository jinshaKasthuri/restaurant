import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';







function Operaingtime({timedata}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
let c= timedata
console.log(c);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Operatinh Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
            <ListGroup.Item>Monday| {timedata.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday |{timedata.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday |{timedata.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday |{timedata.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday|{timedata.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday|{timedata.saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday|{timedata.Sunday}</ListGroup.Item>
        </ListGroup>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Operaingtime
