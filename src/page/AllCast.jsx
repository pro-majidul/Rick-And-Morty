import backgrounImage from '../assets/Imageoverlay.png';
import Navbar from '../shared/Navbar';
import CastData from '../shared/CastData';
import { Link } from 'react-router-dom';

const AllCast = () => {
    const characters = CastData();
    // console.log(characters);

    return (
        <section
            style={{
                backgroundImage: `linear-gradient(rgba(25, 29, 41, 0.3), rgba(25, 29, 41, 0.3)), url(${backgrounImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            className='w-full relative overflow-hidden'
        >
            {/* Background Blur Elements */}
            <div className='w-[356px] h-[356px] absolute bg-[#2A3E84] -left-[80px] -bottom-[80px] blur-[150px]' />
            <div className='w-[356px] h-[356px] absolute bg-[#2A3E84] -right-[80px] blur-[150px] top-[30%]' />

            <Navbar />

            <div className='container mx-auto p-2 relative py-10'>
                {/* Decorative Stars */}
                <div className="absolute top-[50%] -left-10 -translate-x-1/2 -translate-y-1/2">
                    <svg viewBox="0 0 100 100" className="w-4 h-4 text-[#15BFFD] fill-current">
                        <polygon points="50,5 61,39 98,39 67,61 79,95 50,75 21,95 33,61 2,39 39,39" />
                    </svg>
                </div>

                <div className="absolute top-[55%] right-0 -translate-x-1/2 -translate-y-1/2">
                    <svg viewBox="0 0 100 100" className="w-4 h-4 text-[#15BFFD] fill-current">
                        <polygon points="50,5 61,39 98,39 67,61 79,95 50,75 21,95 33,61 2,39 39,39" />
                    </svg>
                </div>

                <div className="absolute bottom-0 left-[20%] -translate-x-1/2 -translate-y-1/2">
                    <svg viewBox="0 0 100 100" className="w-2 h-2 text-[#15BFFD] fill-current">
                        <polygon points="50,5 61,39 98,39 67,61 79,95 50,75 21,95 33,61 2,39 39,39" />
                    </svg>
                </div>

                {/* Section Heading */}
                <h3 className='lg:text-5xl text-2xl font-bold text-[#14D9E6]'>All Cast</h3>

                {/* Cast Grid */}
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 my-5 py-5'>
                    {characters.map((character) => (
                        <div key={character.id} className="relative lg:w-56">
                            <div className="p-[1px] rounded-xl bg-gradient-to-l from-[rgba(132,247,41,0.7)] to-[rgba(21,191,253,0.7)] clip-card">
                                <Link to={`/character/${character.id}`}>
                                    <div className="bg-[#2d2c35] rounded-[10px] clip-card p-4 text-white">
                                        <img
                                            src={character.image}
                                            alt={character.name}
                                            className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                                        />
                                        <p className="mt-2 font-semibold text-sm">{character.name}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllCast;
