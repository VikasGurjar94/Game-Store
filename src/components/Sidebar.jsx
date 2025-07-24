import React from 'react'
import { IoGameControllerOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";

import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FcShare } from "react-icons/fc";




function Sidebar() {

    


    return (
        <div className='shadow-3d w-[20%] flex flex-col  px-10 py-7 h-full'>
            <div className='flex gap-8 items-center w-full'>
                <IoGameControllerOutline className='text-[60px] inline text-white' />
                <span className='text-[60px] font-arcade tracking-wider text-white'>Play</span>
            </div>
            <ul className=' mt-15 flex flex-col gap-10 '>
                <li>
                    <a className='text-white flex justify-between  items-center text-xl w-full font-semibold ' href="">
                        <div active={true} className='w-1/2 text-3xl text-left'>
                        <IoHomeOutline/>
                        </div>
                        <div className='text-left  w-1/2'>
                            Home
                        </div>
                    </a>
                </li>
                <li>
                    <a className='text-white flex justify-between w-full items-center text-xl font-semibold ' href="">
                        <div active={false} className='w-1/2 text-3xl text-left'>
                       <VscFileSubmodule/>
                        </div>
                        <div className='text-left  w-1/2'>
                            Categories
                        </div>
                        
                    </a>
                </li>
                <li>
                    <a active={false} className='text-white flex justify-between w-full items-center text-xl font-semibold ' href="">
                        <div className='w-1/2 text-3xl text-left'>
                        <FaRegHeart/>
                        </div>
                        <div className='text-left  w-1/2'>
                            My Library
                        </div>
                       
                    </a>
                </li>
                <li>
                    <a active={false} className='text-white flex justify-between w-full items-center text-xl font-semibold ' href="">
                        <div className='w-1/2 text-3xl text-left'>
                       <IoBagCheckOutline/>
                        </div>
                        <div className='text-left  w-1/2'>
                           My Bag
                        </div>
                        
                    </a>
                </li>
            </ul>


            <div className='flex text-white text-3xl  w-full justify-around mt-auto py-5  '>
                <a href="#">
                    <CiFacebook/>
                </a>
                <a href="#">
                    <FiYoutube/>
                </a><a href="#">
                    <CiTwitter/>
                </a><a href="#">
                    <FcShare/>
                </a>
                
            </div>

        </div>
    )
}

export default Sidebar;