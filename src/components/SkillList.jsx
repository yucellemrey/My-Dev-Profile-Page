import React, { useEffect } from "react";
import Skill from "./Skill";
import { useDispatch, useSelector } from "react-redux";
import "../styles/skills.css";
import { fetchSkills } from "../store/actions/skillActions";

function SkillList() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

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
