import React, { useEffect } from "react";
import Skill from "./Skill";
import {  useSelector } from "react-redux";
import "../styles/skills.css";

function SkillList() {
 
  const skills = useSelector((state) => state.skills.skills);

  return (
    <>
      <h1 className="skills-title">Skills</h1>
      <div className="skill-list">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </>
  );
}

export default SkillList;
