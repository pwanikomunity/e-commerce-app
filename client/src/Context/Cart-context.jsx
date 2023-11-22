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

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
 
      updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
  
      return updatedCart;
    });
  };
  
 
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
    
      updatedCart[itemId] = (updatedCart[itemId] || 0) -1;
  
      return updatedCart;
    });
  };
  

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
  
      updatedCart[itemId] = newAmount;
  
      return updatedCart;
    });
  };
  const clearCart = () => {
    setCartItems(getDefaultCart());
}

  const getTotalAmount = () => {
    let totalAmount = 0;
    
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = Categories.find((product) => product.Id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
        }
    }

    return totalAmount;
}

  
  console.log(cartItems)
  const contextValue={cartItems,addToCart,removeFromCart, updateCartItemCount,getTotalAmount, clearCart}
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}


// const total=cartItems.reduce((price,item)=>
//   {
//     total+ item.price * item.quantity,0
//   });