import React from 'react';
import backgrounImage from '../assets/Imageoverlay.jpeg';
import logo from '../assets/logo.png';
import Navbar from '../shared/Navbar';
import CastData from '../shared/CastData';

const AllCast = () => {

    const characters = CastData()
    console.log(characters)
    return (
        <section
            style={{
                backgroundImage: `linear-gradient(rgba(25, 29, 41, 0.9), rgba(25, 29, 41, 0.9)), url(${backgrounImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} className='w-full relative overflow-hidden ' >


            <div className='w-[356px] h-[356px]  -ml-1/2  absolute bg-[#2A3E84]  -left-[80px] -bottom-[80px] blur-[150px]'>

            </div>
            <div className='w-[356px] h-[356px]  absolute bg-[#2A3E84] -right-[80px] blur-[150px] top-[30%]'>

            </div>

            <Navbar></Navbar>
            <div className='container w-full mx-auto p-2'>
                <h3 className='md:text-5xl text-2xl font-bold text-[#14D9E6]'>All Cast</h3>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 space-y-2 my-5 py-5'>
                    {characters.map(character => <div className="relative md:w-56">
                        {/* Clipped Card Container */}
                        <div className="p-[1px] rounded-xl bg-gradient-to-l from-[rgba(132,247,41,0.7)] to-[rgba(21,191,253,0.7)] clip-card">
                            <div className="bg-[#2d2c35]  rounded-[10px] clip-card p-4 text-white">
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    className="w-full h-40 object-cover rounded-md hover:scale-105"
                                />
                                <p className="mt-2 font-semibold text-sm">Rick Sanchez</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
};

export default AllCast;