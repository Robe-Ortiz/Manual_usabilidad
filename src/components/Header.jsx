import { Link } from "react-router-dom";

function Header({ toggleMenu, isOpen }) {
  return (
    <header className="bg-green-800 text-white p-4 shadow-md relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Botón de menú */}
        <button 
          onClick={toggleMenu} 
          className=" font-bold bg-green-600 py-2 px-4 rounded md:hidden"
        >
         Menú de navegación ▼
        </button>

        {/* Menú desplegable en pantallas pequeñas */}
        {isOpen && (
          <ul className="absolute top-full w-80 bg-green-800 text-white p-4 rounded-md shadow-md md:hidden h-auto mt-4 mx-4 mb-4">
            <h3 className="text-center text-xl font-bold text-white py-2 px-4 rounded-md mb-4">Contenido</h3>
            {/* Elementos de la lista */}
            <li><Link to="/" className="block py-2 text-lg whitespace-nowrap">1. Introducción a la accesibilidad</Link></li>
            <li><Link to="/accesibilidad" className="block py-2 text-lg whitespace-nowrap">2. Accesibilidad y Diseño Inclusivo</Link></li>
            <li><Link to="/interfaces" className="block py-2 text-lg whitespace-nowrap">3. Diseño de Interfaces (UI) Eficientes</Link></li>
            <li><Link to="/navegacion" className="block py-2 text-lg whitespace-nowrap">4. Navegación y Flujo de Usuario</Link></li>
            <li><Link to="/practicas" className="block py-2 text-lg whitespace-nowrap">5. Buenas Prácticas en Desarrollo</Link></li>
            <li><Link to="/testing" className="block py-2 text-lg whitespace-nowrap">6. Testing de Usabilidad en React.js</Link></li>
          </ul>
        )}

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:grid grid-cols-6 gap-6 justify-start w-full">
          <li>
            <Link to="/" className="block py-2 px-4 hover:bg-green-600 rounded text-lg whitespace-nowrap">1. Introducción</Link>
          </li>
          <li>
            <Link to="/accesibilidad" className="block py-2 px-4 hover:bg-green-600 rounded text-lg whitespace-nowrap">2. Accesibilidad</Link>
          </li>
          <li>
            <Link to="/interfaces" className="block py-2 px-4 hover:bg-green-600 rounded text-lg whitespace-nowrap">3. Diseño</Link>
          </li>
          <li>
            <Link to="/navegacion" className="block py-2 px-4 hover:bg-green-600 rounded text-lg whitespace-nowrap">4. Navegación</Link>
          </li>
          <li>
            <Link to="/practicas" className="block py-2 px-4 hover:bg-green-600 rounded text-lg whitespace-nowrap">5. Buenas Prácticas</Link>
          </li>
          <li>
            <Link to="/testing" className="block py-2 px-4 hover:bg-green-600 rounded text-lg whitespace-nowrap">6. Testing</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
