import Location from '../components/Location';
import Episode from '../components/Episode';
import MeetCost from '../components/MeetCost';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <section>
            <header>
                <Banner></Banner>
            </header>
            <main className='container mx-auto w-full'>

                <MeetCost></MeetCost>
                <div className='flex items-center justify-center'>
                    <div className="w-8 h-8 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <svg viewBox="0 0 100 100" className="w-2 h-2 text-[#15BFFD] fill-current">
                                <polygon points="50,5 61,39 98,39 67,61 79,95 50,75 21,95 33,61 2,39 39,39" />
                            </svg>
                        </div>
                    </div>

                </div>
                <Episode></Episode>
                <div className='flex items-center justify-between'>
                    <div className="w-8 h-8 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <svg viewBox="0 0 100 100" className="w-4 h-4 text-[#15BFFD] fill-current">
                                <polygon points="50,5 61,39 98,39 67,61 79,95 50,75 21,95 33,61 2,39 39,39" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-8 h-8 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <svg viewBox="0 0 100 100" className="w-4 h-4 text-[#15BFFD] fill-current">
                                <polygon points="50,5 61,39 98,39 67,61 79,95 50,75 21,95 33,61 2,39 39,39" />
                            </svg>
                        </div>
                    </div>

                </div>
                <Location></Location>

            </main>
        </section>
    );
};

export default Home;