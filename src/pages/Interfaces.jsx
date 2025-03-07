import React from 'react'

function Interfaces() {
    return (
        <div className="p-4">
          <h1 className="titulo-principal">Diseño de Interfaces (UI) Eficientes</h1>
    
          <section className="usabilidad-section slide-from-right">
            <h3 className="titulo-seccion">Botones y tamaño táctil recomendado</h3>
            <p>
              El tamaño de los botones es fundamental para garantizar una buena interacción en dispositivos táctiles. Se recomienda que los botones tengan un tamaño mínimo de 44x44 píxeles, lo que facilita su uso sin errores de selección. Además, los botones deben estar lo suficientemente espaciados para evitar que los usuarios toquen accidentalmente otros elementos.
            </p>
          </section>

          <figure className="picture">
            <img 
              src="alineacion.jpg" 
              alt="Imagen sobre la alineación de texto" 
              className="w-full rounded-lg shadow-md slide-from-left"
            />
            <figcaption className="caption slide-from-left">
              Imagen ilustrativa sobre la alineación de texto
            </figcaption>
          </figure>

    
          <section className="usabilidad-section slide-from-left">
            <h3 className="titulo-seccion">Espaciado y alineación</h3>
            <p className="mb-4">
              Un espaciado adecuado entre los elementos de la interfaz mejora la claridad y la legibilidad. El uso del espaciado vertical y horizontal debe estar bien balanceado, evitando que los elementos se vean demasiado apretados o dispersos. La alineación coherente de los elementos también es clave para una apariencia ordenada y profesional.
            </p>
            <ul className="usabilidad-section">
              <li><span className="font-semibold text-green-600">Espaciado consistente</span>: Asegúrate de que el espaciado entre los elementos sea uniforme para evitar una sensación de desorden.</li>
              <li><span className="font-semibold text-green-600">Alineación centrada o justificada</span>: Mantén una alineación coherente en los botones, campos de texto y otros elementos clave.</li>
            </ul>
          </section>
    
          <section className="usabilidad-section slide-from-right">
            <h3 className="titulo-seccion">Animaciones y retroalimentación visual</h3>
            <p>
              Las animaciones suaves y la retroalimentación visual proporcionan una mejor experiencia de usuario. Ayudan a que los usuarios comprendan el estado de la interfaz (por ejemplo, un botón pulsado) y el resultado de sus interacciones. Las animaciones deben ser sutiles y no distraer al usuario, mientras que la retroalimentación visual debe ser clara y directa.
            </p>
            <ul className="space-y-2">
              <li>
                <h5 className="text-l font-medium text-green-600 italic">Animaciones</h5>
                <p>Las animaciones deben ser rápidas y fluidas, evitando tiempos de espera largos. Son útiles para indicar cambios o transiciones importantes.</p>
              </li>
              <li>
                <h5 className="text-l font-medium text-green-600 italic">Retroalimentación visual</h5>
                <p>Proporciona retroalimentación visual inmediata cuando el usuario interactúa con la interfaz, como un cambio de color en un botón cuando es presionado.</p>
              </li>
            </ul>
          </section>
        </div>
      )
}

export default Interfaces