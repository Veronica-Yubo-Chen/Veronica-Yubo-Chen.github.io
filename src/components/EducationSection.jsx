import { EDUCATION } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section className="section" id="education" aria-labelledby="education-heading" role="region">
      <h2 id="education-heading">Education</h2>
      <div className="education-timeline">
        {EDUCATION.map((edu) => (
          <div className="education-item" key={edu.title}>
            <h3>{edu.title}</h3>
            <div className="date">{edu.date}</div>
            <div className="location">{edu.location}</div>
            <div className="edu-tags" aria-label="Key focus areas">
              {edu.tags.map((t) => <span key={t}>{t}</span>)}
            </div>

            {edu.researchTopic && (
              <p className="research-topic">
                <strong>Research Topic:</strong>{' '}
                <a
                  className="pub-link"
                  href={edu.researchTopic.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {edu.researchTopic.text}
                </a>
              </p>
            )}

            {edu.honours && (
              <p className="honours"><strong>Honours:</strong> {edu.honours}</p>
            )}

            {edu.awards?.map((awardGroup) => (
              <div className="edu-awards" key={awardGroup.heading}>
                <h4 className="award-heading">{awardGroup.heading}</h4>
                <ul className="award-list">
                  {awardGroup.items.map((item) => (
                    <li className="award-item" key={item.title}>
                      <div className="award-main"><strong>{item.title}</strong></div>
                      <div className="award-meta">{item.meta}</div>
                      {item.desc && <p className="award-desc">{item.desc}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
