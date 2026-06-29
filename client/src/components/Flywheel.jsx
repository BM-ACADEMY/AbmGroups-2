import React from 'react';
import { GraduationCap, Briefcase, Rocket, ArrowDown } from 'lucide-react';
import './Flywheel.css';

export default function Flywheel() {
  return (
    <section className="abm-fw" id="flywheel">
      <div className="fw-inner">
        <span className="fw-eyebrow">The ABM Flywheel</span>
        <h2 className="fw-title">
          One Group. <span className="gold">Your Entire Journey.</span>
        </h2>
        <p className="fw-sub">
          From learning to leadership — our brands grow with you at every stage.
        </p>
        {/* Wheel */}
        <div className="fw-wheelbox">
          <svg className="fw-wheel" viewBox="0 0 600 600" role="img" aria-labelledby="fwT fwD">
            <title id="fwT">The ABM Flywheel — Learn, Grow, Lead</title>
            <desc id="fwD">A continuous loop: Learn as a Student at BM Academy, Grow into a Professional with CoreTalents, Lead as an Entrepreneur with BM TechX — then inspire the next generation.</desc>
            <defs>
              <radialGradient id="fwNode" cx="50%" cy="34%" r="78%">
                <stop offset="0%" stopColor="#22222E" />
                <stop offset="100%" stopColor="#121219" />
              </radialGradient>
              <radialGradient id="fwHub" cx="50%" cy="40%" r="72%">
                <stop offset="0%" stopColor="#1E1E2A" />
                <stop offset="100%" stopColor="#0E0E16" />
              </radialGradient>
              <linearGradient id="fwComet" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(244,194,74,0)" />
                <stop offset="100%" stopColor="#F4C24A" />
              </linearGradient>
              <filter id="fwGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle className="ring" cx="300" cy="300" r="200" />
            <circle className="ring-soft" cx="300" cy="300" r="200" />
            {/* red loop-back: Lead -> Learn */}
            <path className="loop-arc" d="M127 200 A200 200 0 0 1 290 100" />
            {/* direction chevrons */}
            <path className="chev" d="M0,-9 L13,0 L0,9 Z" transform="translate(300,500) rotate(0)" />
            <path className="chev" d="M0,-9 L13,0 L0,9 Z" transform="translate(473,200) rotate(-120)" />
            <path className="chev is-red" d="M0,-9 L13,0 L0,9 Z" transform="translate(127,200) rotate(120)" />
            {/* travelling comet */}
            <g className="comet">
              <path d="M300 100 m-46 8 A48 48 0 0 1 300 100" fill="none" stroke="url(#fwComet)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="300" cy="100" r="8" fill="#F4C24A" filter="url(#fwGlow)" />
            </g>
            {/* hub */}
            <circle className="hubpulse" cx="300" cy="300" r="58" fill="none" stroke="rgba(224,165,46,.4)" strokeWidth="1.2" />
            <circle cx="300" cy="300" r="46" fill="url(#fwHub)" stroke="rgba(224,165,46,.45)" strokeWidth="1.4" />
            <text className="hub-text" x="300" y="297" textAnchor="middle" fontSize="22">ABM</text>
            <text className="hub-sub" x="300" y="316" textAnchor="middle" fontSize="8.5">GROUPS</text>
            {/* Nodes */}
            <g className="fnode">
              <circle className="node-circle" cx="127" cy="400" r="72" />
              <foreignObject x="91" y="348" width="72" height="36">
                <GraduationCap className="node-icon" size={32} />
              </foreignObject>
              <text className="node-verb" x="127" y="407" textAnchor="middle" fontSize="18">LEARN</text>
              <text className="node-role" x="127" y="425" textAnchor="middle" fontSize="11.5">Student</text>
              <text className="node-brand" x="127" y="441" textAnchor="middle" fontSize="10">BM Academy</text>
            </g>
            <g className="fnode">
              <circle className="node-circle" cx="473" cy="400" r="72" />
              <foreignObject x="437" y="345" width="72" height="36">
                <Briefcase className="node-icon" size={32} />
              </foreignObject>
              <text className="node-verb" x="473" y="407" textAnchor="middle" fontSize="18">GROW</text>
              <text className="node-role" x="473" y="425" textAnchor="middle" fontSize="11.5">Professional</text>
              <text className="node-brand" x="473" y="441" textAnchor="middle" fontSize="10">CoreTalents</text>
            </g>
            <g className="fnode">
              <circle className="node-circle" cx="300" cy="100" r="72" />
              <foreignObject x="264" y="45" width="72" height="36">
                <Rocket className="node-icon" size={32} />
              </foreignObject>
              <text className="node-verb" x="300" y="107" textAnchor="middle" fontSize="18">LEAD</text>
              <text className="node-role" x="300" y="125" textAnchor="middle" fontSize="11.5">Entrepreneur</text>
              <text className="node-brand" x="300" y="141" textAnchor="middle" fontSize="10">BM TechX</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
