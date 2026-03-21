export default function SummarySection() {
  return (
    <section className="section" id="summary" aria-labelledby="summary-heading" role="region">
      <h2 id="summary-heading">Professional Summary</h2>
      <div className="summary-card">
        <p>
          Graduate AI/ML Engineer at <strong>Rio Tinto</strong> with <strong>3 delivered rotations</strong>{' '}
          across software engineering, optimisation R&amp;D, and applied ML. Currently shipping{' '}
          <span className="hl">production LLM systems</span> on <strong>Azure</strong> — from{' '}
          RAG pipelines and agentic workflows to evaluation infrastructure and CI/CD quality gates —{' '}
          serving 200+ internal users.
        </p>
        <p>
          Backed by an <strong>MPhil</strong> in uncertainty-aware medical imaging AI, 3 published papers,{' '}
          and a First Class Honours software engineering degree. I combine{' '}
          <span className="hl">research rigour with delivery discipline</span> to build ML products{' '}
          that are measurable, traceable, and maintainable.
        </p>
      </div>
    </section>
  );
}
