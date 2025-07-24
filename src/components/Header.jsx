import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


function Header({hamburgerHandler}) {
  return (
        <header className='w-full shadow-3d h-[50px] px-5 py-2 flex items-center '>
            <div onClick={hamburgerHandler} className='h-fit w-fit p-2 text-white text-3xl cursor-pointer '>
                <GiHamburgerMenu />
            </div>
            
        </header>

  )
}

export default Header;