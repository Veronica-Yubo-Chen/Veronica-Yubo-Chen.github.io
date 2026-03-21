import { PROJECTS } from '../data/portfolioData';

export default function ProjectsSection() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading" role="region">
      <h2 id="projects-heading">Featured Projects</h2>
      <div className="projects-timeline">
        {PROJECTS.map((proj) => (
          <div className="project-item" key={proj.title}>
            <h3>
              {proj.href
                ? <a href={proj.href} target="_blank" rel="noopener noreferrer">{proj.title}</a>
                : proj.title}
            </h3>
            <div className="date">{proj.date}</div>
            <div className="location">{proj.location}</div>
            <div className="project-tags" aria-label="Key technologies and domains">
              {proj.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
            <p className="project-intro">{proj.intro}</p>
            <ul className="project-points">
              {proj.points.map((p, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
