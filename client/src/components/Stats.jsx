import React, { useEffect, useRef } from 'react';

const stats = [
  { target: 1400, suffix: '+', label: 'Students Trained' },
  { target: 750,  suffix: '+', label: 'Businesses Served' },
  { target: 150,  suffix: '+', label: 'Students Placed' },
  { target: 4.8,  suffix: '★', label: 'Google Rating', isFloat: true },
  { target: 7,    suffix: '',  label: 'Active Brands' },
  { target: 14,   suffix: '+ Yrs', label: 'Experience' },
];

function animateCount(el, target, suffix, isFloat) {
  const duration = 1800;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = isFloat
      ? (eased * target).toFixed(1)
      : Math.floor(eased * target);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Stats() {
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const { target, suffix, isFloat } = stats[i];
            animateCount(el, target, suffix, isFloat);
            obs.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <span
              className="stat-num"
              ref={(el) => (refs.current[i] = el)}
            >
              0{s.suffix}
            </span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
