import React, { useEffect, useState } from 'react';

const Location = () => {
    const [locations, setLocations] = useState([])
    useEffect(() => {
        const fetchlocations = async () => {
            try {
                const data = await fetch("https://rickandmortyapi.com/api/location");
                const result = await data.json();
                setLocations(result.results);
            } catch (error) {
                console.error("Failed to fetch locations:", error);
            }
        };

        fetchlocations();
    }, [])

    return (
        <section className='relative z-50'>
            <p className='text-2xl text-[#FFFFFF]'>Locations </p>
            {/* <div className='py-2 my-5 px-2'>
                <GroupSlide episodes={episodes} ></GroupSlide>
            </div> */}
        </section>
    );
};

export default Location;