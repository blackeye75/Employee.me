"use client";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";


const Nav = () => {
  return (
    <nav className="w-full h-20 border-b-2 ">
      <div className=" wrapper h-full flex gap-[20vw] items-center justify-start">
        <div className="logo  ml-2 w-36"><img src="/logo.png" alt="" /></div>
        <div
          className="links space-x-4 tracking-tight [&>*:nth-child(2)]:bg-orange-300
        [&>*:nth-child(2)]:px-3 [&>*:nth-child(2)]:py-2 [&>*:nth-child(2)]:rounded-full [&>*:nth-child(2)]:text-orange-600 flex items-center  "
        >
          {[
            "Resume Scan",
            "New Launch",
            "Resume Keywords",
            "Resume Services",
            "Carrer Blog",
            "About Us",
          ].map((item) => {
            return <a className="hover:underline" href="#">{item}</a>;
          })}
          <div className="login">
            <button className="flex  bg-gray-300 border-2 rounded-full gap-1 justify-center items-center">
              <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="bg-gray-100 h-8 w-8 rounded-full" alt="" />
              <span>Priyanshu</span>
              <RiArrowDropDownLine size={30} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
