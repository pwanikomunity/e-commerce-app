import React, { createContext, useState } from 'react'
import Categories from '../Components/Product/Categories';


export const ShopContext=createContext(null)
const getDefaultCart=()=>{
  let cart={};
  for (let i=1; i<Categories.length; i++){
    cart[i]=0;
  }
  return cart;
}
export const CartContextProvider = (props) => {
  const[cartItems,setCartItems]=useState( getDefaultCart)

  // const addToCart=(itemId)=>{
  //   setCartItems((prev)=>({...prev, [itemId]: prev[itemId] +1 }));

  // }
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      
      // If the item is already in the cart, increment the quantity
      // If not, add the item to the cart with quantity 1
      updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
  
      return updatedCart;
    });
  };
  
  // const removeFromCart=(itemId)=>{
  //   setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}));

  // }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      
      // If the item is already in the cart, increment the quantity
      // If not, add the item to the cart with quantity 1
      updatedCart[itemId] = (updatedCart[itemId] || 0) -1;
  
      return updatedCart;
    });
  };
  
  // const updateCartItemCount=(newAmount,itemId)=>{
  //   setCartItems((prev)=({...prev, [itemId]: newAmount}));
  // }
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
  
      // If the item is not in the cart, add it with the new quantity
      updatedCart[itemId] = newAmount;
  
      return updatedCart;
    });
  };
  
  const getTotalAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
      if (cartItems[item]>0){
        let itemInfo= Categories.find((product)=>product.id===Number(item));
        totalAmount+=cartItems[item]* itemInfo.price
      }
    }
    return totalAmount
  }
  console.log(cartItems)
  const contextValue={cartItems,addToCart,removeFromCart, updateCartItemCount,getTotalAmount}
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
