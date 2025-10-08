import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import PersonForm from '../components/PersonForm';
import PersonDataService from '../service/person.service';

const EditPerson = () => {
    const [person, setPerson] = useState(null);
    const [chargement, setChargement] = useState(false);
    const [error, setError] = useState(null);
    
    const getPerson = () => {
        let personId = Number(location.pathname.split(":")[1]);
        setChargement(true);
        setError(null);
        PersonDataService.get(personId)
            .then(response => {
                setPerson({...response.data})
            })
            .catch(erreur => {
                console.log(erreur);
                setError("Erreur lors du chargement de la liste de personnes !")
            })
            .finally(() => { setChargement(false); });
    }

    useEffect(() => getPerson(), []);
  return (
    <>
            <Container className='bg-dark-subtle' fluid="xxl" style={{ padding: 0 }}>
                <Row>
                    {chargement && (
                        <div className='spinner-container'>
                            <p className='spinner'></p>
                            <p>Chargement ...</p>
                        </div>
                    )}
                    {error && (
                        <div>
                            <p className='fw-bold' colSpan={4}>{error}</p>
                        </div>
                    )}
                    {person && !chargement && !error &&
                    (<Col>
                        <h2 className='text-center my-3'>Modifier {person.firstname} {person.lastname}</h2>
                        <PersonForm buttonText={"Enregistrer les modifications"} person={person} />
                    </Col>)
                    }
                </Row>
            </Container>
    </>
  )
}

export default EditPerson