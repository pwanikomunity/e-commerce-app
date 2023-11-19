import React, { useContext, useState } from "react";
import Categories from "./Categories";
import "./Categories.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ShopContext } from "../../Context/Cart-context";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Footer from "../home/Footer";

export const Productsdata = () => {
  const [showModal, setShowModal] = useState(false);
  const handleAccountClick = () => {
    setShowModal((current) => !current);
  };
  const [query, setQuery] = useState("");
  const [data, setData] = useState(Categories);
  const navigate = useNavigate();
  const filterItems = (catItems) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItems;
    });
    setData(result);
  };

  const handleCartItems = () => {
    navigate("/orders");
  };
  return (
    <>
      <section className=" flex space-x-[1rem] bg-white pt-4 w-[100%]">
        <div className="items-center ml-[0.5rem] ">
          <h1 className="text-center p-3">E-Commerce-Sell/Buy</h1>
        </div>
        <div className="border h-[3rem] p-[0.5rem]">
          <MenuOutlinedIcon fontSize="large" />
        </div>
        <div className="flex h-[3rem] w-[50%] border border-yellow-900 mb-[1rem]">
          <input
            className="w-[100%] h-[100%] text-center"
            placeholder="search products"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="ml-[1rem] ">
          <button className="btn-primary h-[3rem] w-[5rem]">search</button>
        </div>

        <div onClick={handleAccountClick}>
          <h1 className="ml-[1rem] text-center p-3 hover:text-yellow-500 hover:cursor-pointer">
            Account
          </h1>
        </div>
        {showModal && createPortal(<Modal />, document.body)}
        <h1 className="h-[3rem] text-center p-3 hover:text-yellow-500 hover:cursor-pointer ml-[1rem]">
          Help?
        </h1>
        <div
          className="flex p-3 hover:cursor-pointer hover:text-yellow-500 ml-[1rem] h-[3rem]"
          onClick={handleCartItems}
        >
          <h1 className="text-center text-yellow-900 ">
            <ShoppingCart />
          </h1>
          <h1 className="text-center hover:text-yellow-500 ">Cart</h1>
        </div>
      </section>

      <div className=" flex justify-between mt-[2rem] mb-[1rem]   ">
        <button
          className=" btn-primary w-[5rem] "
          onClick={() => setData(Categories)}
        >
          All
        </button>
        <br />
        <button
          className=" btn-primary  w-[5rem] "
          onClick={() => filterItems("Men")}
        >
          Men
        </button>
        <br />
        <button
          className=" btn-primary  w-[5rem] "
          onClick={() => filterItems("women")}
        >
          Women
        </button>
        <br />
        <button
          className=" btn-primary  w-[5rem] "
          onClick={() => filterItems("children")}
        >
          Children
        </button>
        <br />
        <button
          className=" btn-primary   w-[5rem] "
          onClick={() => filterItems("Phones")}
        >
          Phones
        </button>
        <br />
        <button
          className=" btn-primary   w-[5rem] "
          onClick={() => filterItems("shoes")}
        >
          Shoes
        </button>
        <br />
        <button
          className=" btn-primary  w-[5rem] "
          onClick={() => filterItems("Computers")}
        >
          Computers
        </button>
        <br />
        <button
          className=" btn-primary  w-[5rem] "
          onClick={() => filterItems("Sportswear")}
        >
          Sports{" "}
        </button>
        <br />
      </div>

      <div className="">
        <div className=" flex ">
          <div className="mt-[1rem]">
            <div className=" flex justify-between flex-wrap  bg-white p-[1rem]">
              {Categories.filter((data) =>
                data.category.toLowerCase().includes(query)
              ).map((values) => {
                const { Id, title, price, about, image } = values;

                const { addToCart, cartItems } = useContext(ShopContext);
                const cartItemsAmout = cartItems[Id];
                return (
                  <div className="   " key={Id}>
                    <div className="" key={Id}>
                      <div
                        className="rounded  shadow-md hover:scale-105 transition-transform duration-300 ease-in-out  mb-[1rem] "
                        key={Id}
                      >
                        <div className="w-[15rem] h-[15rem]">
                          <img
                            className="w-[100%] h-[100%] object-cover"
                            src={image}
                          />
                        </div>

                        <div className="  ">
                          <h4 className="text-[1rem]">{title}</h4>
                          <p className="font-bold">Ksh {price}</p>
                          <p className="text-[1rem] w-[14rem]">{about}</p>
                          <button
                            className=" btn-primary h-[3rem] "
                            onClick={() => addToCart(Id)}
                          >
                            ADD TO CART{" "}
                            {cartItemsAmout > 0 && <>({cartItemsAmout} )</>}{" "}
                          </button>
                          <div className="flex p-2" onClick={handleCartItems}>
                            <h1 className="text-center ">
                              <ShoppingCartIcon />
                            </h1>
                            <h1 className="text-center ">Cart</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
