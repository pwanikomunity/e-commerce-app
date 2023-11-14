
import {BrowserRouter,Route,Routes}  from 'react-router-dom'

import Products from './pages/Products'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import { Account } from './pages/Account'
import { Login } from './Components/Auth/Login'




function App() {

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
          
          
          
         
          <Route  />

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

