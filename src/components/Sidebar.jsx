import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { SiFacebook } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";



const Sidebar = ({ active }) => {
  return (
    <div
      className={` relative h-[100%] rounded-[30px] bg-[var(--bgcolor)] p-[30px]
               border border-white/10
              shadowOp
              flex flex-col
               transition-all duration-1000 overflow-hidden ${active ? "w-[20%]" : "w-[7%]"} `}
    >
      <a href="#Home" className='flex gap-5  justify-baseline items-center uppercase ' >
        <IoGameControllerOutline size={60} />
        {active && (<span className='fontmy  text-[50px]'>Play</span>) }
        </a>
      <ul className='mt-[30px] flex flex-col h-[10%] gap-[20px] transition-all duration-500 '>
        <li className='rounded-2xl active:shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35),inset_-5px_-5px_15px_rgba(255,255,255,0.1),inset_5px_5px_15px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-500 shadowOp-hover p-1 ' >
          <a href="#" className='flex gap-5  justify-baseline items-center  '>
            <IoHomeOutline size={25} />  {active && (<span className='font-arcade text-[1.2em] '>Home</span>) }
          </a>
        </li>
        <li className='rounded-2xl active:shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35),inset_-5px_-5px_15px_rgba(255,255,255,0.1),inset_5px_5px_15px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-500 shadowOp-hover p-1 ' >
          <a href="#" className='flex gap-5  justify-baseline items-center  '>
            <BiCategoryAlt size={25} /> {active && (<span className='font-arcade text-[1.2em] '>Categories</span>) } 
          </a>
        </li> <li className='rounded-2xl active:shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35),inset_-5px_-5px_15px_rgba(255,255,255,0.1),inset_5px_5px_15px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-500 shadowOp-hover p-1 ' >
          <a href="#" className='flex gap-5  justify-baseline items-center  '>
            <IoMdHeartEmpty size={25} /> {active && (<span className='font-arcade text-[1.2em] '>My Library</span>) } 
          </a>
        </li> <li className='rounded-2xl active:shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35),inset_-5px_-5px_15px_rgba(255,255,255,0.1),inset_5px_5px_15px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-500 shadowOp-hover p-1 ' >
          <a href="#" className='flex gap-5 justify-baseline items-center  '>
            <IoBagHandleOutline size={25} /> {active && (<span className='font-arcade text-[1.2em] '>My Bag</span>) }  
          </a>
        </li>
      </ul>

      <ul className={`absolute  mb-[30px] gap-5 transition-all duration-1000 flex justify-around items-center bottom-0 ${!active && "flex-col"} `}>
        <li>
          <a href="#">
            <IoLogoYoutube size={30} className='hover:text-[var(--second)]  hover:scale-125 duration-100 ' />
          </a>
        </li>
        <li>
          <a href="#">
            <FaXTwitter size={30} className='hover:text-[var(--second)] hover:scale-125 duration-100' />
          </a>
        </li>
        <li>
          <a href="#">
            <SiFacebook size={30} className='hover:text-[var(--second)] hover:scale-125 duration-100' />
          </a>
        </li>
        <li>
          <a href="#">
            <FaShareAlt size={30} className='hover:text-[var(--second)] hover:scale-125 duration-100 ' />
          </a>
        </li>
      </ul>

    </div>
  )
}

export default Sidebar;