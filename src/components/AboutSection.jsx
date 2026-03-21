import { PILLARS, VALUES, METRICS, QUICK_FACTS, SIDEBAR_SKILLS, EXPLORING } from '../data/portfolioData';
import SidebarSkillGroup from './SidebarSkillGroup';

export default function AboutSection() {
  return (
    <section className="section about-compact about-balanced" id="about" aria-labelledby="about-heading" role="region">
      <h2 id="about-heading" className="about-heading-xl">About Me</h2>
      <div className="about-grid">
        <div className="about-content">
          {/* Intro card */}
          <div className="about-card about-intro" aria-labelledby="about-intro-heading">
            <h3 id="about-intro-heading" className="card-heading">Applied AI/ML Engineering with Research Depth</h3>
            <p className="lead-text">
              I am an Applied AI/ML Engineer at <strong>Rio Tinto</strong>, building{' '}
              <span className="hl">production LLM applications</span> across Azure and AWS — including
              retrieval-grounded Q&amp;A, document summarisation, agentic chat workflows, and interactive
              summary refinement — using <strong>React</strong>, async <strong>Python/Quart</strong>,{' '}
              <strong>Azure OpenAI</strong>, <strong>Azure AI Search</strong>, and <strong>LangGraph</strong>.
              My delivery focus is <span className="hl">reliability</span>: evaluation coverage, regression
              checks, tracing, and operational readiness.
            </p>
            <p>
              I bring a systems and optimisation background from <strong>C#/.NET</strong> and operations
              research work, plus an <strong>MPhil at QUT</strong> on uncertainty-aware medical imaging AI.
              I use this blend to ship practical ML systems that are{' '}
              <span className="hl">measurable, traceable, and maintainable</span>.
            </p>
          </div>

          {/* Pillars card */}
          <div className="about-card pillars-card" aria-labelledby="about-pillars-heading">
            <h4 id="about-pillars-heading" className="mini-heading">Core Pillars</h4>
            <div className="pillar-grid" role="list">
              {PILLARS.map((p) => (
                <div className="pillar" role="listitem" key={p.title}>
                  <div className="pillar-icon" aria-hidden="true">{p.icon}</div>
                  <div className="pillar-body">
                    <h5>{p.title}</h5>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values card */}
          <div className="about-card values-card" aria-labelledby="about-values-heading">
            <h4 id="about-values-heading" className="mini-heading">Core Values</h4>
            <div className="values-grid" role="list">
              {VALUES.map((v) => (
                <div className="value" role="listitem" key={v.text}>
                  <span className="v-icon" aria-hidden="true">{v.icon}</span>
                  <span className="v-text">{v.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics card */}
          <div className="about-card metrics-card" aria-label="Snapshot metrics">
            <ul className="metric-row" role="list">
              {METRICS.map((m) => (
                <li className="metric" role="listitem" key={m.label}>
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">
                    {m.label}<br /><small>{m.sub}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote card */}
          <div className="about-card quote-card" aria-labelledby="about-quote-heading">
            <h4 id="about-quote-heading" className="visually-hidden">Motivation</h4>
            <blockquote>
              <p>Research discipline becomes production engineering habits — so AI systems remain useful long after launch.</p>
            </blockquote>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="quick-facts-sidebar">
          <div className="facts-card">
            <h4>📊 Quick Facts</h4>
            <div className="facts-grid">
              {QUICK_FACTS.map((f) => (
                <div className="fact-item" key={f.label}>
                  <div className="fact-icon">{f.icon}</div>
                  <div className="fact-content">
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-value">{f.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar-skills-card">
            <h4>🛠️ Skills &amp; Technologies</h4>
            <div className="sidebar-skill-groups">
              {SIDEBAR_SKILLS.map((sg) => (
                <SidebarSkillGroup key={sg.group} group={sg.group} items={sg.items} />
              ))}
            </div>
            <div className="exploring-strip" aria-label="Currently Exploring">
              <h5>Exploring</h5>
              {EXPLORING.map((badge) => (
                <span className="explore-badge" key={badge}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
