import classNames from "classnames";
import "./BaseCard.css";
import { useState } from "react";

function BaseCard({ title, image, desc }) {
  const [active, setActive] = useState(false);

  const buttonStyles = {
    background: `${active ? "#eadb4c" : "#4483bf"}`,
    cursor: "pointer",
    border: "0",
    borderRadius: `50%`,
    padding: `4px`,
    transition: `all 0.3s easy`,
  };

  return (
    <div className={classNames("card", { active })}>
      <h3 className={classNames("card-title", { active })}>{title}</h3>
      <img className="card-img" src={image} alt={title} />
      <p className={classNames("card-description", { active })}>{desc}</p>
      <button onClick={() => setActive(!active)} style={buttonStyles}>
        🩷
      </button>
    </div>
  );
}

export default BaseCard;
