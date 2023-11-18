import React from "react";
import { NavLink } from "react-router-dom";
const navLinks = [
  {
    title: "Our Categories",
    path: "products",
  },
  {
    title: "Fashion",
    path: "orders",
  },
  {
    title: "Computing",
    path: "transactions",
  },
  {
    title: "Supermarket",
    path: "profile",
  },
  {
    title: "Sporting goods",
    path: "settings",
  },
  {
    title: "Cart",
    path: "shopping",
  },
];

export default function Navbar() {
  return (

    <div className="">
      <div className="">
        <ul className="h-[30vh] w-[10rem] ml-[3.5rem]  shadow-2xl fixed  flex flex-col space-y-[1rem] mt-[4rem] ">
          {navLinks.slice(0, -1).map((item) => {
            return (
              <div>
                <li className=" flex-grow  ml-5 hover:text-yellow-500">
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              </div>
            );
          })}
          <li className="flex-grow mt-auto  ml-5 hover:text-yellow-500 ">
            <NavLink to={navLinks[navLinks.length - 1].path}>
              {navLinks[navLinks.length - 1].title}
            </NavLink>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}
