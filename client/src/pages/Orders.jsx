import React, { useContext } from 'react'
import Categories from '../Components/Product/Categories'
import { ShopContext } from '../Context/Cart-context'
import { CartItemsComponent } from '../Components/Cart/CartItemsComponent'

 const Orders = () => {
  const {cartItems}=useContext(ShopContext)
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
       
      <div className="checkout">
       
        <p>TOTAL  </p>
        <button>Checkout</button>
      </div>
      
    </div>
  )
}





export default Orders