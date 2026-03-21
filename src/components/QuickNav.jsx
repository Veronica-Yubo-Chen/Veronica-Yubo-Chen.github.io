import { useActiveSection } from '../hooks/useActiveSection';
import { NAV_SECTIONS } from '../data/portfolioData';

export default function QuickNav() {
  const activeId = useActiveSection();

  return (
    <nav className="quick-nav" aria-label="Section navigation" role="navigation">
      {NAV_SECTIONS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`qn-link${activeId === id ? ' active' : ''}`}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
    </nav>
  );
}
