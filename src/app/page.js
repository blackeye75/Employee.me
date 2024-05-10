import Nav from "@/components/Nav";
import Properties from "@/components/Properties";
import Sidebar from "@/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <>
    <Nav />
    <div className="main flex">
      <div className="side ">
        <Sidebar />
      </div>
      <div className="right w-full" >
        <Properties />
      </div>
    </div>
    </>
  );
};

export default page;
