import React from "react";
import projects from "../projects";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const projects = useSelector((state) => state.projects.projects);

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
