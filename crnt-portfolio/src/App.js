import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbarcom from './components/Navbar/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      
        <Navbarcom />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      
    </div>
  );
}

export default App;
