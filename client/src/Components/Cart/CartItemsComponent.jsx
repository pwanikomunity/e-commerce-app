import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Cart-context';
import { Delete } from '@mui/icons-material';

export const CartItemsComponent = (props) => {
  const { Id, title, price, about, image } = props.data;
  const {cartItems,addToCart,removeFromCart, updateCartItemCount, clearCart}=useContext(ShopContext)
  return (
    <div className='pl-40 '>
      <div className="flex g-[5rem]  rounded border shadow-md p-5 mb-10 h-fit w-[40%]">
        <img className='w-[9rem] h-[8rem] object-contain ' src={image}/>
    
        <div className="align-center mt-[2%] ml-[2rem]">
        <h4 className='text-[1rem] font-bold w-[70%]'>{title}</h4>
        <p className='font-0.5'>{about}</p>
        
        <div className="flex g-[2rem] w-[2rem] flex-start mt-[2%]">
          <button className='font-bold w-[1.9rem] bg-red-700 text-white px-2 py-2  h-[1.9rem] w-[1.9rem] rounded-full' onClick={()=>removeFromCart(Id )} >-</button>
          <input className='w-[2rem] border-black border border-yellow-900 ml-[1rem] text-center font-bold' value={cartItems[Id]}  onChange={(e)=>updateCartItemCount(Number(e.target.value),Id )}/>
          <button className='font-bold w-[1.9rem] bg-red-900 text-white pb-[0.9rem] px-2 py-2 h-[1.9rem] text-center rounded-full ml-[1rem]' onClick={()=>addToCart(Id)}>+</button>
        </div>
      

        </div>
        <div className=" block   ml-[1.5rem]" >
        <p className=' ml-[2rem] text-green-600'>Ksh{price}</p>
          <h1 className='font-bold mt-[75%] ml-[5rem] text-red-600' onClick={()=>clearCart(Id)}><Delete/></h1>
          
        </div>
      </div>
    </div>
  )
}
