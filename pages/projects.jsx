import React from "react";
import { fetchProjects } from "./api/projectsFuctions";
import ProjectCard from "@/components/ProjectCard";
import styles from "../styles/Projects.module.css";

const ProjectPage = ({ projects }) => {
  return (
    <div>
      <h1 className={styles.page__title}>Projects</h1>
      <hr></hr>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const projects = fetchProjects();

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectPage;
