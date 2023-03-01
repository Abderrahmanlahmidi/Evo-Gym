import Logo from "@/assets/Logo.png";
import Link from './Link';
import { selectedPage } from '../shared/types';
import useMediaQuery from "../hooks/media";
import { useState } from "react";
import ActionButton from "../shared/ActionButton";


type Props = {
     setSelectedPage:(value: selectedPage) => void;
     SelectedPage:selectedPage;
}

const Navbar = ({setSelectedPage, SelectedPage}: Props) => {
    const flexBetwen = 'flex items-center justify-between'
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const [isMenuToggled, setisMenuToggled] = useState<boolean>(false);
  return (
    <nav>
        <div className={`${flexBetwen} py-6 w-full z-30 fixed top-0`}>
           <div className={`${flexBetwen} mx-auto w-5/6`} >
             <div className={`${flexBetwen} w-full gap-16`}>
              {/* LEFT SIDE */}
              <img alt="logo" src={Logo} />
            
               {/* RIGHT SIDE */}
                {isAboveMediumScreens ? (
               <div className={`${flexBetwen} w-full`} >
                 <div className={`${flexBetwen} gap-8 text-sm`}>
                    <Link 
                    setSelectedPage={setSelectedPage}
                    SelectedPage={SelectedPage}
                    page="home" />
                    <Link 
                    setSelectedPage={setSelectedPage}
                    SelectedPage={SelectedPage}
                    page="Benefites" />
                    <Link 
                    setSelectedPage={setSelectedPage}
                    SelectedPage={SelectedPage}
                    page="Our Classes" />
                    <Link 
                    setSelectedPage={setSelectedPage}
                    SelectedPage={SelectedPage}
                    page="Contacts Us" />
                 </div>
                 <div className={`${flexBetwen} gap-8`}>
                     <p>Sign In</p>
                     <ActionButton 
                    setSelectedPage={setSelectedPage}
                     >Become a Member</ActionButton>
                 </div>
              </div>
             ):(
            <button className="rounded-full bg-secondary-500 p-2"
            onClick={() => setisMenuToggled(!isMenuToggled)}
            >
             <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>
            </button>
            )}            
            </div>
          </div>
       </div>
       {!isAboveMediumScreens && isMenuToggled && (
         <div className="fixed bg-primary-100 right-0 bottom-0 z-40 h-full w-[300px] drop-xl">
            <div className="flex justify-end p-12">
                <button onClick={() => setisMenuToggled(!isMenuToggled)}>
                  <svg className="h-6 w-6 text-gray-400"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button> 
            </div>
            <div className="ml-[33%] flex flex-col gap-10 text-xl">
                    <Link 
                    setSelectedPage={setSelectedPage}
                    SelectedPage={SelectedPage}
                    page="home" />
                    <Link 
                    setSelectedPage={setSelectedPage}
                    SelectedPage={SelectedPage}
                    page="Benefites" />
                    <Link 
                    setSelectedPage={setSelectedPage}
                    SelectedPage={SelectedPage}
                    page="Our Classes" />
                    <Link 
                    setSelectedPage={setSelectedPage}
                    SelectedPage={SelectedPage}
                    page="Contacts Us" />
                 </div>
         </div>
       )}
    </nav>
  )
}

export default Navbar