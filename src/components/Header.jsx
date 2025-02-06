import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/solid";

function Header({ toggleMenu, isOpen }) {
  const closeMenu = () => {
    toggleMenu(); 
  };

  return (
    <header className="bg-green-800 text-white p-4 shadow-md relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img 
          src="/capibara.png" 
          alt="Logo" 
          className="h-20 w-auto mr-4"
        />
        <button 
          onClick={toggleMenu} 
          className="font-bold bg-green-600 py-2 px-4 rounded md:hidden flex items-center justify-center"
        >
          <MenuIcon className="h-8 w-8 text-white" /> 
        </button>

        {/* Menú desplegable en pantallas pequeñas */}
        {isOpen && (
          <ul className="absolute top-full w-80 bg-green-800 text-white p-4 rounded-md shadow-md md:hidden h-auto mt-4 mx-4 mb-4 z-2">
            <h3 className="text-center text-3xl font-bold text-white py-4 px-4 rounded-md mb-4">Contenido</h3>
            <li><Link to="/" className="block py-4 text-lg whitespace-nowrap text-center border-t-2 border-b-2 border-white focus:outline-none slide-from-right" onClick={closeMenu}>Introducción a la accesibilidad</Link></li>
            <li><Link to="/accesibilidad" className="block py-4 text-lg whitespace-nowrap text-center border-b-2 border-white  focus:outline-none slide-from-left" onClick={closeMenu}>Accesibilidad y Diseño Inclusivo</Link></li>
            <li><Link to="/interfaces" className="block py-4 text-lg whitespace-nowrap text-center border-b-2 border-white focus:outline-none slide-from-right" onClick={closeMenu}>Diseño de Interfaces (UI)</Link></li>
            <li><Link to="/navegacion" className="block py-4 text-lg whitespace-nowrap text-center border-b-2 border-white focus:outline-none slide-from-left" onClick={closeMenu}>Navegación y Flujo de Usuario</Link></li>
            <li><Link to="/practicas" className="block py-4 text-lg whitespace-nowrap text-center border-b-2 border-white focus:outline-none slide-from-right" onClick={closeMenu}>Buenas Prácticas en Desarrollo</Link></li>
            <li><Link to="/testing" className="block py-4 text-lg whitespace-nowrap text-center border-b-2 border-white focus:outline-none slide-from-left" onClick={closeMenu}>Testing de Usabilidad en React</Link></li>
          </ul>
        )}

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:grid grid-cols-6 gap-6 justify-start w-full">
          <li><Link to="/" className="block py-2 px-4 hover:bg-green-600 rounded text-xl whitespace-nowrap text-center">Introducción</Link></li>
          <li><Link to="/accesibilidad" className="block py-2 px-4 hover:bg-green-600 rounded text-xl whitespace-nowrap text-center">Accesibilidad</Link></li>
          <li><Link to="/interfaces" className="block py-2 px-4 hover:bg-green-600 rounded text-xl whitespace-nowrap text-center">Diseño</Link></li>
          <li><Link to="/navegacion" className="block py-2 px-4 hover:bg-green-600 rounded text-xl whitespace-nowrap text-center">Navegación</Link></li>
          <li><Link to="/practicas" className="block py-2 px-4 hover:bg-green-600 rounded text-xl whitespace-nowrap text-center">Prácticas</Link></li>
          <li><Link to="/testing" className="block py-2 px-4 hover:bg-green-600 rounded text-xl whitespace-nowrap text-center">Testing</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
