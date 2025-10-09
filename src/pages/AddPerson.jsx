import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PersonForm from '../components/PersonForm'

const AddPerson = () => {
  return (
    <>
      <Container className='bg-dark-subtle' fluid="xxl" style={{ padding: 0 }}>
        <Row>
          <Col>
            <h2 className='text-center my-3'>Ajouter une personne</h2>
            <PersonForm buttonText={"Enregistrer"} action={"create"} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddPerson