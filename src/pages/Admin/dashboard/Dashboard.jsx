import useFetch from '../../../api/apiFetch'
import { CrudButton } from '../../../components/crudButton/CrudButton'
import './dashboard.scss'
import React, { useEffect, useState } from 'react'

export  const Dashboard = () => {

  const [mesas, setMesas] = useState([])
  const  {data, error} = useFetch("https://easyorder-backend-3.onrender.com/api/v1/tables", {
    method: 'GET',
    headers: {
  'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  'Content-Type': 'application/json',
   },
 });

  
  return (
    <>
      <section className='dashboard-container'>
      <h1>Panel de control</h1>
        {/* BUTTON TO SELECT THE CRUD */}
        <article>
        <CrudButton data = {data}/>
        </article>
        {/* CRUD */}
      </section>
      
    </>
  )
}


