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
            <div className='flex items-center justify-between px-1'>
                <p className='text-2xl text-[#FFFFFF]'>Meet the cast</p>
                <div></div>
                <button className='btn btn-outline border-[#9DFE00]'>View All</button>
            </div>
            <Slider characters={characters} ></Slider>

        </section>
    );
};

export default MeetCost;