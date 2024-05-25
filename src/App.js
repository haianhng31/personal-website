import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import TechProjects from './pages/TechProjects/TechProjects';
import NonTechProjects from './pages/NonTechProjects/NonTechProjects';
// import Fun from './pages/Fun/Fun';
import Contact from './pages/Contact/Contact';
import Footer from './Footer';
import Experience from './pages/Experience/Experience';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <NavBar/>
          <div className="content">
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/about" element = {<About/>}/>
            <Route path="/tech-projects" element = {<TechProjects/>}/>
            <Route path="/non-tech-projects" element = {<NonTechProjects/>}/>
            <Route path="/experience" element = {<Experience/>}/>
            <Route path="/contact" element = {<Contact/>}/>
          </Routes>
          </div>
          <Footer/>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
