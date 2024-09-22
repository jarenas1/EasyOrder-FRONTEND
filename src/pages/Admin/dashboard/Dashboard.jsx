import useFetch from '../../../api/apiFetch'
import { CrudButton } from '../../../components/crudButton/CrudButton'
import './dashboard.scss'
import React, { useEffect, useState } from 'react'

export  const Dashboard = () => {

const adminData =JSON.parse(localStorage.getItem("userData"))  
  
  return (
    <>
      <section className='dashboard-container'>
        <h2>Hola administrador {adminData.name}</h2>
      <h1>Panel de control</h1>
        {/* BUTTON TO SELECT THE CRUD */}
        <article>
        <CrudButton />
        </article>
      </section>
    </>
  )
}


