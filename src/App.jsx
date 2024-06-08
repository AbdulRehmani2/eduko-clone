import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CoursePage from './pages/CoursePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <div className='main-container'>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
          <Route path='/2061' element={<CoursePage></CoursePage>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
