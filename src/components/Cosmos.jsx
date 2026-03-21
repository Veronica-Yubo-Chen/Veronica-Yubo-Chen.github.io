import { useEffect, useRef } from 'react';

const STAR_COUNT = 140;

export default function Cosmos() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Generate stars
    const frag = document.createDocumentFragment();
    for (let i = 0; i < STAR_COUNT; i++) {
      const s = document.createElement('div');
      const size = (Math.random() * 2 + 1).toFixed(2) + 'px';
      s.className = 'star';
      s.style.setProperty('--sz', size);
      s.style.left = (Math.random() * 100).toFixed(3) + '%';
      s.style.top = (Math.random() * 100).toFixed(3) + '%';
      s.style.setProperty('--op', (Math.random() * 0.5 + 0.4).toFixed(2));
      s.style.setProperty('--twinkleDur', (Math.random() * 8 + 6).toFixed(2));
      s.style.setProperty('--twinkleDelay', (Math.random() * 8).toFixed(2));
      frag.appendChild(s);
    }
    container.appendChild(frag);

    // Shooting star scheduler
    function shoot() {
      const st = document.createElement('div');
      st.className = 'shooting-star';
      const x = Math.random() * window.innerWidth * 0.4 - 150;
      const y = Math.random() * window.innerHeight * 0.3 - 150;
      st.style.setProperty('--sx', x + 'px');
      st.style.setProperty('--sy', y + 'px');
      container.appendChild(st);
      setTimeout(() => st.remove(), 1900);
    }

    let interval = setInterval(shoot, 6500 + Math.random() * 3000);

    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    function handleRM() {
      if (rm.matches) {
        clearInterval(interval);
        interval = null;
      } else if (!interval) {
        interval = setInterval(shoot, 6500 + Math.random() * 3000);
      }
    }
    rm.addEventListener('change', handleRM);
    handleRM();

    return () => {
      clearInterval(interval);
      rm.removeEventListener('change', handleRM);
    };
  }, []);

  return (
    <div className="cosmos" aria-hidden="true" ref={containerRef}>
      <div className="planet planet-a" aria-hidden="true" />
      <div className="planet planet-b" aria-hidden="true" />
    </div>
  );
}
