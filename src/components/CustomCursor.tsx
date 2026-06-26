import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    let animId: number;
    const animate = () => {
      smoothPos.current.x += (pos.current.x - smoothPos.current.x) * 0.12;
      smoothPos.current.y += (pos.current.y - smoothPos.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${smoothPos.current.x}px`;
        cursorRef.current.style.top = `${smoothPos.current.y}px`;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    const interactiveEls = document.querySelectorAll('button, a, [role="button"], input, textarea');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    document.addEventListener('mousemove', move);

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(animId);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <Box
        ref={cursorRef}
        sx={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? 48 : 36,
          height: isHovering ? 48 : 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(255,107,53,0.6)',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
          mixBlendMode: 'difference',
          display: { xs: 'none', md: 'block' },
        }}
      />
      {/* Inner dot */}
      <Box
        ref={dotRef}
        sx={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: '#FF6B35',
          transition: 'opacity 0.2s ease',
          display: { xs: 'none', md: 'block' },
        }}
      />
    </>
  );
}
