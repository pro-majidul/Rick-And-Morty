// import React from 'react';
// import logoImage from '../assets/logoImage.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <Link to='/'>
                <nav className='lg:w-1/2 mx-auto w-full z-50 h-20 flex items-center justify-center py-5 my-5'>
                    <img className=' h-full opacity-100' src='./logo.png' alt="" />
                </nav>
            </Link>
        </>
    );
};

export default Navbar;