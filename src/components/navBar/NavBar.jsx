import { useLocation, useNavigate } from "react-router-dom";
import "./navBar.scss"
import Button from "../btn/Button";
function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  let content;
  if (location.pathname == "/cart") {
    content = <Button text="products" handlerClick={() => {
      navigate("/products")
    }} />
    
    
  } 
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
