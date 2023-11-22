import React, { useContext } from 'react'
import Categories from '../Components/Product/Categories'
import { ShopContext } from '../Context/Cart-context'
import { CartItemsComponent } from '../Components/Cart/CartItemsComponent'
import Header from '../components/header'
import Footer from '../components/home/Footer'
import { useNavigate } from 'react-router-dom';

 const Orders = () => {
  const {cartItems,getTotalAmount}=useContext(ShopContext)
  const total=getTotalAmount();
  const navigate=useNavigate();
  
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
       {total> 0 ?(
      <div className="ml-40">
        <p>TOTAL: ksh.{total}  </p>
        <div className='flex w-[30rem] mb-10 '>
        <button className='btn-primary w-[10rem] hover:bg-yellow-900'>Checkout</button>
        <button className='bg-yellow-800 w-[10rem] ml-[2rem] hover:bg-yellow-900 text-white' onClick={()=>navigate('/products')}>Explore</button>
        </div>
      </div>):(
        <div className="ml-40 w-[10rem]">
        <h1 className='font-bold text-red-900'>Your Cart is Empty</h1>
        <p>Visit Our shop For More</p>
        <button className='btn-primary' onClick={()=>navigate('/products')}>Explore</button>
        </div>
      )}
      <section className='bg-gray-900'>
      <Footer />
      </section>
      
      
    </div>
  )
}





export default Orders