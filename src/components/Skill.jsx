import React from "react";
import "../styles/skillCard.css";

function Skill({ skill }) {
  return (
    <div className="skill-card">
      <h2 className="skill-title">{skill.name}</h2>
      <p className="skill-description">{skill.description}</p>
    </div>
  );
}

export default Skill;
