import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about-us" element={<About/>} />
          <Route exact path="/contact-us" element={<Contact/>} />
          <Route exact path="/project" element={<Projects/>} />
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;




