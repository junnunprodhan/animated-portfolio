
import './App.css'
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Project from './Page/Project/Project'
import Contact from './Page/Contact/Contact'

function App() {

  return (
    <div>
      <Home />
      <About />
      <div className='mt-32'>
        <Project />
      </div>
      <div className=''>
        <Contact />
      </div>
    </div>
  )
}

export default App
