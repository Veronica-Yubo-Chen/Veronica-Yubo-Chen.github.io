import { PUBLICATIONS } from '../data/portfolioData';

export default function PublicationsSection() {
  return (
    <section className="section" id="publications" aria-labelledby="publications-heading" role="region">
      <h2 id="publications-heading">Selected Publications</h2>
      <ul className="pub-list publications-list">
        {PUBLICATIONS.map((pub) => (
          <li className="pub-item" key={pub.title}>
            <div className="pub-title">
              <a
                className="pub-link"
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open publication: ${pub.title}`}
              >
                {pub.title}
              </a>
            </div>
            <div className="pub-meta">{pub.venue}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
