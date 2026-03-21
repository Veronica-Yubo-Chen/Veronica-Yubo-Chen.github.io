import { SKILLS_GRID } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading" role="region">
      <h2 id="skills-heading">Core Skills</h2>
      <div className="skills-grid">
        {SKILLS_GRID.map((skill) => (
          <article className="skill-domain" key={skill.title}>
            <h3>{skill.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: skill.body }} />
          </article>
        ))}
      </div>
    </section>
  );
}
