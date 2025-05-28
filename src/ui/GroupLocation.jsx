import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import './slide.css'
// import required modules
import { Navigation } from 'swiper/modules';
const GroupLocation = ({locations}) => {
    return (
         <>
            {locations?.length > 0 ? (
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
                    {locations.map(location => (
                        <SwiperSlide key={location.id}>
                            <div className="relative lg:w-56">
                                {/* Gradient Border Wrapper */}
                                <div className="p-[1px] rounded-xl bg-gradient-to-l from-[rgba(132,247,41,0.7)] to-[rgba(21,191,253,0.7)] clip-card">

                                    {/* Actual Card Content */}
                                    <div className="bg-[#2d2c35]  rounded-[10px] clip-card lg:p-4 p-2 text-white">
                                        <p>#{location.id}</p>
                                        <p className="mt-2 font-semibold text-sm">{location.name}</p>
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

export default GroupLocation;