import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Education />
      <Technologies />
      <Projects />
      <Footer />
    </>
  )
}

export default App;
