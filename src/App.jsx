
import { useState } from 'react'
import { UserForm } from './pages/User/userForm/UserForm'
import {ActiveSessions} from './pages/Waiter/acitveSessions/ActiveSessions'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router} from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import "./index.scss"
function App() {
  

  return (
    <>
      <Router>
        <NavBar/>
        <main>
          <AppRoutes/>
         </main>
        <Footer/>
      </Router>
    </>
  )
}

export default App