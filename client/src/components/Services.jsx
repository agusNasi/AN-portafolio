import Service from './Service';

export default function Services() {
  return (
    <>
      <h3 className="titulo-seccion">MIS SERVICIOS</h3>
      <div className="fila">
        <Service
          title={'Diseño de sitios web'}
          text={
            'Conozco la importacia del diseño web y puedo ayudarte a crear un sitio web que te encantará.'
          }
          icon={'fa-solid fa-pen-ruler'}
        />
        <Service
          title={'Base de Datos'}
          text={
            'Las bases de datos son fundamentales para poder guardar la informacion. Me encargaré de crear una base de datos segura para vos y tus clientes.'
          }
          icon={'fa-solid fa-code'}
        />
        <Service
          title={'SEO'}
          text={
            'Optimizaré su sitio con una estrategia inteligente de motores de búsqueda para generar potenciales clientes.'
          }
          icon={'fa-solid fa-crosshairs'}
        />
      </div>
      <div className="fila">
        <Service
          title={'Alojamiento de sitios'}
          text={
            'Los servidores de alojamientos son importantes para una buena experiencia en el sitio web. Es por esto que alojaré su sitio web en el mejor servidor que se adapte a su pagina web.'
          }
          icon={'fa-solid fa-database'}
        />
        <Service
          title={'Full Responsive'}
          text={
            'Su sitio se muestre correctamente en cualquier dispositivo, incluidas computadoras de escritorio, mesas y teléfonos móviles.'
          }
          icon={'fa-solid fa-mobile-screen-button'}
        />
        <Service
          title={'Performance'}
          text={
            'Retener a los usuarios es crucial para mejorar las conversiones. los sitios de alto rendimiento atraen y retienen a los usuarios.'
          }
          icon={'fa-solid fa-gauge-high'}
        />
      </div>
    </>
  );
}
