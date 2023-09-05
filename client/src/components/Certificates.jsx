export default function Certificates({ linkDoc, src, text }) {
  return (
    <>
      <div className="proyecto">
        <a href={linkDoc} target="_blank" rel="noreferrer">
          <div className="overlay"></div>
          <img src={src} alt="" />
          <div className="info">
            <h4>Certificado</h4>
            <p>{text}</p>
          </div>
        </a>
      </div>
    </>
  );
}
