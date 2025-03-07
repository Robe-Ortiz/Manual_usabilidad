import React from 'react'

function Practicas() {
    return (
        <div className="p-4">
          <h1 className="titulo-principal">Buenas Prácticas en Desarrollo de Apps Usables</h1>
    
          <section className="usabilidad-section slide-from-right">
            <h3 className="titulo-seccion">Evitar sobrecarga cognitiva</h3>
            <p>
              La sobrecarga cognitiva ocurre cuando el usuario recibe demasiada información o se le presentan demasiadas opciones al mismo tiempo, lo que puede dificultar su capacidad para tomar decisiones y realizar tareas de manera eficiente. Para evitar esto, es importante simplificar la interfaz y organizar la información de forma clara y accesible.
            </p>
            <ul className="list-disc pl-5 list-inside marker:text-green-800">
              <li><span className="font-semibold text-green-600">Agrupar información relacionada</span>: Presentar la información de manera agrupada ayuda a los usuarios a procesarla de manera más eficiente.</li>
              <li><span className="font-semibold text-green-600">Reducir las opciones visibles</span>: Evitar mostrar demasiadas opciones al mismo tiempo. Si es necesario, utiliza menús desplegables o páginas adicionales.</li>
              <li><span className="font-semibold text-green-600">Priorizar tareas</span>: Guía al usuario a través de los pasos necesarios, destacando las acciones más importantes y ocultando las menos relevantes.</li>
            </ul>
          </section>
    
          <section className="usabilidad-section slide-from-left">
            <h3 className="titulo-seccion">Minimizar tiempo de espera</h3>
            <p>
              Los tiempos de espera largos pueden generar frustración en los usuarios. Es fundamental optimizar la aplicación para que las interacciones sean rápidas y fluidas. Si hay que esperar, es importante proporcionar retroalimentación visual o textual para que el usuario sepa que el proceso está en marcha.
            </p>
            <ul className="list-disc pl-5 list-inside marker:text-green-800">
              <li><span className="font-semibold text-green-600">Optimización de recursos</span>: Minimizar el tamaño de los archivos, optimizar las consultas a la base de datos y usar técnicas como la carga diferida para mejorar los tiempos de respuesta.</li>
              <li><span className="font-semibold text-green-600">Retroalimentación de carga</span>: Usar indicadores de progreso, como barras de carga o animaciones, para que el usuario sepa que la aplicación está trabajando en segundo plano.</li>
              <li><span className="font-semibold text-green-600">Cargar solo lo necesario</span>: Cargar solo la información que el usuario necesita en ese momento para reducir la cantidad de datos que deben ser procesados.</li>
            </ul>
          </section>
    
          <section className="usabilidad-section slide-from-right">
            <h3 className="titulo-seccion">Uso eficiente de notificaciones y alertas</h3>
            <p>
              Las notificaciones y alertas son herramientas útiles para mantener al usuario informado, pero deben ser utilizadas de manera prudente. Un uso excesivo o invasivo de notificaciones puede resultar molesto y perjudicar la experiencia del usuario.
            </p>
            <ul className="list-disc pl-5 list-inside marker:text-green-800">
              <li><span className="font-semibold text-green-600">Notificaciones claras y concisas</span>: Las notificaciones deben ser fáciles de entender, con un mensaje directo que informe al usuario sobre la acción o el evento relevante.</li>
              <li><span className="font-semibold text-green-600">Evitar notificaciones constantes</span>: Limitar la frecuencia de las notificaciones para que no resulten molestas o intrusivas. Utiliza solo las más importantes para la experiencia del usuario.</li>
              <li><span className="font-semibold text-green-600">Ofrecer control sobre las notificaciones</span>: Permitir que el usuario configure qué tipo de notificaciones desea recibir y con qué frecuencia, para que tenga un mayor control sobre su experiencia.</li>
            </ul>
          </section>
        </div>
      )
}

export default Practicas