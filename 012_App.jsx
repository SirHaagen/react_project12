
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Team } from "./components/Team";
import { Civilizations } from "./components/Civilizations";
import { Civilization } from "./components/Civilizattion";

const App = () => {

  return (    
    <BrowserRouter>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/civilizations">Civilizations</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/civilizations/:id" element={<Civilization />} /> {/* Para manejo de subsecciones*/}
        <Route path="/civilizations" element={<Civilizations />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App