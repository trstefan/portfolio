import styles from "../styles/ProjectCard.module.css";
import { BiWorld } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.project__card}>
      <div className={styles.project__card__info}>
        {" "}
        <h2 className={styles.project__title}>{project.name}</h2>
        <hr></hr>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.sites__links}>
          <ul>
            <li>
              <a href={project.source_code}>
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href={project.demo}>
                <BiWorld />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default ProjectCard;
