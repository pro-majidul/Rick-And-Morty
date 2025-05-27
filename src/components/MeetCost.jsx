import React, { useEffect, useState } from 'react';
import Slider from '../ui/Slider';
const MeetCost = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await fetch('https://rickandmortyapi.com/api/character');
                const result = await data.json();
                setCharacters(result.results); // <-- ঠিক এইখানে
            } catch (error) {
                console.error("Failed to fetch characters:", error);
            }
        };

        fetchCharacters();
    }, [])

    return (
        <section>
            <div className='flex items-center justify-between px-2'>
                <p className='text-2xl text-[#FFFFFF]'>Meet the cast</p>
                
                <button className='btn btn-outline border-[#9DFE00] cursor-pointer z-50'>View All</button>
            </div>
            <div className='py-2 my-5 px-2'>
                <Slider characters={characters} ></Slider>
            </div>

        </section>
    );
};

export default MeetCost;