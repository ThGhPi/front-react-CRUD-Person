import React, { useState } from 'react';
import {  Button, Form } from 'react-bootstrap';
import personService from '../service/person.service';

const PersonForm = (props) => {
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  const validateSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else { handleSubmit(event) }
    setValidated(true);
  }

  const handleSubmit = (e) => {
    setError(null);
    const form = e.currentTarget;
    const personData = {};
    personData.firstname = form.firstname.value;
    personData.lastname = form.lastname.value;
    let updatedPerson;
    if (props.action === "update") {
      personService.update(props.person.id,personData)
        .then(response => {
          updatedPerson = {...response.data};
        })
        .catch(erreur => {
          console.log(erreur);
          setError("Erreur lors de la mis à jour de la personne !")
        })
        .finally(() => { 
          if (updatedPerson === null) {
            setError("Erreur du chargement de la mis à jour !")
          } else { location.replace("/persons")}
        });
    } else if (props.action === "create") {
      personService.create(personData)
        .then(response => {
          updatedPerson = {...response.data};
        })
        .catch(erreur => {
          console.log(erreur);
          setError("Erreur lors de la création de la personne !")
        })
        .finally(() => { 
          if (updatedPerson === null) {
            setError("Erreur du chargement de la personne créée !")
          } else { location.replace("/persons") }
        });
    } else { setError("Action non reconnue !")}
  }

  return (
    <>
    <Form className='mx-auto rounded-3 p-3 bg-secondary my-2' style={{ maxWidth: "400px "}}
      noValidate onSubmit={validateSubmit} validated={validated}>
        {error && (<Form.Text color='danger'>{error}</Form.Text>)}
        {props.action === "update" && (<Form.Group className='mb-2'>
          <Form.Label className='fw-bold'>ID</Form.Label>
          <Form.Control type="text" disabled readOnly value={props.person.id} />
        </Form.Group>)}
        <Form.Group className='mb-2' controlId='firstname'>
          <Form.Label className='fw-bold'>Prénom *</Form.Label>
          <Form.Control type="text" defaultValue={props?.person?.firstname} required minLength={2} maxLength={50} />
          <Form.Control.Feedback type="invalid">Un prénom est attendue (au moins deux caractères).</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-2' controlId='lastname'>
          <Form.Label className='fw-bold'>Nom *</Form.Label>
          <Form.Control type="text" defaultValue={props?.person?.lastname} required minLength={2} maxLength={50} />
          <Form.Control.Feedback type="invalid">Un nom est attendue (au moins deux caractères).</Form.Control.Feedback>
        </Form.Group>
        <Button variant='success' className='text-center' type='submit'>{props.buttonText}</Button>
      </Form>
    </>
  )
}

export default PersonForm