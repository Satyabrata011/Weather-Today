

import './App.css'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>

   <Appbar />

        <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/contact" element={<Contact/>} />
          <Route path= "/about" element={<About/>} />
        </Routes>

   
   <Footer />
   
 
   

   </>
   
  )
}

export default App
