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
      { root: null, rootMargin: '0px 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Init on first load
    const timer = setTimeout(pickBest, 150);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pickBest]);

  return activeId;
}
