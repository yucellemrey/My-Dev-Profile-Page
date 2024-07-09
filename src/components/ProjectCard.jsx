import React from "react";
import "../styles/projectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-tools">
        {project.tools.map((tool, index) => (
          <span key={index} className="project-tool">
            {tool}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Github
        </a>
        <a
          href={project.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Site
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
