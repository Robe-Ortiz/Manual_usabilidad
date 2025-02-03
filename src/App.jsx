import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Introduccion from "./pages/Introduccion"
import Accesibilidad from "./pages/Accesibilidad"
import Interfaces from "./pages/Interfaces"
import Navegacion from "./pages/Navegacion"
import Practicas from "./pages/Practicas"
import Testing from "./pages/Testing"
import { useState } from "react" 

function App() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header toggleMenu={toggleMenu} isOpen={isOpen} />         
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Introduccion />} />
              <Route path="/accesibilidad" element={<Accesibilidad />} />
              <Route path="/interfaces" element={<Interfaces />} />
              <Route path="/navegacion" element={<Navegacion />} />
              <Route path="/practicas" element={<Practicas />} />
              <Route path="/testing" element={<Testing />} />
            </Routes>
          </main>         
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

