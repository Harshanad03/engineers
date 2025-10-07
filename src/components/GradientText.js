import React, { useEffect, useRef } from 'react';

const GradientText = ({ 
  children, 
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"], 
  animationSpeed = 3, 
  showBorder = false, 
  className = "" 
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .gradient-text {
        background: linear-gradient(-45deg, ${colors.join(', ')});
        background-size: 400% 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradient-shift ${animationSpeed}s ease infinite;
        display: inline-block;
        line-height: 1.2;
        padding-bottom: 0.1em;
      }
      
      .gradient-text-border {
        border: 2px solid;
        border-image: linear-gradient(-45deg, ${colors.join(', ')}) 1;
        border-image-slice: 1;
      }
    `;
    
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [colors, animationSpeed]);

  return (
    <span 
      ref={textRef}
      className={`gradient-text ${showBorder ? 'gradient-text-border' : ''} ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;
