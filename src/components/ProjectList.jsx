import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useSelector, useDispatch } from "react-redux";
import "../styles/projectList.css";
import { fetchProjects } from "../store/actions/projectActions";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function ProjectList() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  console.log(projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (!projects || projects.length === 0) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

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
}

export default ProjectList;
