
import {BrowserRouter,Route,Routes}  from 'react-router-dom'

import Products from './pages/products'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import { Account } from './pages/Account'




function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
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

