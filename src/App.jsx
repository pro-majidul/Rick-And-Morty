import './App.css'
import backgrounImage from '../src/assets/bgImage.png'
import Banner from './components/Banner'
function App() {

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(25, 29, 41, 0.9), rgba(25, 29, 41, 0.9)), url(${backgrounImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} className='w-full h-screen relative overflow-hidden' >


      <div className='w-[356px] h-[356px] border -ml-1/2  absolute bg-[#2A3E84]  -left-[80px] -bottom-[80px] blur-[150px]'>

      </div>
      <div className='w-[356px] h-[356px] border absolute bg-[#2A3E84] -right-[80px] blur-[150px] -top-[80px]'>

      </div>
      <header>
        <Banner></Banner>
      </header>

    </section>
  )
}

export default App
