import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul>
        {project.tools.map((tool, index) => (
          <ul key={index}>{tool}</ul>
        ))}
      </ul>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
        View Site
      </a>
    </div>
  );
};

export default ProjectCard;
