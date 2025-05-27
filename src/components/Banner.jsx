import { MdOutlinePlayCircleOutline } from "react-icons/md";
import React from 'react';
import logo from '../assets/logo.png';
import bubble from '../assets/bubble.png';
import gun from '../assets/gun.png';
import portal from '../assets/portal.png'
// import { WatchOutlined } from '@ant-design/icons';

// import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Banner = () => {
    return (
        <section>
            <nav className='md:w-1/2 mx-auto w-full h-20 flex items-center justify-center py-5 my-5'>
                <img className=' h-full' src={logo} alt="" />
            </nav>
            <header className='md:w-8/12 mx-auto w-full p-4 relative '>
                <div className="absolute bottom-0 right-0  flex items-baseline">
                    <img className="md:h-72 h-32 w-auto" src={gun} alt="gun" />
                </div>

                <div className='relative space-y-3 flex-1'>
                    <div className='relative'>
                        {/* <div className='absolute inset-0 md:-top-16 -top-5 md:-left-20 -left-10 '>
                                <img className='h-16 md:h-36 w-auto' src={bubble} alt="" />
                            </div>
                            <div className='absolute inset-0  right-0 top-0'>
                                <img className='h-16 md:h-36 w-auto' src={bubble} alt="" />
                            </div> */}
                        <div className="absolute inset-0  bg-gradient-to-r -z-10 from-[#9DFE00] via-[#14D9E6] to-[#ffff] blur-3xl md:opacity-30 opacity-60"></div>
                        <h3 className='flex items-center  gap-2 z-50 text-white md:text-9xl text-4xl font-bold uppercase '>
                            <span >The</span>
                            <img className='h-10 md:h-24 w-auto' src={portal} alt="portal" />
                            <span className=' bg-gradient-to-r from-[#9DFE00] to-[#14D9E6] bg-clip-text text-transparent'>Rick &</span>
                        </h3>
                    </div>

                    <p className='uppercase text-white md:text-9xl text-4xl font-bold'> <span className='text-left bg-gradient-to-r from-[#9DFE00] to-[#14D9E6] bg-clip-text text-transparent'>MORTY</span> WIKI</p>

                    <div className="flex md:w-10/12 mx-auto w-full justify-between items-center">

                        <button className="border rounded-full px-4 bg-gradient-to-l from-[#9DFE00] to-[#14D9E6]  cursor-pointer py-2 flex items-center justify-between gap-1 text-[#FBF8F3]"> <MdOutlinePlayCircleOutline className="text-[#FBF8F3]" />
                            Watch Now</button>

                        {/* <p>Brilliant but boozy scientist Rick hijacks his fretful
                                teenage grandson, Morty, for wild escapades
                                in other worlds and alternate dimensions.</p> */}
                    </div>

                </div>
            </header>


        </section>
    );
};

export default Banner;