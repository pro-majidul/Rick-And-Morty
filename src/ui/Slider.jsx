
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './slide.css'
// import required modules
import { Navigation } from 'swiper/modules';

const Slider = ({ characters }) => {
    return (
        <>
            {characters?.length > 0 ? (
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
                    {characters.map(character => (
                        <SwiperSlide key={character.id}>

                            <div className="relative lg:w-56">
                                {/* Clipped Card Container */}
                                <div className="p-[1px] rounded-xl bg-gradient-to-l from-[rgba(132,247,41,0.7)] to-[rgba(21,191,253,0.7)] clip-card">
                                    <div className="bg-[#2d2c35]  rounded-[10px] clip-card p-4 text-white">
                                        <img
                                            src={character.image}
                                            alt={character.name}
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <p className="mt-2 font-semibold text-sm">Rick Sanchez</p>
                                    </div>
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

export default Slider;
