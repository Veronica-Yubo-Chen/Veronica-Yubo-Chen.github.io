import { useState, useEffect, useRef, useCallback } from 'react';

const SECTION_IDS = ['about','summary','skills','experience','education','publications','projects','awards'];

export function useActiveSection() {
  const [activeId, setActiveId] = useState(null);
  const visibleRef = useRef({});

  const pickBest = useCallback(() => {
    let bestId = null;
    let bestRatio = 0;
    for (const id in visibleRef.current) {
      if (visibleRef.current[id] > bestRatio) {
        bestRatio = visibleRef.current[id];
        bestId = id;
      }
    }
    if (bestId) setActiveId(bestId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleRef.current[id] = entry.intersectionRatio;
          } else {
            delete visibleRef.current[id];
          }
        });
        requestAnimationFrame(pickBest);
      },
      { root: null, rootMargin: '-60px 0px -35% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // When scrolled near the bottom, activate the last visible section
    const handleScroll = () => {
      const nearBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 80;
      if (nearBottom) {
        // Find the last section that exists on the page
        for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
          const el = document.getElementById(SECTION_IDS[i]);
          if (el) { setActiveId(SECTION_IDS[i]); return; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Init on first load
    const timer = setTimeout(pickBest, 150);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pickBest]);

  return activeId;
}
