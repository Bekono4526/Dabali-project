import React from 'react';
import { Link } from 'react-router-dom';

function FooterMenu() {
    return (
        <footer className='footer-menu-container fixed bottom-0 left-0 right-0 bg-dark-purple text-white p-4 z-50 flex justify-between items-center'>
            <div className="flex items-center gap-4">
                <Link to="/" className='hover:text-gray-300 transition-colors duration-300'>Home</Link>
                <Link to="/about" className='hover:text-gray-300 transition-colors duration-300'>About me</Link>
                <Link to="/services" className='hover:text-gray-300 transition-colors duration-300'>Services</Link>
                <Link to="/contact" className='hover:text-gray-300 transition-colors duration-300'>Contact</Link>
            </div>
            <div className="flex items-center gap-4">
                <p>Le Meurice, 228 rue de Rivoli, 75001 Paris</p>
                <p>+33 (0)1 44 58 10 10</p>
                <p>info.LMP@dorchestercollection.com</p>
            </div>
        </footer>
    );
}

export default FooterMenu;
