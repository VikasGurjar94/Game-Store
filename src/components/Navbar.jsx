import React from 'react'
import { FaSliders } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

const Navbar = ({activeToggleHandler}) => {
    return (
        <>
            <div className='absolute pt-1 z-1000 flex justify-between px-[30px] left-0 top-0 w-[100%]   '>
                <button onClick={activeToggleHandler} className=' rounded-xl transition-all duration-800 px-4 border-0 cursor-pointer  shadowOp-hover'>
                <FaSliders size={25} ></FaSliders>
            </button>
            <div className='flex relative justify-between gap-5 p-2'>
                <div className='flex shadowOp cursor-pointer rounded-2xl  p-2  relative'>
                 <FaHeart size={25}></FaHeart>
                 <div className='absolute -right-1 top-4 z-20 w-5 flex justify-center items-center bg-[var(--second)] h-5 rounded-[50%] '>
                    <span className=' text-[15px] '>0</span>
                 </div>
                </div>
                <div className='flex cursor-pointer shadowOp rounded-2xl p-2  relative'>
                 <IoBag size={25}></IoBag>
                 <div className='absolute -right-1 top-4  z-20 w-5 flex justify-center items-center bg-[var(--second)] h-5 rounded-[50%] '>
                    <span className=' text-[15px] '>0</span>
                 </div>
                </div>

            </div>
            </div>
        </>
    )
}

export default Navbar