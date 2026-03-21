import { AWARDS } from '../data/portfolioData';

export default function AwardsSection() {
  return (
    <section className="section" id="awards" aria-labelledby="awards-heading" role="region">
      <h2 id="awards-heading">Awards &amp; Activities</h2>
      <ul className="award-list awards-list">
        {AWARDS.map((award) => (
          <li className="award-item" key={award.title}>
            <div className="award-main"><strong>{award.title}</strong></div>
            <div className="award-meta">{award.meta}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
