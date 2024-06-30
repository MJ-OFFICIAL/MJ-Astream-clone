import React from 'react'
import './App.css'
import Navbar from './Componant/navbar/Navbar'  
import Footer from './Componant/footer/Footer'
import Dropdown from './Componant/navbar/Dropdown'
import { useState } from 'react'
 
const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='main_app '>
      
      <Navbar onHover={setIsHovered}/>
      
      <Dropdown isVisible={isHovered}/>
      <Footer/>
    
    </div>
  )
}

export default App
