import { EXPERIENCE } from '../data/portfolioData';

function TagList({ tags, className = 'exp-tags' }) {
  return (
    <div className={className} aria-label="Key technologies">
      {tags.map((t) => <span key={t}>{t}</span>)}
    </div>
  );
}

function BulletList({ points }) {
  return (
    <ul>
      {points.map((p, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: p }} />
      ))}
    </ul>
  );
}

export default function ExperienceSection() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading" role="region">
      <h2 id="experience-heading">Professional Experience</h2>
      <div className="experience-timeline">
        {EXPERIENCE.map((exp) => (
          <div className="experience-item" key={exp.title}>
            <h3>{exp.title}</h3>
            <div className="date">{exp.date}</div>
            <div className="location">{exp.location}</div>
            <TagList tags={exp.tags} />

            {exp.rotations
              ? exp.rotations.map((rot) => (
                  <div key={rot.heading}>
                    <h4 className="rotation-heading">{rot.heading}</h4>
                    <BulletList points={rot.points} />
                  </div>
                ))
              : <BulletList points={exp.points} />
            }
          </div>
        ))}
      </div>
    </section>
  );
}
