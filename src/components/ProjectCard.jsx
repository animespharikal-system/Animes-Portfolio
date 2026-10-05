import Icon from "./Icon.jsx";
import ProjectArtwork from "./ProjectArtwork.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectArtwork type={project.artwork} />
      <div className="project-card-content">
        <div className="project-topline">
          <span className="project-number">{project.number}</span>
          <span className="project-label">{project.label}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-note">{project.note}</p>
        <ul aria-label={`${project.name} technologies`} className="project-tags">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.repository} rel="noreferrer" target="_blank">
            <Icon name="github" size={16} />
            Source code
            <Icon name="external" size={13} />
          </a>
          {project.demo && (
            <a href={project.demo} rel="noreferrer" target="_blank">
              Live demo
              <Icon name="external" size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
