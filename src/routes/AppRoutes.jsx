import {Routes, Route, Navigate} from 'react-router-dom'
import ShowProducts from '../pages/User/products/Products'
import Cart from '../pages/User/cart/Cart'
import CartContextProvider from '../context/CartContext';
import Login from '../pages/Admin/login/Login';
import { Dashboard } from '../pages/Admin/dashboard/Dashboard';
import { UserForm } from '../pages/User/userForm/UserForm';
import { ActiveSessions } from '../pages/Waiter/acitveSessions/ActiveSessions';
import {TablesStatus} from '../pages/Waiter/tables/TablesStatus.jsx'
import TokenAuthProvider from '../context/TokenAuth';
import withAuthGuard from '../components/protectedRoute/ProtectedRoute.jsx';
const ADMIN_ROLE = '3ca4d91f-4ca2-46e5-ba9c-8bd12fe0645a';
const WAITER_ROLE = 'edddd5fe-b693-4009-8592-209aeb5668e6'

const ProtectedDashboard = withAuthGuard(Dashboard, [ADMIN_ROLE]);
const ProtectedSessions = withAuthGuard(ActiveSessions, [WAITER_ROLE]);
const TablesS = withAuthGuard(TablesStatus, [WAITER_ROLE]);


export const AppRoutes = () => {
  return (
    <TokenAuthProvider>
        <Routes>
          <Route path='/products' element={
            <CartContextProvider>
              <ShowProducts />
            </CartContextProvider>
            } />
          <Route path='/cart' element={
             <CartContextProvider>
              <Cart />
          </CartContextProvider>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/tables' element={<TablesS/>} />
          <Route path='/dashboard' element={<ProtectedDashboard />} />
          <Route path='/:tableId' element={<UserForm />} />
          <Route path='/sessions' element={<ProtectedSessions />} />
          <Route path='/*' element={<Navigate to="/login"/>}/>
        </Routes>
    </TokenAuthProvider>
  );
};

export default AppRoutes;
