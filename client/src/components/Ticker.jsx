import React from 'react';

const tickerItems = [
  'கல்வி', 'ABM Groups', 'தொழில்', 'BM Academy', 'வளர்ச்சி', 'BM TechX',
  'சொத்து', 'Namma Pondy', 'படிப்பு', 'EduConsultants', 'வெற்றி',
  'BM Foundation', 'உணவு', "Dada's Kitchen", 'பயணம்', 'TravellersNeed',
  'வேலை', 'CoreTalents',
];

export default function Ticker() {
  // Duplicate for seamless loop
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item} <span className="ticker-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
