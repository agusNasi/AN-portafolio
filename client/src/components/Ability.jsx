export default function Ability({ title, percentage, id }) {
  return (
    <>
      <div className="skill">
        <div className="info">
          <p>
            <span className="lista"></span>
            {title}
          </p>
          <span className="porcentaje">{percentage}</span>
        </div>
        <div className="barra">
          <div id={id} className=""></div>
        </div>
      </div>
    </>
  );
}
