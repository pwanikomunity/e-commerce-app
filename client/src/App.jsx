
import {BrowserRouter,Route,Routes}  from 'react-router-dom'
import Profile from './pages/Profile'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import { Login } from './Components/Auth/Login'
import Products from './pages/products'
import { Orders } from './pages/Orders'

const App=()=>{

  return (
    <>
    
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login  />} />
        <Route path='/Dashboard' element={<Dashboard />}>
          <Route index  path='products' element={<Products />} />
          <Route path='orders' element={<Orders />} />
          <Route path='transactions'  element={<Transactions />} />
          <Route path='profile' element={<Profile />}/>
          <Route path='settings' element={<Settings />}/>
          

        </Route>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App;

