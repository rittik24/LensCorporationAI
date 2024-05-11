import React from 'react';
import { logo } from "../../Assets/index";
import { MdDarkMode } from "react-icons/md";

const Navbar = ({ toggleDarkMode }) => {
    return (
        <nav className="relative flex items-center justify-between bg-white py-2 px-20 w-full ">
            <div className="flex items-center ml-10">
                <img src={logo} alt="Logo" className="h-16 w-20" />
            </div>
            <ul className="flex items-center space-x-8 px-8 absolute top-1/2 transform -translate-y-1/2 right-8">
                <li><a href="#" className="text-black text-lg font-normal font-sans">MakeMyWeb</a></li>
                <li><a href="#" className="text-black text-lg font-serif">Home</a></li>
                <li><a href="#" className="text-black text-lg font-serif">Company</a></li>
                <li><a href="#" className="text-black text-lg font-serif">Blogs</a></li>
                <li><button onClick={toggleDarkMode} className="text-black text-lg font-serif"><MdDarkMode /></button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
