import React from 'react'
import { Button } from 'react-bootstrap'
import { FaTrashCan } from 'react-icons/fa6';
import { FaPenFancy } from 'react-icons/fa';

const PersonLine = (props) => {

    const loadEdit = () => {
        location.replace(`/person/:${props.id}`);
    }

  return (
    <>
        <td>{props.theperson.id}</td>
        <td>{props.theperson.firstname}</td>
        <td>{props.theperson.lastname}</td>
        <td>
            <Button className='mx-2' variant='success' onClick={loadEdit}><FaPenFancy /></Button>
            <Button variant='outline-danger' onClick={() => confirm("Êtes-vous sûr de vouloir supprimer cette personne de la liste ?")}><FaTrashCan /></Button>
        </td>
    </>
  )
}

export default PersonLine