import {Routes, Route} from 'react-router-dom'
import ShowProducts from '../pages/User/products/Products'
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/products' element= {<ShowProducts/>}></Route>
    </Routes>
  )
}


