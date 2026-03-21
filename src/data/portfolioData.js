export const NAV_SECTIONS = [
  'about', 'summary', 'skills', 'experience', 'education', 'publications', 'projects', 'awards',
];

export const CONTACT_LINKS = [
  { href: 'mailto:veronicaworkingnow@gmail.com', icon: '📧', label: 'Email Me' },
  { href: 'https://www.linkedin.com/in/yubo-chen-71a78a183/', icon: '💼', label: 'LinkedIn', external: true },
  { href: 'https://github.com/Veronica-Yubo-Chen', icon: '🔗', label: 'GitHub', external: true },
  { href: '/Yubo_Chen_Resume.pdf', icon: '📄', label: 'Download CV', download: true },
];

export const PILLARS = [
  { icon: '🚀', title: 'Production LLM Delivery', desc: 'Shipping internal GenAI tools with retrieval grounding, prompt control, and repeatable deployment workflows.' },
  { icon: '🔬', title: 'Evaluation and Trust', desc: 'Implementing Arize tracing and offline evaluations to monitor quality drift and support safe iteration.' },
  { icon: '🧭', title: 'Systems Thinking', desc: 'Connecting data flow, retrieval quality, CI/CD, and observability into reliable AI services.' },
  { icon: '🤝', title: 'Cross-domain Collaboration', desc: 'Working across engineering, data, and platform teams to move prototypes into usable products.' },
];

export const VALUES = [
  { icon: '✨', text: 'Clarity over complexity' },
  { icon: '🧪', text: 'Measured experimentation' },
  { icon: '🛠️', text: 'Practical craftsmanship' },
  { icon: '🌱', text: 'Sustainable growth' },
  { icon: '🤍', text: 'User empathy' },
  { icon: '📏', text: 'Evidence guided' },
];

export const METRICS = [
  { value: '3', label: 'Rotations Delivered', sub: 'Software · Optimisation · Applied ML' },
  { value: '3', label: 'Selected Publications', sub: 'AI & Medical Imaging' },
  { value: '2', label: 'Cloud Platforms', sub: 'Azure · AWS' },
  { value: '7', label: 'Courses Tutored', sub: 'Foundations → Machine Learning' },
];

export const QUICK_FACTS = [
  { icon: '🏢', label: 'Current Role', value: 'Graduate IS&T Engineer (Applied AI/ML)' },
  { icon: '☁️', label: 'Cloud Stack', value: 'Azure + AWS' },
  { icon: '📈', label: 'LLM Focus', value: 'RAG, Evaluation, Monitoring' },
  { icon: '🔬', label: 'Research Degree', value: 'MPhil (Biomedical Engineering & Computer Science)' },
  { icon: '🏛️', label: 'University', value: 'Queensland University of Technology' },
  { icon: '🌐', label: 'Languages', value: 'English, Mandarin' },
];

