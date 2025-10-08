import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaTrashCan } from 'react-icons/fa6';
import { FaPenFancy } from 'react-icons/fa';
import personService from '../service/person.service';

const PersonLine = (props) => {
    const [chargement, setChargement] = useState(false);
    const [error, setError] = useState(null);

    const loadEdit = () => {
        location.replace(`/person/:${props.id}`);
    }

    const handleDelete = () => {
        setChargement(true);
        setError(null);
        let deleteValidation = confirm("Êtes-vous sûr de vouloir supprimer cette personne de la liste ?")
        if (confirm("Êtes-vous sûr de vouloir supprimer cette personne de la liste ?")) {
            personService.delete(props.id)
                .catch(erreur => {
                    console.log(erreur);
                    setError("Erreur lors du chargement de la suppression de la personne !")
                })
                .finally(() => { setChargement(false); });
        }
    }

  return (
    <>
        <td>{props.theperson.id}</td>
        <td>{props.theperson.firstname}</td>
        <td>{props.theperson.lastname}</td>
        <td className='d-flex'>
            <Button className='mx-2' variant='success' onClick={loadEdit}><FaPenFancy /></Button>
            {chargement && (
                <div className='spinner-container'>
                    <div className='spinner'></div>
                </div>)}
            {!chargement && (
                <Button variant='outline-danger' onClick={handleDelete}><FaTrashCan /></Button>
            )}
            {error && (<p>{error}</p>)}
        </td>
    </>
  )
}

export default PersonLine