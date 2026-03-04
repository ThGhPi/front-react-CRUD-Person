import React, { useEffect, useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import PersonLine from '../components/PersonLine';
import PersonDataService from '../service/person.service';

const PersonList = () => {
    const [personList, setPersonList] = useState(null);
    const [chargement, setChargement] = useState(false);
    const [error, setError] = useState(null);
    const [deleted, setDeleted] = useState([]);

    const getAll = () => {
        setChargement(true);
        setError(null);
        PersonDataService.getAll()
            .then(response => {
                setPersonList([...response.data])
            })
            .catch(erreur => {
                console.log(erreur);
                setError("Erreur lors du chargement de la liste de personnes !")
            })
            .finally(() => { setChargement(false); });
    }

    useEffect(() => getAll(), []);

    return (
        <>
            <Container className='bg-dark-subtle' fluid="md" style={{ padding: 0 }}>
                <div className='d-flex justify-content-center'>

                </div>
                <Table className='mx-auto' striped hover size="xl">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {chargement && (
                            <tr>
                                <td className='spinner-container'><div className='spinner'></div></td>
                                <td>Chargement ...</td>
                                <td>Chargement ...</td>
                                <td className='spinner-container'><div className='spinner'></div></td>
                            </tr>
                        )}
                        {error && (
                            <tr>
                                <td className='fw-bold' colSpan={4}>{error}</td>
                            </tr>
                        )}
                        {personList && !chargement && !error && personList.map(person => {
                            if (!deleted.includes(person.id)) {
                                return (
                                    <tr key={person.id} className='my-1'>
                                        <PersonLine theperson={person} id={person.id} handleDeletion={setDeleted} />
                                    </tr>
                                )
                            }
                        }
                        )}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default PersonList