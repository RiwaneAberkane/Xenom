import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Finale.css';

gsap.registerPlugin(ScrollTrigger);

export default function Finale() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return undefined;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            /* ========================================
               DESKTOP
            ======================================== */

            mm.add('(min-width: 801px)', () => {
                /* GIANT X */

                gsap.fromTo(
                    '.finale__x-line--one',
                    {
                        rotation: 32,
                        xPercent: -30,
                    },
                    {
                        rotation: 45,
                        xPercent: 0,

                        scrollTrigger: {
                            trigger: '.finale__hero',
                            start: 'top 85%',
                            end: 'center center',
                            scrub: 1.5,
                        },
                    },
                );

                gsap.fromTo(
                    '.finale__x-line--two',
                    {
                        rotation: -32,
                        xPercent: 30,
                    },
                    {
                        rotation: -45,
                        xPercent: 0,

                        scrollTrigger: {
                            trigger: '.finale__hero',
                            start: 'top 85%',
                            end: 'center center',
                            scrub: 1.5,
                        },
                    },
                );

                /* EYEBROW */

                gsap.from('.finale__eyebrow', {
                    opacity: 0,
                    y: 15,

                    scrollTrigger: {
                        trigger: '.finale__hero',
                        start: 'top 72%',
                    },

                    duration: 0.8,
                    ease: 'power3.out',
                });

                /* TITLE */

                gsap.from('.finale__title-line > span', {
                    yPercent: 115,

                    scrollTrigger: {
                        trigger: '.finale__title',
                        start: 'top 82%',
                    },

                    duration: 1.15,
                    stagger: 0.1,

                    ease: 'power4.out',
                });

                /* DESCRIPTION */

                gsap.from('.finale__description', {
                    opacity: 0,
                    y: 20,

                    scrollTrigger: {
                        trigger: '.finale__description',
                        start: 'top 90%',
                    },

                    duration: 0.9,
                    ease: 'power3.out',
                });

                /* CTA */

                gsap.from('.finale__cta', {
                    opacity: 0,
                    y: 20,

                    scrollTrigger: {
                        trigger: '.finale__cta',
                        start: 'top 92%',
                    },

                    duration: 0.9,
                    ease: 'power3.out',
                });

                /* FOOTER */

                gsap.from('.finale__footer', {
                    opacity: 0,
                    y: 30,

                    scrollTrigger: {
                        trigger: '.finale__footer',
                        start: 'top 90%',
                    },

                    duration: 1,
                    ease: 'power3.out',
                });
            });

            /* ========================================
               MOBILE
            ======================================== */

            mm.add('(max-width: 800px)', () => {
                gsap.from('.finale__hero-content', {
                    opacity: 0,
                    y: 30,

                    scrollTrigger: {
                        trigger: '.finale__hero',
                        start: 'top 82%',
                    },

                    duration: 1,
                    ease: 'power3.out',
                });

                gsap.from('.finale__footer', {
                    opacity: 0,
                    y: 25,

                    scrollTrigger: {
                        trigger: '.finale__footer',
                        start: 'top 90%',
                    },

                    duration: 0.9,
                    ease: 'power3.out',
                });
            });

            return () => mm.revert();
        }, section);

        return () => ctx.revert();
    }, []);

    /* ========================================
       BACK TO TOP
    ======================================== */

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <section
            ref={sectionRef}
            className="finale"
            id="finale"
        >
            {/* ======================================
          CLOSING HERO
      ====================================== */}

            <div className="finale__hero">

                {/* GIANT X */}

                <div
                    className="finale__x"
                    aria-hidden="true"
                >
                    <span className="finale__x-line finale__x-line--one" />

                    <span className="finale__x-line finale__x-line--two" />
                </div>

                {/* ======================================
            TOP
        ====================================== */}

                <div className="finale__top">
                    <div className="finale__index">
                        <span>06</span>

                        <span className="finale__index-line" />

                        <span>XENOM</span>
                    </div>

                    <span className="finale__code">
                        MMXXVI / CONCEPT 001
                    </span>
                </div>

                {/* ======================================
            CONTENT
        ====================================== */}

                <div className="finale__hero-content">
                    <span className="finale__eyebrow">
                        THE END IS ONLY THE BEGINNING
                    </span>

                    <h2 className="finale__title">
                        <span className="finale__title-line">
                            <span>NOT MADE</span>
                        </span>

                        <span className="finale__title-line">
                            <span>TO FOLLOW.</span>
                        </span>

                        <span className="finale__title-line finale__title-line--brand">
                            <span>
                                XENOM
                                <span className="finale__dot">.</span>
                            </span>
                        </span>
                    </h2>

                    {/* ACTION */}

                    <div className="finale__action">
                        <p className="finale__description">
                            Beyond convention.
                            <br />
                            Beyond expectation.
                            <br />
                            Beyond motion.
                        </p>

                        <button
                            className="finale__cta"
                            type="button"
                            onClick={scrollToTop}
                        >
                            <span>ENTER THE FUTURE</span>

                            <span>↑</span>
                        </button>
                    </div>
                </div>

                {/* ======================================
            HERO BOTTOM
        ====================================== */}

                <div className="finale__hero-bottom">
                    <span>XN / 001</span>

                    <span>BEYOND MOTION</span>
                </div>
            </div>

            {/* ======================================
          FOOTER
      ====================================== */}

            <footer className="finale__footer">

                {/* ======================================
            FOOTER MAIN
        ====================================== */}

                <div className="finale__footer-main">

                    {/* BRAND */}

                    <div className="finale__brand">
                        <a
                            className="finale__brand-name"
                            href="#hero"
                            aria-label="Xenom - Home"
                        >
                            <span>X</span>

                            <span>XENOM</span>
                        </a>

                        <p>
                            MORE THAN A CAR.
                            <br />
                            A STATE OF MIND.
                        </p>
                    </div>

                    {/* ====================================
              NAVIGATION
          ==================================== */}

                    <nav
                        className="finale__nav"
                        aria-label="Footer navigation"
                    >
                        <a href="#performance">
                            PERFORMANCE
                        </a>

                        <a href="#design">
                            DESIGN
                        </a>

                        <a href="#experience">
                            EXPERIENCE
                        </a>

                        <a href="#machine">
                            THE MACHINE
                        </a>
                    </nav>

                    {/* CODE */}

                    <div className="finale__footer-code">
                        <span>XENOM</span>

                        <span>MMXXVI</span>
                    </div>
                </div>

                {/* ======================================
            FOOTER BOTTOM
        ====================================== */}

                <div className="finale__footer-bottom">
                    <span>
                        © 2026 XENOM — CONCEPT PROJECT
                    </span>

                    <button
                        type="button"
                        onClick={scrollToTop}
                    >
                        BACK TO TOP

                        <span>↑</span>
                    </button>

                    <span>
                        BUILT FOR MORE
                    </span>
                </div>
            </footer>
        </section>
    );
}