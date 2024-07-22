import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            console.log('Window scrollY:', window.scrollY);
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white text-vert shadow-md' : 'bg-dark-purple text-white'}`}>
            <div className="flex justify-between items-center p-4 md:p-6">
                <h1 className={`text-2xl font-bold font-custom cursor-pointer transition-colors duration-300 ${scrolled ? 'text-vert' : 'text-white'}`}>
                    Bekono Sophie
                </h1>
                
                <nav className='hidden md:flex font-custom'>
                    <ul className='flex gap-8'>
                        <li className={`p-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 ${scrolled ? 'text-vert' : 'text-white'}`}>
                            <Link to="/" onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li className={`p-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 ${scrolled ? 'text-vert' : 'text-white'}`}>
                            <Link to="/about" onClick={handleLinkClick}>About me</Link>
                        </li>
                    </ul>
                </nav>

                <button
                    className={`text-2xl md:hidden ${scrolled ? 'text-vert' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <div
                className={`absolute inset-0 bg-dark-purple z-40 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
                style={{ width: "80%", backgroundColor: "rgba(45, 45, 45, 0.9)" }}
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
