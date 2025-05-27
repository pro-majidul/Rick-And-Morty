import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import './slide.css'
// import required modules
import { Navigation } from 'swiper/modules';

const GroupSlide = ({ episodes }) => {
    console.log(episodes)
    return (
        <>
            {episodes?.length > 0 ? (
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    spaceBetween={30}
                    slidesPerView={2}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {episodes.map(character => (
                        <SwiperSlide key={character.id}>
                            {/* <div className='flex flex-col  text-white border border-[#9DFE00] md:p-3 p-1 rounded-br-3xl'>
                                            <img
                                                src={character.image}
                                                alt={character.name}
                                                className='rounded-xl  object-cover'
                                            />
                                            <p className='mt-2 font-semibold text-start'>{character.name}</p>
                                        </div> */}
                            {/* <div className="bg-transparent border border-[#9DFE00] p-3 rounded-xl relative w-52 text-white">
                                           
                                            <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#0F172A] border-t border-l border-[#9DFE00] transform rotate-45 translate-x-1/2 translate-y-1/2 z-10"></div>
            
                                            <img
                                                src={character.image}
                                                alt={character.name}
                                                className="rounded-lg w-full h-40 object-cover"
                                            />
                                            <p className="mt-2 font-semibold text-start text-sm">{character.name}</p>
                                        </div> */}
                            <div className="relative md:w-56">
                                {/* Clipped Card Container */}
                                <div className="clip-card bg-transparent border border-[#9DFE00] p-2 text-white">
                                    <p>{character.episode}</p>
                                    <p className="mt-2 font-semibold text-sm">{character.name}</p>
                                </div>
                            </div>




                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p className="text-center text-white">Loading characters...</p>
            )}
        </>
    );
};

export default GroupSlide;