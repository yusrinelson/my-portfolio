
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import Experience from './components/Experience'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Experience/>
      <Projects/>
      <SocialLinks/>
      <Contact/>
    </div>
  )
}

export default App
