import React, { useEffect } from "react";
import Skill from "./Skill";
import { useSelector, useDispatch } from "react-redux";
import "../styles/skills.css";
import { fetchSkills } from "../store/actions/skillActions";

function SkillList() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.skills);

  console.log(skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  if (!skills || skills.length === 0) {
    return <p>Loading...</p>;
  }

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
