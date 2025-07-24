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




function Sidebar({active}) {

    if(!active){
        return (
            <>
            <div className='shadow-3d w-[5%] pt-1 flex flex-col items-center h-full transition-all duration-500 ease-in-out overflow-hidden'>
            <div className='flex gap-8 justify-center items-center w-full transition-all duration-500 ease-in-out '>
                <IoGameControllerOutline className='text-[60px] inline text-white' />
            </div>
            <ul className=' mt-15 flex flex-col gap-7 transition-all duration-500 ease-in-out'>
                <li className='transition-all duration-500 ease-in-out rounded-[20px] px-2 py-3 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2),_0_8px_20px_rgba(0,0,0,0.3),_inset_0_-4px_8px_rgba(255,255,255,0.2),_inset_0_4px_6px_rgba(0,0,0,0.2)] '>
                    <a className='text-white flex justify-between  items-center text-xl w-full font-semibold transition-all duration-500 ease-in-out ' href="">
                        <div className='w-1/2 text-3xl text-left transition-all duration-500 ease-in-out'>
                        <IoHomeOutline/>
                        </div>
                        
                    </a>
                </li>
                <li className='rounded-[20px] transition-all duration-500 ease-in-out px-2 py-3 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2),_0_8px_20px_rgba(0,0,0,0.3),_inset_0_-4px_8px_rgba(255,255,255,0.2),_inset_0_4px_6px_rgba(0,0,0,0.2)]'>
                    <a className='text-white transition-all duration-500 ease-in-out flex justify-between w-full items-center text-xl font-semibold ' href="">
                        <div className='w-1/2 transition-all duration-500 ease-in-out text-3xl text-left'>
                       <VscFileSubmodule/>
                        </div>
                        
                        
                    </a>
                </li>
                <li className='rounded-[20px] transition-all duration-500 ease-in-out px-2 py-3 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2),_0_8px_20px_rgba(0,0,0,0.3),_inset_0_-4px_8px_rgba(255,255,255,0.2),_inset_0_4px_6px_rgba(0,0,0,0.2)]'>
                    <a className='text-white flex justify-between w-full items-center text-xl transition-all duration-500 ease-in-out font-semibold ' href="">
                        <div className='w-1/2 text-3xl text-left transition-all duration-500 ease-in-out'>
                        <FaRegHeart/>
                        </div>
                        
                       
                    </a>
                </li>
                <li className='transition-all duration-500 ease-in-out rounded-[20px] px-2 py-3 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2),_0_8px_20px_rgba(0,0,0,0.3),_inset_0_-4px_8px_rgba(255,255,255,0.2),_inset_0_4px_6px_rgba(0,0,0,0.2)]'> 
                    <a  className='text-white transition-all duration-500 ease-in-out flex justify-between w-full items-center text-xl font-semibold ' href="">
                        <div className='w-1/2 transition-all duration-500 ease-in-out text-3xl text-left'>
                       <IoBagCheckOutline/>
                        </div>
                        
                        
                    </a>
                </li>
            </ul>


            <div className='flex flex-col  text-white text-2xl transition-all duration-500 ease-in-out w-full justify-around items-center gap-3 mt-auto py-5  '>
                <a className='hover:bg-blue-500 transition-all  rounded-2xl hover:scale-120 ease-out duration-100' href="#">
                    <CiFacebook/>
                </a>
                <a className='hover:bg-red-500 transition-all   rounded-[10px] hover:scale-120 ease-out duration-100' href="#">
                    <FiYoutube/>
                </a><a className=' hover:bg-blue-400  rounded-2xl hover:scale-120 ease-out duration-100' href="#">
                    <CiTwitter/>
                </a><a className=' hover:bg-white  rounded-2xl hover:scale-120 ease-out duration-100' href="#">
                    <FcShare/>
                </a>
                
            </div>
            </div>
            </>
        )
    }


    return ( 

        <div className='overflow-hidden shadow-3d w-[20%] flex flex-col  px-10 py-7 h-full transition-all duration-500 ease-in-out'>
            <div className='flex gap-8 items-center w-full transition-all duration-500 ease-in-out'>
                <IoGameControllerOutline className='text-[60px] inline text-white transition-all duration-500 ease-in-out' />
                <span className='text-[60px] font-arcade tracking-wider text-white transition-all duration-500 ease-in-out'>Play</span>
            </div>
            <ul className=' mt-15 flex flex-col gap-10 transition-all duration-500 ease-in-out'>
                <li className='rounded-[20px] px-2 py-3 transition-all duration-500 ease-in-out hover:shadow-[0_4px_8px_rgba(0,0,0,0.2),_0_8px_20px_rgba(0,0,0,0.3),_inset_0_-4px_8px_rgba(255,255,255,0.2),_inset_0_4px_6px_rgba(0,0,0,0.2)] '>
                    <a className='text-white flex justify-between transition-all duration-500 ease-in-out items-center text-xl w-full font-semibold ' href="">
                        <div className='w-1/2 text-2xl text-left transition-all duration-500 ease-in-out'>
                        <IoHomeOutline/>
                        </div>
                        <div className='text-left  text-base   hover:font-bold w-1/2 transition-all duration-500 ease-in-out'>
                            Home
                        </div>
                    </a>
                </li>
                <li className='rounded-[20px] px-2 transition-all duration-500 ease-in-out py-3 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2),_0_8px_20px_rgba(0,0,0,0.3),_inset_0_-4px_8px_rgba(255,255,255,0.2),_inset_0_4px_6px_rgba(0,0,0,0.2)]'>
                    <a className='text-white transition-all duration-500 ease-in-out flex justify-between w-full items-center text-xl font-semibold ' href="">
                        <div className='w-1/2 transition-all duration-500 ease-in-out text-2xl text-left'>
                       <VscFileSubmodule/>
                        </div>
                        <div className='text-left  text-base transition-all duration-500 ease-in-out hover:font-bold w-1/2'>
                            Categories
                        </div>
                        
                    </a>
                </li>
                <li className='rounded-[20px] px-2 transition-all duration-500 ease-in-out py-3 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2),_0_8px_20px_rgba(0,0,0,0.3),_inset_0_-4px_8px_rgba(255,255,255,0.2),_inset_0_4px_6px_rgba(0,0,0,0.2)]'>
                    <a className='text-white transition-all duration-500 ease-in-out flex justify-between w-full items-center text-xl font-semibold ' href="">
                        <div className='w-1/2 transition-all duration-500 ease-in-out text-2xl text-left'>
                        <FaRegHeart/>
                        </div>
                        <div className='text-left  text-base transition-all duration-500 ease-in-out hover:font-bold w-1/2'>
                            Library
                        </div>
                       
                    </a>
                </li>
                <li className='rounded-[20px] transition-all duration-500 ease-in-out px-2 py-3 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2),_0_8px_20px_rgba(0,0,0,0.3),_inset_0_-4px_8px_rgba(255,255,255,0.2),_inset_0_4px_6px_rgba(0,0,0,0.2)]'> 
                    <a  className='text-white transition-all duration-500 ease-in-out flex justify-between w-full items-center text-xl font-semibold ' href="">
                        <div className='w-1/2 transition-all duration-500 ease-in-out text-2xl text-left'>
                       <IoBagCheckOutline/>
                        </div>
                        <div className='text-left  text-base transition-all duration-500 ease-in-out  hover:font-bold w-1/2'>
                           Bag
                        </div>
                        
                    </a>
                </li>
            </ul>


            <div className='flex text-white  text-3xl  w-full justify-around mt-auto py-5 transition-all duration-500 ease-in-out '>
                <a className='hover:bg-blue-500  rounded-2xl hover:scale-120 ease-out duration-100' href="#">
                    <CiFacebook/>
                </a>
                <a className='hover:bg-red-500   rounded-[10px] hover:scale-120 ease-out duration-100' href="#">
                    <FiYoutube/>
                </a><a className=' hover:bg-blue-400 rounded-2xl hover:scale-120 ease-out duration-100' href="#">
                    <CiTwitter/>
                </a><a className=' hover:bg-white rounded-2xl hover:scale-120 ease-out duration-100' href="#">
                    <FcShare/>
                </a>
                
            </div>

        </div>
    )
}

export default Sidebar;