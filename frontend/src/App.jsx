import React from 'react'
import Navbar from './Components/Navigation/Navbar'
import Mydata from './Components/Data/Mydata'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <div>
      <Navbar/>
      <Mydata/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App
