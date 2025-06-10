import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from "./components/ProjectCard";
import './styles.css';

function App() {
  console.log("App démarre !")
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectCard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
