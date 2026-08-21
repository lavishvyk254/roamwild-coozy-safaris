import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Trips from './pages/Trips';
import About from './pages/About';
import Impact from './pages/Impact';
import Experience from './pages/Experience';
import VanHire from './pages/VanHire';
import Merch from './pages/Merch';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/van-hire" element={<VanHire />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;