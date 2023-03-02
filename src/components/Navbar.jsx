import React,{useState,useRef} from "react";
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom";
import Navlogo from "../assets/festx.png"

const Navbar = () => {
    const navRef = useRef()
    const [navs,setNav] = useState(false)
    const handleNav = () => {setNav(!navs)}
    return(
        <div className="flex fixed w-[100%] top-0 justify-between items-center h-20 mx-auto px-4 text-white bg-slate-900 bg-cover">
            <Link to="/" className="w-full text-xl font-cinzel font-bold text-white" onClick={()=>{window.scrollTo(0, 0)}}>
            <img src={Navlogo} alt="festx" className=' w-[100px] h-[30px]'/>
            </Link>
            <nav className="lg:flex hidden space-x-5" ref={navRef}>
                <Link to="/" className="p-4 text-xl hover:bg-gradient-to-br from-[#37D5D6] to-[#36096D] rounded-lg" onClick={()=>{window.scrollTo(0, 0)}}>Home</Link>
                <Link to="/events" className="p-4 text-xl hover:bg-gradient-to-br from-[#37D5D6] to-[#36096D] rounded-lg" onClick={()=>{window.scrollTo(0, 0)}}>Events</Link>
                {/* <Link to="/speakers" className="p-4 text-2xl hover:bg-gradient-to-br from-[#37D5D6] to-[#36096D] rounded-lg">Speakers</Link> */}
                {/* <Link to="/sponsors" className="p-4 text-2xl hover:bg-gradient-to-br from-[#37D5D6] to-[#36096D] rounded-lg">Sponsors</Link> */}
                <Link to="/contact" className="p-4 text-xl hover:bg-gradient-to-br from-[#37D5D6] to-[#36096D] rounded-lg" onClick={()=>{window.scrollTo(0, 0)}}>Contact</Link>
            </nav>
            <div onClick={handleNav} className="block lg:hidden">
                {navs ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={navs ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-slate-900 ease-in-out duration-700 lg:hidden" : "fixed left-[-100%]"}>
            <h1 className="w-full text-3xl font-cinzel font-bold text-white m-4">FESTX</h1>
                <nav className="uppercase text-xl p-5 flex flex-col" ref={navRef}>
                    <Link to="/" className=" p-4 border-b border-b-gray-300">Home</Link>
                    <Link to="/events" className=" p-4 border-b border-b-gray-300">Events</Link>
                    {/* <Link to="/speakers" className="p-4 border-b border-b-gray-300">Speakers</Link> */}
                    {/* <Link to="/sponsors" className="p-4 border-b border-b-gray-300">Sponsors</Link> */}
                    <Link to="/contact" className=" p-4">Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar