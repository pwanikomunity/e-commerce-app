import React from "react";
import { NavLink } from "react-router-dom";
const navLinks = [
  {
    title: "Products",
    path: "products",
  },
  {
    title: "Orders",
    path: "orders",
  },
  {
    title: "Transactions",
    path: "transactions",
  },
  {
    title: "Profile",
    path: "profile",
  },
  {
    title: "Settings",
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
        <ul className="h-screen w-[7rem] border-r shadow-2xl fixed mt-[4rem] flex flex-col space-y-[4rem] ">
          {navLinks.slice(0, -1).map((item) => {
            return (
              <div>
                <li className=" flex-grow w-[3.4rem] ml-5 h-[3.4rem] ">
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              </div>
            );
          })}
          <li className="flex-grow mt-auto m-3 w-[3.4rem] ml-5 h-[3.4rem]">
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
