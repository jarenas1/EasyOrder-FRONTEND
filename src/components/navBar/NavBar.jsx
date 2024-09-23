import { useLocation, useNavigate } from "react-router-dom";
import "./navBar.scss"
import Button from "../btn/Button";
function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  let content;
  if (location.pathname == "/cart") {
    content = <Button style = "btnn" text="Productos" handlerClick={() => {
      navigate("/products")
    }} />}

    if (location.pathname == "/dashboard" || location.pathname == "/sessions") {
      content = <button className='session-close' onClick={() => {
        navigate("/login")
        localStorage.removeItem("userToken")
        localStorage.removeItem("userData")
      }}>Cerrar sesion</button>}
    
    
  return (
      <nav className='nav'>
          <figure className='nav__figure'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2XwnyPtF7Hz-ih0upJkh68hDDA03NbK-Ag&s" alt="" className='nav__img' />
          </figure>
          {content}

      
      
      </nav>
      
  )
}

export default NavBar
