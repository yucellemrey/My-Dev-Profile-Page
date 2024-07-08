import React from "react";
import Skill from "./Skill";
import { useSelector } from "react-redux";

function SkillList() {
  const skills = useSelector((state) => state.skills.skills);
  return (
    <div>
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </div>
  );
}

export default SkillList;
