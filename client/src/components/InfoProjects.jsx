import Projects from './Projects';

export default function InfoProjects() {
  return (
    <>
      <h3 className="titulo-seccion">MIS PROYECTOS</h3>
      <div className="fila">
        <Projects
          linkPage={'https://trendback.onrender.com/'}
          src={'./img/trendback.jpg'}
          title={'E-commerce'}
          linkCode={'https://github.com/agusNasi/Trendback'}
        />
        <Projects
          linkPage={'https://an-booking-app.vercel.app/'}
          src={'./img/velplace.jpg'}
          title={'Booking'}
          linkCode={'https://github.com/agusNasi/velplace'}
        />
        <Projects
          linkPage={'https://myblog-mern-app.vercel.app/'}
          src={'./img/myblog.jpg'}
          title={'Blog'}
          linkCode={'https://github.com/agusNasi/myblog-app'}
        />
      </div>
      <div className="fila">
        <Projects
          linkPage={'https://actasitalia.com/'}
          src={'./img/actasitalia.jpeg'}
          title={'Pagina gestora de actas'}
          linkCode={'https://github.com/agusNasi/ID---GESTORA'}
        />
        <Projects
          linkPage={'https://e-commerce-coder.onrender.com/login'}
          src={'./img/ecommerce-phones.jpg'}
          title={'E-commerce'}
          linkCode={
            'https://github.com/agusNasi/repositorio-Backend-Coderhouse'
          }
        />
        <Projects
          linkPage={'https://agustinnasi.vercel.app/'}
          src={'./img/portafolio-web.PNG'}
          title={'AN portafolio'}
          linkCode={'https://github.com/agusNasi/AN-portafolio'}
        />
      </div>
    </>
  );
}
