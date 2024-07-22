import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className='flex justify-between items-center p-4 md:p-6 bg-dark-purple text-white w-full z-50 mb-4'>
            <h1 className="text-2xl font-bold text-white font-custom cursor-pointer">
                Bekono Sophie
            </h1>
            
            <nav className='hidden md:flex font-custom'>
                <ul className='flex gap-8'>
                    <li className='p-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300'>
                        <Link to="/" onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li className='p-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300'>
                        <Link to="/about" onClick={handleLinkClick}>About me</Link>
                    </li>
                </ul>
            </nav>

            <button
                className='text-2xl md:hidden'
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            <div
                className={`absolute inset-0 bg-dark-purple z-40 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
                style={{ width: "80%" }}
            >
                <div className="flex flex-col items-start p-4 space-y-4 text-white font-custom">
                    <h1 className="text-2xl font-bold text-white mb-6 cursor-pointer">
                        Bekono Sophie
                    </h1>
                    <Link to="/" className='w-full py-2 hover:bg-gray-800' onClick={handleLinkClick}>Home</Link>
                    <Link to="/about" className='w-full py-2 hover:bg-gray-800' onClick={handleLinkClick}>About me</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
