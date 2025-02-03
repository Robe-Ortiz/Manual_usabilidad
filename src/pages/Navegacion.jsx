import React from 'react'

function Navegacion() {
    return (
        <div className="p-4">
          <h1 className='text-5xl font-bold mb-10 text-green-800 text-center'>Navegación y Flujo de Usuario</h1>
    
          <section className="mb-6 bg-green-100 p-4 rounded-md max-w-5xl mx-auto">
            <h3 className="text-3xl font-semibold mb-2 text-center text-green-800">Implementación de React Navigation</h3>
            <p className="text-base">
              React Navigation es una librería popular para gestionar la navegación dentro de aplicaciones React Native. Permite crear flujos de usuario y gestionar el estado de las pantallas. Ofrece diversas opciones de navegación, como navegación en pilas, en pestañas y en cajón, lo que facilita la construcción de interfaces de usuario dinámicas y atractivas.
            </p>
          </section>
    
          <section className="mb-6 bg-green-100 p-4 rounded-md max-w-5xl mx-auto">
            <h3 className="text-3xl font-semibold mb-2 text-center text-green-800">Tipos de navegación (Stack, Tabs, Drawer)</h3>
            <p className="text-base mb-4">
              React Navigation ofrece varios tipos de navegación que puedes utilizar dependiendo de la estructura y las necesidades de tu aplicación. A continuación se describen los tres tipos más comunes:
            </p>
            <ul className="space-y-2">
              <li>
                <h5 className="text-l font-medium text-green-600 italic">Stack Navigation</h5>
                <p className="text-base">La navegación en pilas permite gestionar una serie de pantallas en una secuencia. Cada nueva pantalla se apila encima de la anterior, lo que permite navegar hacia atrás para regresar a las pantallas previas. Ideal para flujos de usuario donde es necesario avanzar y retroceder entre vistas (por ejemplo, una aplicación de registros de usuario).</p>
              </li>
              <li>
                <h5 className="text-l font-medium text-green-600 italic">Tabs Navigation</h5>
                <p className="text-base">La navegación por pestañas permite cambiar entre diferentes secciones de la aplicación utilizando una barra de pestañas ubicada en la parte inferior o superior de la pantalla. Ideal para aplicaciones que requieren mostrar varias secciones principales de forma simultánea, como redes sociales o aplicaciones de noticias.</p>
              </li>
              <li>
                <h5 className="text-l font-medium text-green-600 italic">Drawer Navigation</h5>
                <p className="text-base">La navegación en cajón (drawer) se refiere a un panel deslizante que aparece al tocar un botón, generalmente en la parte superior izquierda de la pantalla. El menú contiene enlaces a diferentes secciones de la aplicación. Es útil para aplicaciones con una estructura de navegación más compleja, permitiendo acceder a varias secciones de forma rápida y cómoda.</p>
              </li>
            </ul>
          </section>
    
          <section className="mb-6 bg-green-100 p-4 rounded-md max-w-5xl mx-auto">
            <h3 className="text-3xl font-semibold mb-2 text-center text-green-800">Buenas prácticas en navegación</h3>
            <p className="text-base">
              Una buena implementación de la navegación es esencial para una experiencia de usuario fluida y agradable. A continuación, se mencionan algunas buenas prácticas:
            </p>
            <ul className="list-disc pl-5 list-inside marker:text-green-800">
              <li><span className="font-semibold text-green-600">Claridad y consistencia</span>: Asegúrate de que los usuarios entiendan fácilmente cómo moverse dentro de la aplicación. La navegación debe ser consistente en toda la aplicación.</li>
              <li><span className="font-semibold text-green-600">Accesibilidad</span>: Garantiza que los elementos de navegación sean accesibles para todos los usuarios, incluyendo aquellos con discapacidades visuales o motoras. Utiliza etiquetas y roles adecuados para la accesibilidad.</li>
              <li><span className="font-semibold text-green-600">Evita sobrecargar la interfaz</span>: No sobrecargues el menú de navegación con demasiadas opciones. Prioriza las secciones más importantes y usa submenús si es necesario.</li>
              <li><span className="font-semibold text-green-600">Responde rápidamente</span>: La navegación debe ser rápida y sin demoras. Los usuarios no deben esperar mucho tiempo para que se cargue una nueva pantalla o sección.</li>
              <li><span className="font-semibold text-green-600">Considera la navegación móvil</span>: En dispositivos móviles, asegúrate de que la navegación sea fácil de usar y que los elementos sean lo suficientemente grandes para interactuar con ellos de manera táctil.</li>
            </ul>
          </section>
        </div>
      )
    }

export default Navegacion