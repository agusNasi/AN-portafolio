export default function Projects({ linkPage, src, title, linkCode }) {
  return (
    <>
      <div className="proyecto">
        <a
          className="code-redirect"
          href={linkCode}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={linkPage} target="_blank" rel="noreferrer">
          <div className="overlay"></div>
          <img src={src} alt="" />
          <div className="info">
            <h4 className="proyecto-titulo">{title}</h4>
          </div>
        </a>
      </div>
    </>
  );
}
