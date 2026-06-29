import React, { useEffect } from 'react';

export default function CursorCanvas() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.left = mouseX - 6 + 'px';
        cursor.style.top = mouseY - 6 + 'px';
      }
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isInteractive = target.closest('a, button, [role="button"], .cursor-pointer') || 
                            (target.style && target.style.cursor === 'pointer') ||
                            (window.getComputedStyle(target).cursor === 'pointer');
      
      if (isInteractive) {
        if (cursor) cursor.style.transform = 'scale(1.5)';
        if (ring) {
          ring.style.transform = 'scale(1.5)';
          ring.style.borderColor = '#D4A017';
          ring.style.backgroundColor = 'rgba(212,160,23,0.1)';
        }
      } else {
        if (cursor) cursor.style.transform = 'scale(1)';
        if (ring) {
          ring.style.transform = 'scale(1)';
          ring.style.borderColor = 'rgba(212,160,23,0.5)';
          ring.style.backgroundColor = 'transparent';
        }
      }
    };

    const onMouseDown = () => {
      if (cursor) cursor.style.transform = 'scale(0.8)';
      if (ring) ring.style.transform = 'scale(0.8)';
    };

    const onMouseUp = (e) => {
      onMouseOver(e);
    };

    const animateRing = () => {
      ringX += (mouseX - ringX - 18) * 0.12;
      ringY += (mouseY - ringY - 18) * 0.12;
      if (ring) {
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
      }
      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    animateRing();

    // Kolam canvas pattern
    const canvas = document.getElementById('kolam-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
      resize();
      window.addEventListener('resize', resize);

      const drawKolam = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const cols = Math.ceil(canvas.width / 80) + 1;
        const rows = Math.ceil(canvas.height / 80) + 1;
        ctx.strokeStyle = 'rgba(212,160,23,0.15)';
        ctx.lineWidth = 0.5;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = c * 80;
            const y = r * 80;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(212,160,23,0.2)';
            ctx.fill();
          }
        }
      };
      drawKolam();
    }

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      <canvas id="kolam-canvas"></canvas>
    </>
  );
}
