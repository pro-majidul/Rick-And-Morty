import { useEffect, useState } from 'react';

const CastData = () => {

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

    return characters
};

export default CastData;