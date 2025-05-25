import { useEffect, useState } from 'react'
import './App.css'
import backgrounImage from '../src/assets/bgImage.png'
import SideImage from '../src/assets/sideImage.png'
import SideImage2 from '../src/assets/sideImage.png'
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundSize = windowWidth < 768 ? '70%, 70%' : '30%, 30%';

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgb(25, 29, 41), rgb(25, 29, 41), url(${backgrounImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

      }} className='w-full h-screen relative box-border overflow-hidden' >
      {/* <div style={{
        backgroundImage: `url(${SideImage}), url(${SideImage2})`,
        backgroundSize: backgroundSize,
        backgroundPosition: 'bottom left, top right',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
      }} className='absolute w-full h-screen overflow-hidden'>

      </div> */}

      {/* <div className='w-1/4 h-1/4 border-amber-700 bg-[#2A3E84] blur-[350px] border absolute top-0 right-0'>

      </div>
      <div className='w-1/4 h-1/4 border-amber-700 bg-[#2A3E84] blur-[350px] border absolute bottom-0 left-0'>

      </div> */}

      <div className='w-[356px] h-[356px] border -ml-1/2  absolute bg-[#2A3E84]  -left-[80px] -bottom-[80px] blur-[150px]'>

      </div>
      <div className='w-[356px] h-[356px] border absolute bg-[#2A3E84] -right-[80px] blur-[150px] -top-[80px]'>

      </div>

    </section>
  )
}

export default App
