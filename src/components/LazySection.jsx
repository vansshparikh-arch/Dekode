import React, { useRef, useState, useEffect } from 'react';

/**
 * Renders children only once the element has scrolled into view.
 * Until then it renders a lightweight invisible placeholder that
 * reserves the same amount of vertical space so the layout doesn't jump.
 */
const LazySection = ({ children, minHeight = '10rem', className = '', style = {}, rootMargin = '200px' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin } // start loading before it enters view
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {visible ? children : <div style={{ minHeight }} />}
    </div>
  );
};

export default LazySection;
