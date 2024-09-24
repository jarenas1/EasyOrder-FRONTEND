import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router} from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import "./index.scss"
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Router>
        <NavBar />
        <main >
          <AppRoutes/>
        </main>
        <Footer/>
      </Router>
      </BrowserRouter>
    </>
  )
}

export default App