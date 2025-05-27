
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

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
                    slidesPerView={3}
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
                            <div className='flex flex-col items-center text-white border'>
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    className='rounded-xl w-40 h-40 object-cover'
                                />
                                <p className='mt-2 font-semibold'>{character.name}</p>
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
