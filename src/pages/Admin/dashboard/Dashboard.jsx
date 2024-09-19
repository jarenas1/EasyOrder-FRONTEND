import { CrudButton } from '../../../components/crudButton/CrudButton'
import './dashboard.scss'
import React from 'react'

export  const Dashboard = () => {

  return (
    <>
      <section className='dashboard-container'>
      <h1>Panel de control</h1>
        {/* BUTTON TO SELECT THE CRUD */}
        <article>
        <CrudButton/>
        </article>
        {/* CRUD */}
      </section>
      
    </>
  )
}


