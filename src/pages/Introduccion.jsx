import React from 'react'

function Introduccion() {
  return (
    <div className="p-4">
      <h1 className='text-5xl font-bold mb-10 text-green-800 text-center'>Introducción a la Usabilidad</h1>
      
      <section className="usabilidad-section">
        <h2 className="text-3xl font-semibold mb-2 text-center text-green-800">¿Qué es la usabilidad?</h2>
        <p className="text-base">
          La usabilidad es la medida de qué tan fácil y eficiente es para los usuarios interactuar con un sistema, aplicación, sitio web o producto.
          Se centra en la experiencia del usuario (UX) y en cómo este puede lograr sus objetivos de manera intuitiva, sin frustraciones ni confusión.
        </p>
      </section>

      <section className="usabilidad-section">
  <h3 className="text-3xl font-semibold mb-2 text-center text-green-800">Principios básicos</h3>
  <ul className="list-disc pl-5 list-inside marker:text-green-800">
    <li><span className="font-semibold text-green-600">Aprendizaje rápido</span>: Un usuario nuevo debe poder comprender cómo funciona el sistema con facilidad.</li>
    <li><span className="font-semibold text-green-600">Eficiencia</span>: Una vez aprendido, el sistema debe permitir completar tareas con rapidez.</li>
    <li><span className="font-semibold text-green-600">Memorabilidad</span>: Si un usuario regresa después de un tiempo sin usarlo, debe poder recordar cómo funciona sin dificultad.</li>
    <li><span className="font-semibold text-green-600">Prevención de errores</span>: Se deben evitar errores en la interacción y, si ocurren, proporcionar formas claras de solucionarlos.</li>
    <li><span className="font-semibold text-green-600">Satisfacción del usuario</span>: La experiencia debe ser agradable y no generar frustración.</li>
  </ul>
</section>

      <section className="usabilidad-section">
        <h3 className="text-3xl font-semibold mb-2 text-center text-green-800">Diferencias entre UX y UI</h3>
        <p className="text-base mb-4">UX (User Experience) y UI (User Interface) son conceptos relacionados pero distintos en el diseño de productos digitales.</p>
        <ul className="space-y-2">
          <li>
            <h5 className="text-l font-medium text-green-600 italic">UX (Experiencia de Usuario)</h5>
            <p className="text-base">Se enfoca en la experiencia global del usuario al interactuar con un producto o servicio. Abarca la facilidad de uso, la eficiencia, la satisfacción y la accesibilidad.</p>
          </li>
          <li>
            <h5 className="text-l font-medium text-green-600 italic">UI (Interfaz de Usuario)</h5>
            <p className="text-base">Se refiere al diseño visual y la interactividad de un producto. Se encarga de cómo se ven y funcionan los elementos en pantalla.</p>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Introduccion
