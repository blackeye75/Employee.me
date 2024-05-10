"use client";
import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowDropUpLine } from "react-icons/ri";
import { MdOutlineHelpCenter } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Sidebar = () => {

  return (
    <div className="wrapper p-5 pt-1 w-[20vw] h-screen border-r-2  flex justify-between flex-col">
     <div className="up">
     <div className="JobRecommened  pt-4 flex justify-center items-center gap-1 ">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.49996 18.3333H12.5C16.6666 18.3333 18.3333 16.6666 18.3333 12.5V7.49996C18.3333 3.33329 16.6666 1.66663 12.5 1.66663H7.49996C3.33329 1.66663 1.66663 3.33329 1.66663 7.49996V12.5C1.66663 16.6666 3.33329 18.3333 7.49996 18.3333Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.33337 1.66663V18.3333"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.33337 10H18.3334"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="tool text-xl font-bold tracking-tighter ">
          Job Recommendation Tool
        </div>
      </div>
      <div className="boards flex justify-between px-2 text-white w-[15vw] mt-2 py-2 bg-blue-950 rounded-md ">
        <div className="flex gap-2">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.525 6.30318C15.5583 6.81151 15.5166 7.38651 15.4166 8.02818L14.8083 11.9365C14.2916 15.1948 12.7833 16.2948 9.52495 15.7865L5.61662 15.1698C4.49162 14.9948 3.62495 14.6948 2.99162 14.2448C1.78329 13.4032 1.43329 12.0198 1.76662 9.88651L2.38329 5.97818C2.89995 2.71984 4.40829 1.61984 7.66662 2.12818L11.575 2.74484C14.1916 3.15318 15.4166 4.21984 15.525 6.30318Z"
              stroke="#FF9800"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.0834 11.5699L15.8334 15.3282C14.7917 18.4616 13.125 19.2949 9.9917 18.2532L6.23337 17.0032C4.3417 16.3782 3.2917 15.5116 2.9917 14.2449C3.62503 14.6949 4.4917 14.9949 5.6167 15.1699L9.52503 15.7866C12.7834 16.2949 14.2917 15.1949 14.8084 11.9366L15.4167 8.02822C15.5167 7.38656 15.5584 6.81156 15.525 6.30322C17.5167 7.36156 17.95 8.96156 17.0834 11.5699Z"
              stroke="#FF9800"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.86663 7.82822C7.66744 7.82822 8.31663 7.17904 8.31663 6.37822C8.31663 5.57741 7.66744 4.92822 6.86663 4.92822C6.06581 4.92822 5.41663 5.57741 5.41663 6.37822C5.41663 7.17904 6.06581 7.82822 6.86663 7.82822Z"
              stroke="#FF9800"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>Job Boards</div>
        </div>
        <div>
          <RiArrowDropUpLine size={22} />
        </div>
      </div>
      <div className="list w-[15vw] ">
        <a href="#" className="inline-block w-full " >
        <li className="px-3 py-1  mt-2 hover:bg-gray-200 hover:text-orange-500 rounded-md">
          UI/UX designer
        </li>
        </a>
        <a href="" className="inline-block w-full ">
        <li className="px-3 py-1 mt-2 hover:bg-gray-200 hover:text-orange-500 rounded-md">
          Web Developer
        </li>
        </a>
        <a href="#" className="inline-block w-full ">
        <li className="px-3 py-1  mt-2 hover:bg-gray-200 hover:text-orange-500 rounded-md">
          Analyst
        </li>
        </a>
        <a href="" className=" new inline-block  px-3 py-1 text-orange-500 mt-2">
          + Create New Profile
        </a>
      </div>
      <div className="menu  w-[15vw] ">
        <a href="#" className="history flex items-center gap-2 px-3 py-2">
          <img className="h-5" src="/frame.png" alt="" />
          <span>History</span>
        </a>
        <a href="#" className="history flex items-center gap-2 px-3 py-2">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3334 5.74996V7.76662C18.3334 9.08329 17.5 9.91663 16.1834 9.91663H13.3334V4.09162C13.3334 3.16662 14.0917 2.41663 15.0167 2.41663C15.925 2.42496 16.7584 2.79162 17.3584 3.39162C17.9584 3.99996 18.3334 4.83329 18.3334 5.74996Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.66663 6.58329V18.25C1.66663 18.9416 2.44996 19.3333 2.99996 18.9166L4.42496 17.85C4.75829 17.6 5.22496 17.6333 5.52496 17.9333L6.90829 19.325C7.23329 19.65 7.76663 19.65 8.09163 19.325L9.49163 17.925C9.78329 17.6333 10.25 17.6 10.575 17.85L12 18.9166C12.55 19.325 13.3333 18.9333 13.3333 18.25V4.08329C13.3333 3.16663 14.0833 2.41663 15 2.41663H5.83329H4.99996C2.49996 2.41663 1.66663 3.90829 1.66663 5.74996V6.58329Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Saved Jobs</span>
        </a>
        <a href="#" className="history flex items-center gap-2 px-3 py-2">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.22656 12.4416C7.22656 13.5166 8.05156 14.3832 9.07656 14.3832H11.1682C12.0599 14.3832 12.7849 13.6249 12.7849 12.6916C12.7849 11.6749 12.3432 11.3166 11.6849 11.0832L8.32656 9.91658C7.66823 9.68324 7.22656 9.32491 7.22656 8.30824C7.22656 7.37491 7.95156 6.61658 8.84323 6.61658H10.9349C11.9599 6.61658 12.7849 7.48324 12.7849 8.55824"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 5.5V15.5"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 18.8333H7.49996C3.33329 18.8333 1.66663 17.1666 1.66663 13V7.99996C1.66663 3.83329 3.33329 2.16663 7.49996 2.16663H12.5C16.6666 2.16663 18.3333 3.83329 18.3333 7.99996V13C18.3333 17.1666 16.6666 18.8333 12.5 18.8333Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Plans</span>
        </a>
        <a href="#" className="history flex items-center gap-2 px-3 py-2">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6.4062C14.95 6.39787 14.8917 6.39787 14.8417 6.4062C13.6917 6.36454 12.775 5.42287 12.775 4.2562C12.775 3.06454 13.7334 2.1062 14.925 2.1062C16.1167 2.1062 17.075 3.07287 17.075 4.2562C17.0667 5.42287 16.15 6.36454 15 6.4062Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.1417 12.473C15.2834 12.6647 16.5417 12.4647 17.425 11.873C18.6 11.0897 18.6 9.80634 17.425 9.023C16.5334 8.43134 15.2584 8.23133 14.1167 8.43133"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.97478 6.40633C5.02478 6.39799 5.08311 6.39799 5.13311 6.40633C6.28311 6.36466 7.19978 5.42299 7.19978 4.25632C7.19978 3.06466 6.24145 2.10632 5.04978 2.10632C3.85812 2.10632 2.89978 3.07299 2.89978 4.25632C2.90811 5.42299 3.82478 6.36466 4.97478 6.40633Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.83304 12.473C4.69137 12.6647 3.43304 12.4647 2.54971 11.873C1.37471 11.0897 1.37471 9.80634 2.54971 9.023C3.44137 8.43134 4.71637 8.23133 5.85804 8.43133"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.0001 12.6312C9.95014 12.6228 9.89181 12.6228 9.84181 12.6312C8.69181 12.5895 7.77515 11.6478 7.77515 10.4812C7.77515 9.28951 8.73348 8.33118 9.92514 8.33118C11.1168 8.33118 12.0751 9.29784 12.0751 10.4812C12.0668 11.6478 11.1501 12.5978 10.0001 12.6312Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.57534 15.2562C6.40034 16.0396 6.40034 17.3229 7.57534 18.1062C8.90868 18.9979 11.092 18.9979 12.4253 18.1062C13.6003 17.3229 13.6003 16.0396 12.4253 15.2562C11.1003 14.3729 8.90868 14.3729 7.57534 15.2562Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Manage Profiles</span>
        </a>
      </div>
     </div>
    <div className="bottom">
    <div className="help flex flex-col text-sm">
        <span className="tracking-tighter mb-3 text-zinc-400 text-sm" >Help & Support</span>
        <a className="flex items-center gap-2 px-2 py-1" href="#"><IoSettingsOutline /> <h1>Setting</h1></a>
        <a className="flex items-center gap-2 px-2 py-1" href="#"><MdOutlineHelpCenter /><h1>Help Center</h1></a>
        <a className="px-3 py-2 border-2 w-2/3 rounded-lg "  href="#">Current Plans:<span className="text-orange-600" >Free</span> </a>
      </div>
      <a href="#" className="upgrade flex gap-2 justify-center items-center mt-3 border-[1px] rounded-lg border-orange-600 px-2 py-3 w-2/3 text-sm">
        <div className="icon">
        <MdWorkspacePremium className="text-orange-600  " size={30}/>
        </div>
        <div className="text leading-none tracking-tighter ">
          <h1>Upgrade To Pro</h1>
          <h1 className="text-xs text-zinc-600" >Get All Features</h1>
        </div>
          <div className="next">
          <FaArrowRight />
          </div>
      </a>
    </div>
    </div>
  );
};

export default Sidebar;
