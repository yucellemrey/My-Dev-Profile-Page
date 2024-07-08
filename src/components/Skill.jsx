import React from "react";

function Skill({ skill }) {
  return (
    <div>
      <h2>{skill.name}</h2>
      <p>{skill.description}</p>
    </div>
  );
}

export default Skill;
