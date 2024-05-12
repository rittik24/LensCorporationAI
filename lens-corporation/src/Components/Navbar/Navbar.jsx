import React, { useState } from 'react';
import { logo } from "../../Assets/index";
import { MdDarkMode, MdMenu, MdClose, MdWbSunny } from "react-icons/md";

const MobileMenu = ({ isOpen, onClose, toggleDarkMode, darkMode }) => {
    const handleClick = () => {
        onClose();
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-4 rounded-lg w-full h-full">
                <button onClick={onClose} className="absolute top-4 right-2 bg-white text-black border-2 border-black">
                    <MdClose size={35} />
                </button>
                <div className="flex flex-col justify-center items-center mt-20 gap-8">
                    <a href="#" className='text-black text-2xl hover:text-blue-700' onClick={handleClick}>Home</a>
                    <a href="#" className='text-black text-2xl hover:text-blue-700' onClick={handleClick}>Company</a>
                    <a href="#" className='text-black text-2xl hover:text-blue-700' onClick={handleClick}>Blogs</a>
                    <button onClick={toggleDarkMode} className="text-black text-2xl hover:text-blue-700">
                        {darkMode ? <MdWbSunny /> : <MdDarkMode />}
                    </button>
                </div>
            </div>
        </div>
    );
};

const Navbar = ({ toggleDarkMode }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleDarkModeToggle = () => {
        toggleDarkMode();
        setDarkMode(!darkMode);
    };

    return (
        <nav className={`relative flex items-center justify-between ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} py-2 px-6 md:px-20 w-full`}>
            <div className="flex items-center ml-10">
                <img src={logo} alt="Logo" className="h-16 w-20" />
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className={`text-${darkMode ? 'white' : 'black'} text-lg font-serif focus:outline-none`}>
                    {showMenu ? <MdClose size={35} /> : <MdMenu size={35} />}
                </button>
            </div>
            <ul className={`hidden md:flex items-center space-x-8 px-8 absolute top-1/2 transform -translate-y-1/2 right-8 ${darkMode ? 'text-white' : 'text-black'}`}>
                <li><a href="#" className="font-normal font-sans">MakeMyWeb</a></li>
                <li><a href="#" className="font-serif">Home</a></li>
                <li><a href="#" className="font-serif">Company</a></li>
                <li><a href="#" className="font-serif">Blogs</a></li>
                 <li><button onClick={handleDarkModeToggle} className="font-serif">{darkMode ? <MdWbSunny /> : <MdDarkMode />}</button></li>
            </ul>
            <MobileMenu isOpen={showMenu} onClose={toggleMenu} toggleDarkMode={handleDarkModeToggle} darkMode={darkMode} />
        </nav>
    );
};

export default Navbar;
