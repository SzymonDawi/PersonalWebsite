import { useState, useEffect } from 'react';

import { customBreakpoints } from '../constants';

function getBreakPoint() {
  const { innerWidth: width, innerHeight: height } = window;
  let xs, sm, md, lg, xl, xxl;


  if (width > customBreakpoints["xs"]) {
    xs = true;
  }

  if (width > customBreakpoints["sm"]) {
    sm = true;
  }

  if (width > customBreakpoints["md"]) {
    md = true;
  }

  if (width > customBreakpoints["lg"]) {
    lg = true;
  }

  if (width > customBreakpoints["xl"]) {
    xl = true;
  }

  if (width > customBreakpoints["xxl"]) {
    xxl = true;
  }

  return {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl
  };
}

export default function useCustomBreakPoints() {
    const [windowDimensions, setWindowDimensions] = useState(getBreakPoint());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getBreakPoint());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }