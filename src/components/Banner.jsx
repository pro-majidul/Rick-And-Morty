import { MdOutlinePlayCircleOutline } from "react-icons/md";
import bubble from '../assets/bubble.png';
import gun from '../assets/gun.png';
import portal from '../assets/portal.png';
import ractangle from '../assets/Rectangle.png';
import Navbar from "../shared/Navbar";
const Banner = () => {
    return (
        <section>   
                <Navbar></Navbar>
            <header className='lg:w-8/12 mx-auto w-full p-4 relative '>
                <div className="absolute bottom-0 right-0  flex items-baseline">
                    <img className="lg:h-72 h-32 w-auto" src={gun} alt="gun" />
                </div>
                <div className='text-center space-y-3'>
                    <div className='relative w-fit mx-auto'>
                        {/* Left Bubble */}
                        <img
                            src={bubble}
                            alt="bubble"
                            className='absolute lg:-top-28 lg:-left-44 h-auto w-28 -top-12 -left-16  lg:w-auto z-10'
                        />
                        {/* Right Bubble */}
                        <img
                            src={ractangle}
                            alt="ractangle"
                            className='absolute top-0 -right-10 lg:right-8 h-auto w-10 z-10'
                        />
                        {/* Background Gradient Blur */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9DFE00] via-[#14D9E6] to-[#ffff] blur-3xl lg:opacity-60 opacity-100 z-0"></div>
                        {/* Text with Portal Image */}
                        <h3 className='relative z-20 flex items-center justify-center gap-2 text-white lg:text-8xl text-4xl font-bold uppercase'>
                            <span>The</span>
                            <img className='h-10 lg:h-24 w-auto' src={portal} alt="portal" />
                            <span className='bg-gradient-to-r from-[#9DFE00] to-[#14D9E6] bg-clip-text text-transparent'>Rick &</span>
                        </h3>
                    </div>
                    {/* Subtitle */}
                    <p className='uppercase text-white lg:text-8xl text-4xl font-bold z-20'>
                        <span className='bg-gradient-to-r from-[#9DFE00] to-[#14D9E6] bg-clip-text text-transparent'>MORTY</span> WIKI
                    </p>
                </div>
                <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:w-6/12 w-full mx-auto mt-6 space-y-6 lg:space-y-0">
                    {/* Description */}
                    <p className="lg:w-8/12 w-full text-[#14D9E6] font-semibold lg:text-left">
                        Brilliant but boozy scientist Rick hijacks his fretful <br />
                        teenage grandson, Morty, for wild escapades <br />
                        in other worlds and alternate dimensions.
                    </p>
                    {/* Button */}
                    <button className="border rounded-full px-6 py-3 bg-gradient-to-r from-[#9DFE00] to-[#14D9E6] cursor-pointer flex items-center justify-center gap-2 text-[#FBF8F3] hover:from-[#9dfe00ce] hover:to-[#14d8e6bd]">
                        <MdOutlinePlayCircleOutline className="text-xl" />
                        Watch Now
                    </button>
                </div>
            </header>
        </section>
    );
};

export default Banner;