export const SIDEBAR_SKILLS = [
  { group: 'Programming', items: ['C# (.NET)', 'Python', 'Quart / FastAPI', 'Node.js', 'React.js', 'Django', 'JavaScript'] },
  { group: 'AI & Data', items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangGraph', 'RAG / Azure AI Search', 'Arize Phoenix', 'OpenTelemetry', 'Prompt Engineering', 'Data Pipelines'] },
  { group: 'Optimization', items: ['Linear Programming', 'Heuristic Algorithms', 'Operations Research', 'System Modelling'] },
  { group: 'Tools & Cloud', items: ['GitHub Actions', 'Docker', 'Azure (OpenAI · AI Search · Cosmos DB)', 'AWS', 'pytest / CI-CD'] },
];

export const EXPLORING = [
  'Agentic Workflows', 'LLM Evaluation', 'Vision Language Models', 'Vector Databases',
  'Grounded Generation', 'Optimization Engineering', 'Infra-as-Code', 'MLOps', 'DataOps',
];

export const SKILLS_GRID = [
  {
    title: 'LLM / GenAI',
    body: '<span class="hl">RAG</span> (chunking, reranking, hybrid retrieval), prompt engineering, guardrails, embeddings, vector search, summarisation, <span class="hl">grounded generation with citations</span>, agentic orchestration (<strong>LangGraph</strong>), intent classification, conditional routing. ML frameworks: <strong>PyTorch</strong>, <strong>TensorFlow</strong>, <strong>Hugging Face</strong>.',
  },
  {
    title: 'ML Engineering',
    body: '<strong>Arize Phoenix</strong> / <strong>OpenTelemetry</strong> tracing, <span class="hl">LLM-as-a-judge evaluation pipelines</span>, curated eval sets (normal, edge-case, adversarial), golden sets, regression testing, quality dashboards, prompt/version tracking.',
  },
  {
    title: 'Backend',
    body: 'Python, <strong>Quart</strong> (async), FastAPI, Node.js, REST APIs, <strong>pytest</strong>, data pipelines, unit/integration testing, C#/.NET.',
  },
  {
    title: 'Cloud / Infra',
    body: '<strong>Azure</strong> (OpenAI, AI Search, Blob Storage, Cosmos DB, Key Vault, Document Intelligence), <strong>AWS</strong>, Docker, GitHub Actions, managed identity, secrets management, observability (logs/metrics/traces).',
  },

  {
    title: 'Bonus & Languages',
    body: 'Linear programming, heuristic algorithms (LNS), operations research, <span class="hl">scheduling optimisation</span>, system modelling. Languages: English, Mandarin.',
  },
];

export const EXPERIENCE = [
  {
    title: 'Graduate IS&T Engineer (Applied AI/ML)',
    date: 'Aug 2024 – Present',
    location: 'Rio Tinto, Brisbane, Australia · On-site',
    tags: ['Python','React','Quart','Azure OpenAI','Azure AI Search','Arize Phoenix','OpenTelemetry','LangGraph','GitHub Actions','AWS','Cosmos DB','C#/.NET','Linear Programming'],
    rotations: [
      {
        heading: 'Rotation 3 — Applied ML / LLM Engineering',
        points: [
          'Built and productionised <span class="hl">internal LLM applications</span> serving <strong>200+ enterprise users</strong>, with a <strong>React</strong> frontend and async <strong>Python/Quart</strong> backend, covering <span class="hl">retrieval-grounded Q&A</span>, <span class="hl">document summarisation</span>, <span class="hl">agentic chat workflows</span>, and <span class="hl">interactive summary refinement</span>.',
          'Designed and implemented <span class="hl">RAG pipelines</span> using <strong>Azure OpenAI</strong> for query optimisation and answer generation, <strong>Azure AI Search</strong> for text, vector, and hybrid retrieval, and <span class="hl">grounded generation with citations</span>.',
          'Integrated <strong>Arize Phoenix</strong> / <strong>OpenTelemetry</strong> tracing across the <span class="hl">end-to-end LLM pipeline</span> — query optimisation, retrieval, vector embedding spans, and final answer generation — with detailed telemetry for prompts, model outputs, retrieved documents, latency, token usage, and user/session metadata.',
          'Built <span class="hl">offline evaluation pipelines</span> using <strong>LLM-as-a-judge</strong> with <strong>6 evaluator dimensions</strong> (retrieval relevance, hallucination/grounding, correctness, toxicity, helpfulness, refusal behaviour), tested against <span class="hl">curated prompt sets</span> of ~100 queries covering normal, edge-case, and adversarial/off-topic inputs.',
          'Developed <strong>GitHub Actions</strong> <span class="hl">CI/CD pipelines</span> for backend unit tests and AI quality checks on push/PR triggers, plus <span class="hl">scheduled monthly evaluation runs</span>, with <strong>Azure CLI</strong> and <span class="hl">managed identity authentication</span>, artifact export, and CI summaries for rapid regression review.',
          'Wrote <strong>pytest</strong>-based tests achieving <strong>~85% backend coverage</strong> for utilities, async chat logic, and tracing-integrated components, using mocking for <strong>OpenTelemetry</strong>, <strong>Arize</strong>, and external services to ensure reliability in <span class="hl">local and CI environments</span>.',
          'Built <strong>LangGraph</strong>-based orchestration for <span class="hl">agentic summary refinement workflows</span>, including <span class="hl">intent classification</span>, <span class="hl">conditional routing</span>, undo/restore flows, and section-level re-summarisation from raw source chapters.',
          'Worked with enterprise <strong>Azure</strong> data services including <strong>Azure Blob Storage</strong>, <strong>Cosmos DB</strong>, <strong>Azure Key Vault</strong>, and <strong>Azure Document Intelligence</strong>.',
          'Contributed to <span class="hl">production-readiness</span> through observability, evaluation infrastructure, <span class="hl">deployment quality gates</span>, and AI system reliability.',
        ],
      },
      {
        heading: 'Rotation 2 — Optimisation R&D',
        points: [
          'Prototyped <strong>linear programming</strong> and <span class="hl">heuristic approaches</span> for scheduling and optimisation problems.',
          'Benchmarked alternative methods comparing <span class="hl">runtime</span>, <span class="hl">solution quality</span>, and <span class="hl">maintainability</span>, achieving up to <strong>~40% runtime reduction</strong> on target scheduling scenarios.',
          'Productionised successful prototypes into maintainable code, building practical exposure to <strong>operations research</strong>, <span class="hl">LP-based approaches</span>, and <span class="hl">heuristic improvement workflows</span>.',
        ],
      },
      {
        heading: 'Rotation 1 — Software Engineering',
        points: [
          'Delivered features for a <span class="hl">long-horizon mine-planning optimisation</span> desktop application in <strong>C#/.NET</strong>, including statistical and linear optimisation components.',
          'Refactored core modules to improve <span class="hl">reliability</span>, <span class="hl">maintainability</span>, and <span class="hl">production code quality</span>.',
          'Expanded <span class="hl">automated unit-test coverage</span> for key production paths, building experience in <span class="hl">enterprise software delivery</span> for industrial optimisation systems.',
        ],
      },
    ],
  },
  {
    title: 'Research Assistant (Contract)',
    date: 'Apr 2023 – Jul 2023',
    location: 'QUT (Queensland University of Technology), Brisbane, Australia · On-site',
    tags: ['Python','Pandas','Data Cleaning','Web Scraping','Documentation'],
    points: [
      'Collected and consolidated datasets from <span class="hl">public repositories</span> and <span class="hl">targeted web sources</span>, ensuring ethical acquisition and compliance with usage terms.',
      'Cleaned and normalised <span class="hl">heterogeneous raw data</span> — format alignment, outlier handling, and schema reconciliation — improving <span class="hl">downstream analysis reliability</span> through reproducible preprocessing.',
      'Built <span class="hl">data-preparation scripts</span> and documented collection workflows, transformation logic, and <span class="hl">repeatable processing steps</span> to support transparency and reproducibility in research.',
    ],
  },
  {
    title: 'Sessional Academic',
    date: 'Feb 2024 – Present',
    location: 'QUT (Queensland University of Technology), Brisbane, Australia',
    tags: ['Teaching','Computational Thinking','Programming','Embedded Systems','Machine Learning','Mentoring'],
    points: [
      'Tutored across <strong>7 courses</strong> spanning foundational literacy to advanced technical topics: <strong>QUT001</strong> (Artificial Intelligence in the Real World), <strong>QUT005</strong> (Seeing Me, Seeing You: Skills for a Diverse World), <strong>QUT006</strong> (The Art of Pitching), <strong>QUT008</strong> (Think Like a Computer and Change the World), <strong>QUT009</strong> (Data Science for Society), <strong>CAB202</strong> (Microprocessors and Digital Systems), and <strong>CAB420</strong> (Machine Learning).',
      'Guided students through <span class="hl">AI literacy</span>, <span class="hl">computational thinking</span>, <span class="hl">data science ethics</span>, <span class="hl">embedded systems</span>, and <span class="hl">machine-learning fundamentals</span>, adapting teaching approach from introductory to advanced levels.',
      'Delivered tutorials, practical lab sessions, and marking across cohorts of varying experience, supporting students in <span class="hl">problem solving</span>, debugging, and coursework understanding.',
      'Provided <span class="hl">mentoring and guidance</span> in learning technical material while balancing industry and research commitments.',
    ],
  },
  {
    title: 'She Codes Plus — Professional Development',
    date: 'Sep 2025 – Present',
    location: 'She Codes Australia, Brisbane, Australia · Part-time',
    tags: ['HTML','CSS','Python','Django','React','Git/GitHub'],
    points: [
      'Awarded a competitive <strong>Rio Tinto</strong>-sponsored <span class="hl">full scholarship</span> for the She Codes Plus program — a 6-month part-time professional development course with <span class="hl">industry mentorship</span>.',
      'Built portfolio projects using <strong>HTML</strong>, <strong>CSS</strong>, <strong>Python</strong>, <strong>Django</strong>, and <strong>React</strong>.',
      'Strengthened <span class="hl">full-stack workflows</span> including <strong>Git/GitHub</strong> version control, deployment, database and API integration, debugging, and testing.',
    ],
  },
];

export const EDUCATION = [
  {
    title: 'Master of Philosophy (MPhil) – Biomedical Engineering & Computer Science',
    date: 'Aug 2023 – Sep 2025',
    location: 'Queensland University of Technology (QUT)',
    tags: ['Deep Learning','3D Point Clouds','Semi-Supervised','Uncertainty','Medical Imaging','Python'],
    researchTopic: {
      text: 'Deep Semi-Supervised Point Cloud-Based Models with Uncertainty Awareness for Efficient Abnormality Detection in 3D Medical Imaging',
      href: 'https://eprints.qut.edu.au/259810/',
    },
    awards: [
      {
        heading: 'Scholarship',
        items: [
          { title: 'Trustworthy Deep Learning for Biomedical Engineering – MPhil Scholarship', meta: 'Queensland University of Technology (QUT) · Aug 2023', desc: 'Competitive full-time MPhil scholarship supporting research into deep semi‑supervised, uncertainty‑aware 3D medical imaging models.' },
        ],
      },
    ],
  },
  {
    title: 'Bachelor of Engineering (Software) – First Class Honours',
    date: 'Feb 2019 – Jul 2023',
    location: 'Queensland University of Technology (QUT)',
    tags: ['Software Engineering','Algorithms','Systems Design','Data Structures','Machine Learning Foundations','Databases','Signals & Systems','Telecommunications','Embedded Systems','Electrical Engineering Foundations'],
    honours: 'Awarded First Class Honours for academic excellence and research achievement.',
    awards: [
      {
        heading: 'Awards',
        items: [
          { title: 'Bachelor of Engineering (Software Systems) – First Class Honours', meta: 'Faculty of Engineering, QUT · Jul 2023', desc: 'Conferred for sustained academic distinction and high-impact honours research outcomes.' },
          { title: 'Vacation Research Experience Scheme (2022/2023) – Best Poster Award', meta: 'Faculty of Engineering, QUT · Feb 2023', desc: 'Recognised for excellence in communicating methodology and applied impact in medical imaging AI research.' },
        ],
      },
    ],
  },
];

export const PUBLICATIONS = [
  { title: 'MEFF — A Model Ensemble Feature Fusion Approach for Tackling Adversarial Attacks in Medical Imaging', venue: 'Intelligent Systems with Applications · 2024', href: 'https://www.sciencedirect.com/science/article/pii/S2667305324000310' },
  { title: 'Reliable Deep Learning Framework for Ground Penetrating Radar Data to Locate Horizontal Variation in Levee Soil Compaction', venue: 'Engineering Applications of Artificial Intelligence · 2023', href: 'https://www.sciencedirect.com/science/article/pii/S0952197623018110' },
  { title: 'Learning Through Guidance: Knowledge Distillation for Endoscopic Image Classification', venue: 'arXiv · 2023', href: 'https://arxiv.org/abs/2308.08731' },
];

export const PROJECTS = [
  {
    title: 'AI-driven Endoscopic Abnormality Detection',
    date: 'Sep 2022 – Feb 2023',
    location: 'Student Researcher · QUT · Australia',
    tags: ['Python','PyTorch','Deep Learning','Medical Imaging','Image Classification','Data Curation','Evaluation'],
    intro: 'Developed an end-to-end pipeline for endoscopic abnormality classification using public datasets.',
    points: [
      'Curated <strong>KVASIR</strong> and <strong>NERTHUS</strong> into a <span class="hl">reproducible pipeline</span> with consistent preprocessing and labels.',
      'Trained <strong>ResNet</strong> baselines, <span class="hl">transfer-learning models</span>, and <span class="hl">knowledge-distillation</span> variants in <strong>PyTorch</strong>.',
      'Evaluated performance with <span class="hl">accuracy, F1, AUC</span>, and confusion matrices to improve class-wise reliability.',
    ],
  },
  {
    title: 'Autonomous UAV Target Detection & Air Quality Payload',
    date: 'Jul 2022 – Nov 2022',
    location: 'Student Researcher · QUT · Australia',
    tags: ['Python','YOLOv5','Edge Computing','SoC','Object Detection','Dataset Labelling','Team Project'],
    intro: 'Built a UAV payload for onboard target detection and air-quality sensing.',
    points: [
      'Deployed <strong>YOLOv5</strong> on a System-on-Chip device for <span class="hl">near real-time edge inference</span>.',
      'Built a <span class="hl">data collection and labelling workflow</span> to improve robustness across lighting and scale variation.',
      'Tested deployment scenarios and documented <span class="hl">hardware/software trade-offs</span> for the team.',
    ],
  },
  {
    title: 'Wildlife Species Recognition for Ecological Research',
    date: 'Jan 2022 – Nov 2022',
    location: 'Student Researcher · QUT · Australia',
    tags: ['Python','Representation Learning','K-Means','KNN','Clustering','Research Reporting'],
    intro: 'Investigated ML methods for wildlife species recognition in ecological datasets.',
    points: [
      'Compared <span class="hl">representation learning</span> and clustering baselines, including <strong>K-means</strong> and <strong>KNN</strong>-based methods.',
      'Documented <span class="hl">human-in-the-loop annotation</span> and retrieval considerations for practical deployment.',
      'Presented findings to academic stakeholders through <span class="hl">technical reports and presentations</span>.',
    ],
  },
  {
    title: 'Personal Portfolio — veronica-yubo-chen.github.io',
    date: 'Mar 2026',
    location: 'Personal Project',
    tags: ['React 19','Vite','CSS Custom Properties','GitHub Actions','GitHub Pages'],
    intro: 'Designed and built this portfolio site as a modern React SPA with a Little Prince–inspired theme.',
    points: [
      'Architected a <span class="hl">component-per-section</span> layout with a single <span class="hl">data-driven content layer</span>, enabling content updates without touching components.',
      'Built a <span class="hl">day/night theme toggle</span> with CSS custom properties and localStorage persistence.',
      'Created an <span class="hl">animated starfield</span> (140 stars + shooting stars) that respects <strong>prefers-reduced-motion</strong>.',
      'Deployed via <strong>GitHub Actions</strong> CI/CD pipeline to GitHub Pages with automated builds on every push.',
    ],
    href: 'https://github.com/Veronica-Yubo-Chen/Veronica-Yubo-Chen.github.io',
  },
];

export const AWARDS = [
  { title: 'MPhil Full Scholarship — Trustworthy Deep Learning for Biomedical Engineering', meta: 'Queensland University of Technology · Aug 2023' },
  { title: 'Best Poster Award — Vacation Research Experience Scheme (2022/2023)', meta: 'Faculty of Engineering, QUT · Feb 2023' },
  { title: 'Rio Tinto-Sponsored She Codes Plus Scholarship', meta: 'She Codes Australia · Brisbane · Sep 2025' },
];
