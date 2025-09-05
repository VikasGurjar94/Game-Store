import React, { use, useState } from 'react'
import Sidebar from './components/Sidebar';  
import MainSide from './components/MainSide';

const App = () => {
  let [active,setActive] = useState(false) ;
  let activeToggleHandler = ()=>{
    setActive(!active) ;
  }
  return (
    <div className='absolute inset-0
  p-[30px]
  border-[8px] border-[var(--bgColor)]
  flex justify-between items-center
  gap-[30px]
  h-full w-full
  shadowOp
  transition-all duration-500  text-white  '>
    <Sidebar active={active} ></Sidebar>
    <MainSide activeToggleHandler={activeToggleHandler} active={active} ></MainSide>
  </div>
  )
}

export default App