import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Cart-context';
import { Delete } from '@mui/icons-material';

export const CartItemsComponent = (props) => {
  const { Id, title, price, about, image } = props.data;
  const {cartItems,addToCart,removeFromCart, updateCartItemCount}=useContext(ShopContext)
  return (
    <div className='pl-40 '>
      <div className="flex g-[5rem] justify-between rounded border shadow-md p-5 mb-10 h-[10rem] w-[80%]">
        <img className='w-[9rem] h-[8rem] object-contain' src={image}/>
        <div className="align-center mt-[2%] ml-[5rem]">
        <h4 className='text-[1rem]'>{title}</h4>
        <p className='font-bold'>Ksh {price}</p>
        <div className="flex g-[2rem] w-[3rem]">
          <button className='font-bold w-[2rem] bg-red-500 text-white px-4 py-2' onClick={()=>removeFromCart(Id )} >-</button>
          <input className='w-[2rem] border-black border border-yellow-900 ml-[1rem]' value={cartItems[Id]}  onChange={(e)=>updateCartItemCount(Number(e.target.value),Id )}/>
          <button className='font-bold w-[2rem] bg-green-500 text-white px-4 py-2 ml-[1rem]' onClick={()=>addToCart(Id)}>+</button>
        </div>
      

        </div>
        <div className=" flex-end ml-30">
          <h1 onClick={()=>removeFromCart(Id)}><Delete/></h1>
          
        </div>
      </div>
    </div>
  )
}
