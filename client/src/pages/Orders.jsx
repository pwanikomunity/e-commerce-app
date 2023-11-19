import React, { useContext } from 'react'
import Categories from '../Components/Product/Categories'
import { ShopContext } from '../Context/Cart-context'
import { CartItemsComponent } from '../Components/Cart/CartItemsComponent'

 const Orders = () => {
  const {cartItems,getTotalAmount}=useContext(ShopContext)
  const total=getTotalAmount();
  
  return (
    <div>
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
      
    </div>
  )
}





export default Orders