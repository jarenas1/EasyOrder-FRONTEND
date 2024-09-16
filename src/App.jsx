
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router} from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
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