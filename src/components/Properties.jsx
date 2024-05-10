import React from "react";

import { MdOutlineModeEdit } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
const Properties = () => {
  return (
    <div className="main">
      <div className="card w-3/4 flex flex-col m-auto border-2 rounded-md p-5 mt-5 ">
        <div className="heading">Properties</div>
        <div className="dets  flex">
          <div className="left  space-y-2 w-[80%] ">
            <span className="px-2 inline-block py-1 text-xs  bg-slate-200 rounded-md">
              <span className="text-xs text-zinc-500">Job Type:</span>Hybrid
            </span>
            <span className="px-2 m-2 inline-block py-1 text-xs bg-slate-200 rounded-md">
              <span className="text-xs text-zinc-500">Date Posted:</span>
              24-04-24 to 24-04-24
            </span>
            <span className="px-2 m-2 inline-block py-1 text-xs bg-slate-200 rounded-md">
              <span className="text-xs text-zinc-500">Job Type:</span>Full Time
            </span>
            <span className="px-2  inline-block py-1 text-xs bg-slate-200 rounded-md">
              <span className="text-xs text-zinc-500">Salary Range:</span>
              1000$-2500$
            </span>

            <span className="px-2  inline-block py-1 text-xs bg-slate-200 rounded-md">
              <span className="text-xs text-zinc-500">Location:</span>Pune {">"}{" "}
              Delhi {">"} Hyderabad {">"} Tamil Nadu
            </span>
            <span className="px-2 m-2 inline-block py-1 text-xs bg-slate-200 rounded-md">
              <span className="text-xs text-zinc-500">+1</span>
            </span>
            <a
              href="#"
              className="flex w-28 items-center  gap-2 rounded-md p-1 border-2 border-orange-400 tracking-tighter text-sm bg-orange-300"
            >
              <MdOutlineModeEdit className="text-orange-600" />
              Edit Profile
            </a>
          </div>
          <div className="right w-[20%]">
            <div className="container w-full bg-indigo-950 rounded-md text-white p-2 tracking-tight text-center leading-none">
              <h1 className="text-xs">
                Lorem ipsum dolor sit, amet consectetur ad
              </h1>
              <button className="px-2 py-1 rounded-md bg-yellow-500 text-sm w-full mt-2 ">
                Refresh Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="jobs card w-3/4 flex flex-col m-auto border-2 rounded-md p-4 mt-5 ">
        <div className="heading">
          <h1 className="text-sm">Jobs(44)</h1>
        </div>

        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card p-1 w-full flex border-2 rounded-md  mt-2 pl-3">
          <div className="left w-[70%] mt-5">
            <div className="jobdets">
              <div className="companydets flex items-center gap-2">
                <div className="companyLogo w-10 h-10 ">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt=""
                  />
                </div>
                <div className="extra">
                  <div className="role font-semibold mb-1">
                    {" "}
                    <h1 className="text-xs">UI/UX Designer</h1>
                  </div>
                  <div className="skills flex gap-2 text-xs">
                    <h1 className="text-slate-500">Google</h1>•{" "}
                    <h1 className="bg-orange-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-orange-500">
                      Figma
                    </h1>
                    <h1 className="bg-pink-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-pink-500">
                      Prototyping
                    </h1>
                    <h1 className="bg-blue-200 px-[6px] rounded-lg tracking-tighter py-[1px] text-blue-500">
                      User Interface
                    </h1>
                  </div>
                  <div className="information"></div>
                </div>
              </div>
            </div>
            <div className="extraDets mt-3 text-sm flex gap-2">
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500" >
                <IoBagCheckOutline className="text-gray-500 " />
                <span className="text-xs" >0-3 Years</span>
              </span>
              <span className="flex gap-1 items-center border-r-2 pr-1 border-zinc-500 " >
              <CiClock2 className="text-gray-5=600 " />
                <span className="text-xs" >Full Time</span>
              </span>
              <span className="flex gap-1 items-center " >
               <span className="text-xs text-gray-400" >Posted on:</span>
                <span className="text-xs" >02 April 2024</span>
              </span>
            </div>
            <div className="FullDets w-[100%] mt-3">
                <li className="text-xs w-full text-gray-500 tracking-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem, ipsum dolor. tempora ipsa.</li>
                <li className=" text-gray-500 tracking-tight  text-xs" >amet consectetur adipisicing elit. um dolor, sit amet consectetur adipisicing elit. Blanditiis,lorem ipsum eligendi!</li>
            </div>
          </div>
          <div className="right w-[30%] ">
            <div className="btns mt-2 flex gap-2 justify-center text-white">
                <button className="px-2  bg-orange-400 border-2 rounded-md text-sm" >Apply Now</button>
                <button className="flex gap-1 text-slate-500 px-3 py-2 border-2 rounded-md text-sm">
                    <img src="/frame.png" alt="" />
                    Save</button>
            </div>
            <div className="gauge flex justify-center items-center" >
                <img className="h-32" src="/gauge.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
