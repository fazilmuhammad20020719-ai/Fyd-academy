import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  // We keep state for the React DOM elements (the dot)
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const canvasRef = useRef(null);
  const dotRef = useRef(null);

  const mouse = useRef({ x: -100, y: -100 });
  const points = useRef([]);
  const maxPoints = 30;

  // NEW: We add a ref to track hover status specifically for the canvas loop
  const isHoveringRef = useRef(false);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const renderCursor = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(calc(${mouse.current.x}px - 50%), calc(${mouse.current.y}px - 50%))`;
      }

      points.current.push({ x: mouse.current.x, y: mouse.current.y });

      if (points.current.length > maxPoints) {
        points.current.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (points.current.length > 1) {
        for (let i = 0; i < points.current.length - 1; i++) {
          const p1 = points.current[i];
          const p2 = points.current[i + 1];
          const opacity = i / points.current.length;

          ctx.beginPath();
          ctx.globalAlpha = opacity;
          ctx.lineWidth = 3;

          // FIX: Use the ref here instead of the state variable!
          ctx.strokeStyle = isHoveringRef.current ? '#fa4616' : '#2d2d2d';

          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(renderCursor);
    };
    renderCursor();

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      points.current = [];
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);           // Update DOM
        isHoveringRef.current = true;  // Update Canvas Loop
      } else {
        setIsHovering(false);          // Update DOM
        isHoveringRef.current = false; // Update Canvas Loop
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    document.body.style.cursor = 'none';

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, []); // Empty array is now perfectly safe!

  if (window.innerWidth <= 768) return null;

  return (
    <>
      <style>{`
        @media (min-width: 769px) {
          * { cursor: none !important; }
        }

        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          background-color: #fa4616;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
        }

        .cursor-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 9998;
          transition: opacity 0.3s ease;
        }
      `}</style>

      <canvas
        ref={canvasRef}
        className="cursor-canvas"
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          width: isHovering ? '32px' : '20px',
          height: isHovering ? '32px' : '20px',
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
}