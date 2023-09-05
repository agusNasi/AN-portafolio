export default function Service({ title, text, icon }) {
  return (
    <>
      <div className="servicio">
        <span className="icono">
          <i className={icon}></i>
        </span>
        <h4>{title}</h4>
        <hr />
        <ul className="servicios-tag">
          <li>Web</li>
          <li>Graphic</li>
          <li>SEO</li>
        </ul>
        <p>{text}</p>
      </div>
    </>
  );
}
