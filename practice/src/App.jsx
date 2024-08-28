// import Profile from './components/Profile'
// import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutUs from './components/AboutUs'; 
import Footer from './components/Footer';
import './components/Navbar.css';
import './components/Hero.css';
import './components/About.css';
import './components/AboutUs.css';
import './components/Footer.css';

function App() {
  return (
    <div>
      {/* <Profile/> */}
      <Navbar/>
      <Hero/>
      <About/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default App
