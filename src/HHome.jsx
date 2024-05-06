
import './App.css'
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Project from './Page/Project/Project'
import Contact from './Page/Contact/Contact'
import Footer from './component/shered/Footer/Footer'

const HHome = () => {
  return (
    <div className=' overflow-hidden'>
     <Home/>
      
      <div className='md:mt-32 ml-6'>
        <Project />
      </div>
      <div className=' mx-auto'>
        <About />
      </div>
      <div className=' mx-auto'>
        <Contact />
      </div>
    </div>
  );
};

export default HHome;
