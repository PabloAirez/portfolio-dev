import './App.css'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import Experiences from './Components/Experiences'

function App() {
  return (
    <>
      <div className="parallax-bg"></div>
      <div className="content-wrapper">
        <Header />
        <AboutMe/> 
        <Projects />
        <Experiences />
      </div>
    </>
  )
}

export default App
