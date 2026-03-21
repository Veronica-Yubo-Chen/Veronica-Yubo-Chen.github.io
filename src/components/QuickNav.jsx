import { useEffect, useRef } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { NAV_SECTIONS } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

export default function QuickNav() {
  const activeId = useActiveSection();
  const linksRef = useRef(null);

  useEffect(() => {
    if (!activeId || !linksRef.current) return;
    const container = linksRef.current;
    const activeEl = container.querySelector('.qn-link.active');
    if (!activeEl) return;
    const scrollTarget = activeEl.offsetLeft - container.clientWidth / 2 + activeEl.offsetWidth / 2;
    container.scrollTo({ left: Math.max(0, scrollTarget), behavior: 'smooth' });
  }, [activeId]);

  return (
    <nav className="quick-nav" aria-label="Section navigation" role="navigation">
      <div className="qn-links" ref={linksRef}>
        {NAV_SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`qn-link${activeId === id ? ' active' : ''}`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
