import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";

function App (){

  const [active , setActive] = useState(true) ;

  function sidebarActiveHandler(){
    if(active) {
      setActive(false) ;
    }
    else {
      setActive(true) ;
    }
    // setActive(!active)
  }

  return (
    <main className="absolute py-5 px-5 w-full h-full flex ">
       <Sidebar active={active}/>
    <div className="banner  ml-5 rounded-2xl shadow-3d w-[96%] h-full ">
      <Header hamburgerHandler={sidebarActiveHandler}/>
      </div>   
    </main>
  )
}

export default App ;