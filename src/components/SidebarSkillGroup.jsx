import { useState, useRef, useEffect, useCallback } from 'react';

export default function SidebarSkillGroup({ group, items }) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const listRef = useRef(null);

  const checkMobile = useCallback(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  const toggle = () => setExpanded((prev) => !prev);

  const listStyle = isMobile
    ? {
        maxHeight: expanded ? (listRef.current?.scrollHeight ?? 200) + 'px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }
    : { maxHeight: 'none' };

  return (
    <div className="sidebar-skill-group">
      <h5
        onClick={isMobile ? toggle : undefined}
        onKeyDown={isMobile ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } } : undefined}
        role={isMobile ? 'button' : undefined}
        tabIndex={isMobile ? 0 : undefined}
        aria-expanded={isMobile ? expanded : undefined}
      >
        {group}
        {isMobile && <span className="acc-indicator" aria-hidden="true">{expanded ? '–' : '+'}</span>}
      </h5>
      <ul ref={listRef} style={listStyle}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
