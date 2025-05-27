import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <Link to='/'>
                <nav className='md:w-1/2 mx-auto w-full z-50 h-20 flex items-center justify-center py-5 my-5'>
                    <img className=' h-full opacity-100' src={logo} alt="" />
                </nav>
            </Link>
        </>
    );
};

export default Navbar;