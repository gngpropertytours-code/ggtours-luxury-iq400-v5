import { useEffect, useRef, useState } from 'react';

export default function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) =>
      entries.forEach((e) => setVisible(e.isIntersecting))
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
        transition: 'opacity 900ms ease, transform 900ms ease'
      }}
    >
      {children}
    </div>
  );
}
