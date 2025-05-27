import React, { useEffect, useState } from 'react';
import GroupSlide from '../ui/GroupSlide';

const Episode = () => {
    const [episodes, setEpisodes] = useState([])
    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const data = await fetch("https://rickandmortyapi.com/api/episode");
                const result = await data.json();
                setEpisodes(result.results);
            } catch (error) {
                console.error("Failed to fetch Episodes:", error);
            }
        };

        fetchEpisodes();
    }, [])


    return (
        <section className='relative z-50'>
            <p className='text-2xl text-[#FFFFFF]'>Episodes </p>
            <div className='py-2 my-5 px-2'>
                <GroupSlide episodes={episodes} ></GroupSlide>
            </div>

            

        </section>
    );
};

export default Episode;