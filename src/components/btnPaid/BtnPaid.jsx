import { json } from 'react-router-dom';
import useFetch from '../../api/apiFetch';
import './btnPaid.scss'


import React, { useState } from 'react'

export const BtnPaid = ({id,paid}) => {
    const [isPaid, setIsPaid] = useState(paid)

    const patchPaid = async() => {
        let data = await fetch(
        `https://easyorder-backend-3.onrender.com/api/v1/sessions/${id}/paid`, {
        method: 'PATCH',
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        'Content-Type': 'application/json'},
        body: JSON.stringify({paid: isPaid})})
        setIsPaid(!isPaid)
    }

  return (
    <button onClick={patchPaid}>{`Pagado`}</button>
  )
}
