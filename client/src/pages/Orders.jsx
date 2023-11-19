import React, { useContext } from 'react'
import Categories from '../Components/Product/Categories'
import { ShopContext } from '../Context/Cart-context'
import { CartItemsComponent } from '../Components/Cart/CartItemsComponent'
import Header from '../components/header'
import Footer from '../components/home/Footer'

 const Orders = () => {
  const {cartItems,getTotalAmount}=useContext(ShopContext)
  const total=getTotalAmount();
  
  return (
    <div >
      <div className='bg-gray-900 pt-[1rem] pb-[2rem]'>
      <Header />
      </div>
      
      <div>
        <h1 className='ml-40 font-bold s-20'>Cart Items</h1>
      </div>
      <div className='cartItems'>
        {Categories.map((product)=>{
          if(cartItems[product.Id]!==0){
            return <CartItemsComponent data={product}/>
          }
        })};
      </div>
       
      <div className="ml-40">
       
        <p>TOTAL: ksh.{total}  </p>
        <button className='btn-primary w-[15rem]'>Checkout</button>
      </div>
      <section className='bg-gray-900'>
      <Footer />
      </section>
      
      
    </div>
  )
}





export default Orders