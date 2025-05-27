import './App.css'
import backgrounImage from '../src/assets/bgImage.png'
import Banner from './components/Banner'
import MeetCost from './components/MeetCost'
import SpiralElement from './assets/SpiralElement.png'
import Episode from './components/Episode'
import Location from './components/Location'
function App() {

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(25, 29, 41, 0.9), rgba(25, 29, 41, 0.9)), url(${backgrounImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} className='w-full h-screen relative overflow-x-hidden' >


      <div className='w-[356px] h-[356px] border -ml-1/2  absolute bg-[#2A3E84]  -left-[80px] -bottom-[80px] blur-[150px]'>

      </div>
      <div className='w-[356px] h-[356px] border absolute bg-[#2A3E84] -right-[80px] blur-[150px] -top-[80px]'>

      </div>

      <img
        src={SpiralElement}
        alt="ractangle"
        className='absolute bottom-0 right-0  h-auto '
      />

      <header>
        <Banner></Banner>
      </header>
      <main className='container mx-auto w-full'>

        <MeetCost></MeetCost>
        <div className='flex items-center justify-center'>
          <div class="w-8 h-8 relative">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg viewBox="0 0 100 100" class="w-4 h-4 text-[#15BFFD] fill-current">
                <polygon points="50,5 61,39 98,39 67,61 79,95 50,75 21,95 33,61 2,39 39,39" />
              </svg>
            </div>
          </div>

        </div>
        <Episode></Episode>
        <div className='flex items-center justify-between'>
          <div class="w-8 h-8 relative">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg viewBox="0 0 100 100" class="w-4 h-4 text-[#15BFFD] fill-current">
                <polygon points="50,5 61,39 98,39 67,61 79,95 50,75 21,95 33,61 2,39 39,39" />
              </svg>
            </div>
          </div>
          <div class="w-8 h-8 relative">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg viewBox="0 0 100 100" class="w-4 h-4 text-[#15BFFD] fill-current">
                <polygon points="50,5 61,39 98,39 67,61 79,95 50,75 21,95 33,61 2,39 39,39" />
              </svg>
            </div>
          </div>

        </div>
        <Location></Location>

      </main>
    </section>
  )
}

export default App
