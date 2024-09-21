import useFetch from '../../../api/apiFetch'
import { CrudButton } from '../../../components/crudButton/CrudButton'
import './dashboard.scss'
import React, { useEffect, useState } from 'react'

export  const Dashboard = () => {

//-----------------------------------------------------TABLES--------------------------------------------------------
  const handleEditTable = (tabla,nombre,id) =>{
    console.log("Me estan editando",tabla,nombre,id);
  }
  const handleDeleteTable = (tabla,nombre,id) =>{
    console.log("Me estan deleteando",tabla,nombre,id);
    
  }


  //-----------------------------------------------------TABLES--------------------------------------------------------
  

   //-----------------------------------------------------WAITERS--------------------------------------------------------


  //-----------------------------------------------------WAITERS--------------------------------------------------------
 const {data: dataProducts, error: errorProducts} = useFetch("https://easyorder-backend-3.onrender.com/api/v1/products", {
  method: 'GET',
  headers: {
'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
'Content-Type': 'application/json',
 },
});



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
        {/* CRUD */}
      </section>
      
    </>
  )
}


