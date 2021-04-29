import { Button, Form, Modal } from 'react-bootstrap';
import React, { useRef } from 'react';

function NewContactModal({ closeModal }) {
    const idRef = useRef();
    const nameRef = useRef();
    function handleSubmit(e) {
        e.preventDefault()

        closeModal()

    }
    return (
        <div>
            <Modal.Header closeButton>
                Create Contact
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" ref={idRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>NAME</Form.Label>
                        <Form.Control type="text" ref={nameRef} required></Form.Control>
                    </Form.Group>
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </div>
    )
}

export default NewContactModal
