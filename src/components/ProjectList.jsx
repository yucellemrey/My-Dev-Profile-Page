import React from "react";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import "../styles/projectList.css";

const ProjectList = () => {
  const projects = useSelector((state) => state.projects.projects);

  return (
    <>
      <h1 className="project-list-title">Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
