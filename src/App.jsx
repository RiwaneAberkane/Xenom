import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function App() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      },
    );
  }, []);

  return (
    <main>
      <section
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          textAlign: 'center',
        }}
      >
        <div ref={titleRef}>
          <p
            style={{
              color: 'var(--color-red)',
              fontSize: '12px',
              letterSpacing: '0.4em',
              marginBottom: '16px',
            }}
          >
            A NEW ERA BEGINS
          </p>

          <h1
            style={{
              fontSize: 'clamp(48px, 10vw, 140px)',
              fontWeight: '400',
              letterSpacing: '0.18em',
              lineHeight: '0.9',
            }}
          >
            XENOM
          </h1>

          <p
            style={{
              color: 'var(--color-grey)',
              marginTop: '24px',
              letterSpacing: '0.5em',
              fontSize: '11px',
            }}
          >
            BEYOND MOTION
          </p>
        </div>
      </section>
    </main>
  );
}