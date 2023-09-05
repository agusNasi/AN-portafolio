export default function Skill({ src, title }) {
  return (
    <div className="skill-box">
      <div className="skill-title">
        <div className="img">
          <img src={src} alt="" className="skill-icon" />
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
