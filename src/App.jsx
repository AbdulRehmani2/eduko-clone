import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Cards from './components/Cards'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className='main-container'>
      <Navbar></Navbar>
      <Slider></Slider>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  )
}

export default App
