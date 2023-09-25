import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';
import MySkills from './components/MySkills';
import Services from './components/Services';
import Abilities from './components/Abilities';
import InfoProjects from './components/InfoProjects';
import InfoCertificates from './components/InfoCertificates';
import FormContact from './components/FormContact';
import useIntersection from './useIntersection';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  const [elementoRefInicio, isIntersectingInicio] = useIntersection({
    threshold: '0.4',
  });
  const [elementoRefSobreMi, isIntersectingSobreMi] = useIntersection({
    threshold: '0.4',
  });
  const [elementoRefServicios, isIntersectingServicios] = useIntersection({
    threshold: '0.2',
  });
  const [elementoRefPortfolio, isIntersectingPortfolio] = useIntersection({
    threshold: '0.1',
  });
  const [elementoRefContacto, isIntersectingContacto] = useIntersection({
    threshold: '0.4',
  });

  //Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
  function seleccionar(link) {
    let opciones = document.querySelectorAll('#links  a');
    opciones[0].className = '';
    opciones[1].className = '';
    opciones[2].className = '';
    opciones[3].className = '';
    opciones[4].className = '';
    link.className = 'seleccionado';

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    let x = document.getElementById('nav');
    x.className = '';
  }

  //menu responsive
  function responsiveMenu() {
    let x = document.getElementById('nav');
    if (x.className === '') {
      x.className = 'responsive';
    } else {
      x.className = '';
    }
  }

  //animacion de las skills

  window.onscroll = function () {
    efectoHabilidades();
  };

  function efectoHabilidades() {
    let skills = document.getElementById('skills');
    let distacia_skills =
      window.innerHeight - skills.getBoundingClientRect().top;
    if (distacia_skills >= 300) {
      document.getElementById('html').classList.add('barra-progreso1');
      document.getElementById('js').classList.add('barra-progreso2');
      document.getElementById('reactJS').classList.add('barra-progreso3');
      document.getElementById('bd').classList.add('barra-progreso4');
    }
  }

  return (
    <>
      <section id="inicio" ref={elementoRefInicio}>
        <div className="contenido">
          <header>
            <div className="contenido-header">
              <h3>/AN/</h3>
              <nav id="nav" className="">
                <ul id="links">
                  <li>
                    <a
                      href="#inicio"
                      className={isIntersectingInicio ? 'seleccionado' : ''}
                      onClick={(ev) => seleccionar(ev.target)}
                    >
                      INICIO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sobremi"
                      className={isIntersectingSobreMi ? 'seleccionado' : ''}
                      onClick={(ev) => seleccionar(ev.target)}
                    >
                      SOBRE MI
                    </a>
                  </li>
                  <li>
                    <a
                      href="#servicios"
                      className={isIntersectingServicios ? 'seleccionado' : ''}
                      onClick={(ev) => seleccionar(ev.target)}
                    >
                      SERVICIOS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className={isIntersectingPortfolio ? 'seleccionado' : ''}
                      onClick={(ev) => seleccionar(ev.target)}
                    >
                      PORTFOLIO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contacto"
                      className={isIntersectingContacto ? 'seleccionado' : ''}
                      onClick={(ev) => seleccionar(ev.target)}
                    >
                      CONTACTO
                    </a>
                  </li>
                </ul>
              </nav>

              {/* iconos del menu responsive */}

              <div id="icono-nav" onClick={responsiveMenu}>
                <i className="fa-solid fa-bars"></i>
              </div>

              {/* iconos de las redes sociales */}
              <div className="redes">
                <a
                  href="https://www.linkedin.com/in/agust%C3%ADn-nasi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/agusNasi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="mailto:agustinnasi11@gmail.com">
                  <i className="fa-brands fa-google"></i>
                </a>
              </div>
            </div>
          </header>
          <div className="presentacion">
            <p className="bienvenida">Bienvenidos</p>
            <h2>
              Soy <span>Agustin Nasi</span>, Desarrollador full stack
            </h2>
            <p className="descripcion">
              Paso la mayor parte del tiempo escribiendo codigo limpio,
              escalable y amo lo que hago.
            </p>
            <a href="#portfolio">Ir a portafolio</a>
          </div>
        </div>
      </section>
      {/* Seccion sobre mi */}

      <section id="sobremi" ref={elementoRefSobreMi}>
        <div className="contenedor-foto">
          <img src="/img/img-perfil.jpg" alt="" />
        </div>
        <div className="sobremi">
          <p className="titulo-seccion">Sobre mí</p>
          <h2>
            Hola, soy <span>Agustín Nasi</span>
          </h2>
          <h3>Desarrollador Web full stack</h3>
          <p>
            Hola soy Agustín Nasi de Córdoba, Argentina. Tengo 21 años y me
            especializo en desarrollador MERN stack con orientación en backend.
            Apasionado por la música, me gusta crear retratos y universos
            alrededor de lo que escucho y siempre tengo curiosidad por aprender
            más sobre las nuevas tecnologías y la codificación creativa. Me
            siento tranquilamente confiado, naturalmente curioso y trabajo
            constantemente para mejorar mis habilidades.
          </p>
          <a href="./docs/CV_Agustin_Nasi.pdf" target="_blank" rel="noreferrer">
            Descargar CV.
          </a>
        </div>
      </section>

      <MySkills />

      {/* Seccion servicios */}

      <section id="servicios" ref={elementoRefServicios}>
        <Services />
      </section>

      {/* Seccion habilidades */}

      <div className="contenedor-skills" id="skills">
        <Abilities />
      </div>

      {/* Seccion portafolio */}

      <section id="portfolio" ref={elementoRefPortfolio}>
        <div className="proyectos">
          <InfoProjects />
        </div>

        {/* Seccion certificados  */}

        <div className="certificados">
          <InfoCertificates />
        </div>
      </section>

      {/* Seccion contacto  */}

      <section id="contacto" ref={elementoRefContacto}>
        <FormContact />
      </section>

      {/* Seccion footer */}

      <footer>
        <p>&copy; /AN/ Derechos Reservados - 2022</p>
        <div>
          <a
            href="https://www.linkedin.com/in/agust%C3%ADn-nasi/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/agusNasi"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:agustinnasi11@gmail.com">
            <i className="fa-brands fa-google"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
