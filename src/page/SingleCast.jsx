import { useLoaderData } from 'react-router-dom';
import overlayImage from '../assets/Imageoverlay2.png'
import status from '../assets/Status.svg'
import species from '../assets/Species.svg'
import gender from '../assets/Gender.svg'
import origin from '../assets/origin.svg'
import location from '../assets/location.svg'
import redirect from '../assets/Redirect.svg'
import Navbar from '../shared/Navbar';
import { HiMiniBarsArrowUp } from "react-icons/hi2";

const SingleCast = () => {

    const CastData = useLoaderData();
    // console.log(CastData)
    return (
        <section
            style={{
                backgroundImage: `linear-gradient(rgba(25, 29, 41, 0.3), rgba(25, 29, 41, 0.3)), url(${overlayImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            className='w-full relative overflow-hidden lg:py-32'
        >
            {/* Background Blur Elements */}
            <div className='w-[356px] h-[356px] absolute bg-[#2A3E84] -left-[80px] -bottom-[80px] blur-[150px]' />
            <div className='w-[356px] h-[356px] absolute bg-[#2A3E84] -right-[80px] blur-[150px] top-[30%] ' />

            <Navbar />

            <div className='lg:flex items-center space-y-5 justify-center gap-20 container mx-auto w-full px-2'>
                <div className='space-y-5'>
                    <p className='text-[#14D9E6] lg:text-3xl text-xl font-medium text-center'>{CastData.name}</p>
                    <div className='p-[2px] rounded-sm bg-gradient-to-l from-[rgba(132,247,41,0.7)] to-[rgba(21,191,253,0.7)] z-50'>

                        <div className=' rounded-sm p-6 bg-[#2d2c35]'>
                            <img className='rounded-sm' src={CastData.image} alt="" />
                        </div>
                    </div>
                </div>
                <div className='border-r w-auto h-full border-green-300 hidden lg:block'>

                </div>
                <div className='space-y-5'>
                    <div className='flex items-center justify-center lg:gap-10 gap-2 z-50 relative'>
                        <div className='p-[2px] rounded-sm bg-gradient-to-l from-[rgba(132,247,41,0.7)] to-[rgba(21,191,253,0.7)] w-32 h-28'>
                            <div className='bg-[#2d2c35] rounded-sm p-3 text-start w-full h-full'>
                                <img className='h-8 w-auto' src={status} alt="" />
                                <p className='text-sm'>Status</p>
                                <p className='text-xl font-semibold'>{CastData.status}</p>
                            </div>
                        </div>

                        <div className='p-[2px] rounded-sm bg-gradient-to-l from-[rgba(132,247,41,0.7)] to-[rgba(21,191,253,0.7)] w-32 h-28'>
                            <div className='bg-[#2d2c35] rounded-sm p-3 text-start w-full h-full'>
                                <img className='h-8 w-auto' src={species} alt="" />
                                <p className='text-sm'>Species</p>
                                <p className='text-xl font-semibold'>{CastData.species}</p>
                            </div>
                        </div>

                        <div className='p-[2px] rounded-sm bg-gradient-to-l from-[rgba(132,247,41,0.7)] to-[rgba(21,191,253,0.7)] w-32 h-28'>
                            <div className='bg-[#2d2c35] rounded-sm p-3 text-start w-full h-full'>
                                <img className='h-8 w-auto' src={gender} alt="" />
                                <p className='text-sm'>Gender</p>
                                <p className='text-xl font-semibold'>{CastData.gender}</p>
                            </div>
                        </div>

                    </div>

                    <div className='p-[2px] rounded-sm bg-gradient-to-l from-[rgba(132,247,41,0.7)] to-[rgba(21,191,253,0.7)] z-50'>
                        <div className='bg-[#2d2c35] rounded-sm p-3'>
                            <img src={origin} alt={CastData.origin.url} />
                            <p className='text-sm'>Origin</p>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-bold'>{CastData.origin.name}</p>
                                <img src={redirect} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='p-[2px] rounded-sm bg-gradient-to-l from-[rgba(132,247,41,0.7)] to-[rgba(21,191,253,0.7)] z-50'>
                        <div className='bg-[#2d2c35] rounded-sm p-3'>
                            <img src={location} alt={CastData.location.url} />
                            <p className='text-sm'>Location</p>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-bold'>{CastData.location.name}</p>
                                <img src={redirect} alt="" />
                            </div>
                        </div>
                    </div>


                    <div className='p-[2px] rounded-sm bg-gradient-to-l from-[rgba(132,247,41,0.7)] to-[rgba(21,191,253,0.7)] w-full max-h-[200px] overflow-y-scroll z-50'>
                        <div className='bg-[#2d2c35] rounded-sm p-3 w-full h-full'>
                            <div className='text-start'>
                                <HiMiniBarsArrowUp size={24} className='text-[rgba(132,247,41,0.7)]' />
                            </div>
                            <p className='text-sm'>Episodes</p>
                            <ul className='ml-3'>
                                {CastData.episode.map((esp, idx) => (
                                    <li className='list-disc font-bold text-xl' key={idx}>{esp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SingleCast;