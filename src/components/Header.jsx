import React, { useEffect, useState } from "react";
import { ShoppingBag, Search, User, Menu ,X,Instagram} from "lucide-react";

import logo from "../assets/logo.svg"
import { nanoid } from "nanoid";



const styles ={
    navigation:"hover:underline hover:text-black  cursor-pointer",
      navigationMobile:"hover:underline hover:text-black  cursor-pointer  w-full pl-10 pb-5",
    icon:"text-gray-700    hover:text-black hover:scale-105 cursor-pointer transition-all duration-100  ease-in "
}
const pages = [
    {id:nanoid(), name:"Home"},
    {id:nanoid(), name:"Laliga"},
    {id:nanoid(), name:"Premier League"},
    {id:nanoid(), name:"Seria A"},
    {id:nanoid(), name:"Bundesliga"},
     {id:nanoid(), name:"Ligue 1"},
    {id:nanoid(), name:"International"}
]

const helpPages = [
    {name:"Return and Exchange Policy"},
    {name:"Washing Guidelines"}

]




function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled ,setIsScrolled] = useState(false);


    function toggleNavbar(){
      console.log("clicked")
      setIsOpen(!isOpen);
    }

    
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  // Cleanup just in case
  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);


  return (
    <header className="w-full font-Dm-Sans text-sm text-gray-700 overflow-hidden">

      <div className="border-b border-b-zinc-200 lg:flex lg:items-center lg:justify-center">

    
      <div className=" flex-row flex items-center justify-around lg:justify-around min-h-20  lg:w-[80%]  relative">

         {/*-----------Menu for Mobile----------- */}
        <div className="block lg:hidden">
          <button onClick={toggleNavbar}>
            {isOpen === false?( <Menu strokeWidth={1.5} size={20} absoluteStrokeWidth={true}/>)
            :( <X  strokeWidth={1.5} size={20} absoluteStrokeWidth={true}/>)}
          </button>

        </div>
           
      
       

         {/*-----------Logo Div----------- */}
        <div className="w-20 h-20 lg:w-30 lg:h-30"><img src={logo} ></img></div>

         {/*-----------Navigation Div----------- */}
        <div className="hidden lg:block">
             <ul className="flex space-x-5 p-2 flex-wrap ">
             {pages.map((page)=>(
                 <li key={page.id} className={styles.navigation}>
                <a className="">{page.name}</a>
                </li>
             ))}
             </ul>

             <ul className="flex space-x-5 p-2 flex-wrap">
            {helpPages.map((page)=>(
                    <li key={page.index} className={styles.navigation}><a>{page.name}</a></li>
            ))}
            </ul>
        </div>
       

         {/*-----------Icons Div----------- */}
        <div className="">
          <ul className="flex flex-row space-x-5">
            <li className={styles.icon}><Search  strokeWidth={1.5} size={20} absoluteStrokeWidth={true}/> </li>
            <li className={styles.icon}><ShoppingBag strokeWidth={1.5} size={20} absoluteStrokeWidth={true}/></li>
            <li className={`hidden lg:block ${styles.icon}`}><User strokeWidth={1.5} size={20} absoluteStrokeWidth={true}/></li>
          </ul>
        </div>
      </div>
     </div>

       {
          isOpen &&( 
          <div 
             className={`
        fixed inset-0 z-[999] bg-white text-xl font-Poppins lg:hidden w-full pt-5 
        transition-all duration-200 ease-in-out
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}
              >    
               <X className="absolute right-5" onClick={toggleNavbar}  strokeWidth={1.5} size={25} absoluteStrokeWidth={true}/>  
               <div className="w-full h-8"></div>
             <ul className="flex flex-col space-x-5  flex-wrap ">
             {pages.map((page)=>(
                 <li key={page.index} className={styles.navigationMobile}>
                <a className="">{page.name}</a>
                </li>
             ))}
             </ul>
            
             <div>
               <ul className="flex  space-x-5  flex-wrap">
            {helpPages.map((page)=>(
                    <li key={page.index} className={styles.navigationMobile}><a>{page.name}</a></li>
            ))}
            </ul>
              <ul className="flex flex-row space-x-5 pl-10 pt-20">
              <li className={styles.icon}><User strokeWidth={1.5} size={20} absoluteStrokeWidth={true}/></li>
              
               <li className={styles.icon}><Instagram  strokeWidth={1.5} size={20} absoluteStrokeWidth={true}/></li>
             </ul>
              <h3 className=" w-full text-sm absolute bottom-5  text-center">©All rights Reserved!</h3>
             </div>
        </div>)
        }
    </header>
  );
}

export default Header;
