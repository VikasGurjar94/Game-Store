import React from 'react'
import Navbar from './Navbar';
const MainSide = ({activeToggleHandler,active}) => {
    return (
        <>
            <div className={` h-[100%] shadowOp rounded-[30px] p-[30px] transition-all duration-1000 relative ${active ? 'w-[80%]' :'w-[93%]' }`}>
                <Navbar activeToggleHandler={activeToggleHandler}></Navbar>
            </div>
        </>
    )
}

export default MainSide