import React from 'react';
import {  Button, Form } from 'react-bootstrap';

const PersonForm = (props) => {

    const handleSubmit = (e) => {

    }

  return (
    <>
    <Form className='mx-auto rounded-3 p-3 bg-secondary my-2' style={{ maxWidth: "400px "}} noValidate>
        <Form.Group className='mb-2'>
          <Form.Label className='fw-bold'>ID</Form.Label>
          <Form.Control type="text" disabled readOnly value={props.person.id} />
        </Form.Group>
        <Form.Group className='mb-2' controlId='firstname'>
          <Form.Label className='fw-bold'>Prénom *</Form.Label>
          <Form.Control type="text" defaultValue={props.person.firstname} required />
          <Form.Control.Feedback type="invalid">Un prénom est attendue (au moins deux caractères).</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-2' controlId='lastname'>
          <Form.Label className='fw-bold'>Nom *</Form.Label>
          <Form.Control type="text" defaultValue={props.person.lastname} required />
          <Form.Control.Feedback type="invalid">Un nom est attendue (au moins deux caractères).</Form.Control.Feedback>
        </Form.Group>
        <Button variant='success' className='text-center' type='submit' onClick={handleSubmit}>{props.buttonText}</Button>
      </Form>
    </>
  )
}

export default PersonForm