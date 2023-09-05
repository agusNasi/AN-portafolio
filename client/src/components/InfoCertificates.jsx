import Certificates from './Certificates';

export default function InfoCertificates() {
  return (
    <>
      <h3 className="titulo-seccion">Certificados</h3>
      <div className="fila">
        <Certificates
          linkDoc={'./docs/Certificado-full-stack.pdf'}
          src={'./img/Certificado full stack.png'}
          text={'Programación Full Stack'}
        />
        <Certificates
          linkDoc={'./docs/Certificado-Frontend.pdf'}
          src={'./img/Certificado Frontend.png'}
          text={'Programación Frontend React'}
        />
        <Certificates
          linkDoc={'./docs/Certificado-backend.pdf'}
          src={'./img/Certificado backend.png'}
          text={'Programación Backend'}
        />
      </div>
      <div className="fila">
        <Certificates
          linkDoc={'./docs/Certificado-Reactjs.pdf'}
          src={'./img/certificado-reactJS.jpg'}
          text={'React JS'}
        />
        <Certificates
          linkDoc={'./docs/Certificado-Js.pdf'}
          src={'./img/Certificado-JavaScript.jpg'}
          text={'JavaScript'}
        />
        <Certificates
          linkDoc={'./docs/Certificado-desarrollo-web.pdf'}
          src={'./img/Certificado-DesarrolloWeb.jpg'}
          text={'Desarrollo Web'}
        />
      </div>
    </>
  );
}
