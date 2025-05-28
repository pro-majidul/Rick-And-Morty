import './App.css'
import backgrounImage from '../src/assets/bgImage.png'
import SpiralElement from './assets/SpiralElement.png'
import Home from './page/Home'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <section>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(25, 29, 41, 0.9), rgba(25, 29, 41, 0.9)), url(${backgrounImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} className='w-full relative overflow-hidden' >


        <div className='w-[356px] h-[356px]  -ml-1/2  absolute bg-[#2A3E84]  -left-[80px] -bottom-[80px] blur-[150px]'>

        </div>
        <div className='w-[356px] h-[356px]  absolute bg-[#2A3E84] -right-[80px] blur-[150px] -top-[80px]'>

        </div>

        <img
          src={SpiralElement}
          alt="ractangle"
          className='absolute -bottom-20 right-0'
        />
        <Home></Home>

      </div>
        <Outlet></Outlet>
    </section>
  )
}

export default App
