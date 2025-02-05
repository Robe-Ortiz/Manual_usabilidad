import React from 'react'

function Accesibilidad() {
  return (
    <div className="p-4">
      <h1 className='text-5xl font-bold mb-10 text-green-800 text-center'>Accesibilidad y Diseño Inclusivo</h1>

      <section className="usabilidad-section slide-from-right">
        <h3 className="text-3xl font-semibold mb-2 text-center text-green-800">Uso de etiquetas <code>accessibilityLabel</code></h3>
        <p className="text-base">
          Las etiquetas <code>accessibilityLabel</code> son esenciales para mejorar la accesibilidad en las aplicaciones. Proporcionan una descripción clara y concisa de los elementos de la interfaz, permitiendo que las personas con discapacidades visuales o auditivas puedan interactuar con ellos a través de lectores de pantalla o tecnologías asistivas.
        </p>
      </section>

      <section className="usabilidad-section slide-from-left">
        <h3 className="text-3xl font-semibold mb-2 text-center text-green-800">Contrastes de color adecuados</h3>
        <p className="text-base mb-4">
          Un contraste adecuado entre el texto y el fondo es fundamental para garantizar que las personas con deficiencias visuales puedan leer el contenido sin dificultades. Se recomienda un contraste de al menos 4.5:1 para texto normal y 3:1 para texto grande, según las pautas WCAG.
        </p>
        <ul className="list-disc pl-5 list-inside marker:text-green-800">
          <li><span className="font-semibold text-green-600">Contraste adecuado</span>: Asegúrate de que los colores de texto y fondo sean fácilmente distinguibles.</li>
          <li><span className="font-semibold text-green-600">Prueba de contraste</span>: Usa herramientas como Contrast Checker para validar los contrastes en tu diseño.</li>
        </ul>
      </section>

      <section className="usabilidad-section slide-from-right">
        <h3 className="text-3xl font-semibold mb-2 text-center text-green-800">Fuentes legibles y escalabilidad</h3>
        <p className="text-base">
          Las fuentes legibles y escalables son clave para una buena accesibilidad. Usar fuentes sans-serif, como Arial o Helvetica, garantiza una mayor claridad. Además, el diseño debe ser adaptable, permitiendo que los usuarios aumenten el tamaño del texto sin afectar la legibilidad.
        </p>
        <ul className="space-y-2">
          <li>
            <h5 className="text-l font-medium text-green-600 italic">Fuentes legibles</h5>
            <p className="text-base">Opta por fuentes claras y fáciles de leer, evitando el uso de tipografías complejas.</p>
          </li>
          <li>
            <h5 className="text-l font-medium text-green-600 italic">Escalabilidad</h5>
            <p className="text-base">El diseño debe ser flexible para adaptarse a diferentes tamaños de pantalla y para permitir el aumento del tamaño de fuente sin perder la estructura.</p>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Accesibilidad
