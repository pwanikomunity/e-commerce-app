import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Modal from "./account/Modal";
import { createPortal } from 'react-dom';

export default function Header() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(current=>!current);
  };
  const handleAccountClick = () => {
    setShowModal(current => !current);
    
  };
  const handleCartItems = ()=>{
    navigate('/orders')
  }
  return (
    <div className="flex  w-[90%] mt-[1rem] bg-white  mx-auto onClick={handleClick} pt-3">
      <div className="items-center ml-[0.5rem] ">
        <h1 className="text-center p-3">E-Commerce-Sell/Buy</h1>
      </div>

      <section className="ml-[2rem] flex">
        <div className="border h-[3rem] p-2 mr-[1rem]" onClick={handleClick}>
          {showMenu ? <Navbar /> : <MenuOutlinedIcon fontSize="large" />}
        </div>

        <div className="flex h-[3rem] w-[40vw] border border-yellow-900 mb-[1rem]">
          <input
            className="w-[100%] h-[100%] text-center outline-none"
            placeholder="search products"
          />
        </div>
        <div className="ml-[1rem] ">
          <button className="btn-primary h-[3rem] w-[5rem]">search</button>
        </div>

       <div onClick={handleAccountClick}><h1 className="ml-[1rem] text-center p-3 hover:text-yellow-500 hover:cursor-pointer">Account</h1></div> 
       {showModal && createPortal(<Modal />,document.body)}
        <h1 className="h-[3rem] text-center p-3 hover:text-yellow-500 hover:cursor-pointer ml-[1rem]">Help?</h1>
        <div className="flex p-3 hover:cursor-pointer hover:text-yellow-500 ml-[1rem] h-[3rem]" onClick={handleCartItems}>
          <h1 className="text-center text-yellow-900 ">
            <ShoppingCart />
          </h1>
          <h1 className="text-center hover:text-yellow-500 ">Cart</h1>
        </div>
      </section>
    </div>
  );
}
