import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import experienceImage from '../assets/images/xenom-experience.png';

import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
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
                /* ----------------------------------------
                   ÉTATS INITIAUX
                ---------------------------------------- */

                gsap.set('.experience__background', {
                    scale: 1.12,
                    x: 0,
                    y: 0,
                });

                gsap.set('.experience__phase--precision', {
                    opacity: 1,
                    y: 0,
                });

                gsap.set(
                    [
                        '.experience__phase--control',
                        '.experience__phase--immersion',
                    ],
                    {
                        opacity: 0,
                        y: 30,
                    },
                );

                gsap.set('.experience__progress-fill', {
                    scaleX: 0.33,
                });

                /* ----------------------------------------
                   TIMELINE PRINCIPALE
                ---------------------------------------- */

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top top',

                        /*
                         * Scroll volontairement long :
                         * le dézoom doit respirer.
                         */
                        end: '+=320%',

                        /*
                         * Légère inertie pour éviter
                         * une animation trop mécanique.
                         */
                        scrub: 1.8,

                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                /* ========================================
                   CAMERA — DÉZOOM CONTINU
                ======================================== */

                timeline.to(
                    '.experience__background',
                    {
                        scale: 1,
                        x: 0,
                        y: 0,

                        duration: 10,
                        ease: 'none',
                    },
                    0,
                );

                /* ========================================
                   INTRO
                ======================================== */

                timeline.from(
                    '.experience__index',
                    {
                        opacity: 0,
                        x: -18,

                        duration: 0.8,
                        ease: 'power2.out',
                    },
                    0,
                );

                timeline.from(
                    '.experience__navigation',
                    {
                        opacity: 0,

                        duration: 0.7,
                        ease: 'power2.out',
                    },
                    0.15,
                );

                timeline.from(
                    '.experience__side-label',
                    {
                        opacity: 0,

                        duration: 0.7,
                        ease: 'power2.out',
                    },
                    0.15,
                );

                /* ========================================
                   PRECISION
                ======================================== */

                timeline.fromTo(
                    '.experience__phase--precision',
                    {
                        opacity: 0,
                        y: 25,
                    },
                    {
                        opacity: 1,
                        y: 0,

                        duration: 0.9,
                        ease: 'power3.out',
                    },
                    0.25,
                );

                /*
                 * Petit temps de lecture avant
                 * la transition suivante.
                 */

                timeline.to(
                    '.experience__phase--precision',
                    {
                        opacity: 1,

                        duration: 1,
                    },
                    1.15,
                );

                /* ========================================
                   PRECISION → CONTROL
                ======================================== */

                timeline.to(
                    '.experience__phase--precision',
                    {
                        opacity: 0,
                        y: -18,

                        duration: 1.1,
                        ease: 'power2.inOut',
                    },
                    2.15,
                );

                /*
                 * CONTROL commence avant que PRECISION
                 * ait totalement disparu :
                 * vrai crossfade.
                 */

                timeline.to(
                    '.experience__phase--control',
                    {
                        opacity: 1,
                        y: 0,

                        duration: 1.2,
                        ease: 'power2.out',
                    },
                    2.65,
                );

                timeline.to(
                    '.experience__progress-fill',
                    {
                        scaleX: 0.66,

                        duration: 1.15,
                        ease: 'power2.inOut',
                    },
                    2.45,
                );

                timeline.to(
                    '.experience__counter-current',
                    {
                        innerText: 2,

                        duration: 0.01,

                        snap: {
                            innerText: 1,
                        },
                    },
                    2.85,
                );

                /*
                 * Temps de lecture CONTROL.
                 */

                timeline.to(
                    '.experience__phase--control',
                    {
                        opacity: 1,

                        duration: 1.5,
                    },
                    3.85,
                );

                /* ========================================
                   CONTROL → IMMERSION
                ======================================== */

                timeline.to(
                    '.experience__phase--control',
                    {
                        opacity: 0,
                        y: -18,

                        duration: 1.1,
                        ease: 'power2.inOut',
                    },
                    5.35,
                );

                timeline.to(
                    '.experience__phase--immersion',
                    {
                        opacity: 1,
                        y: 0,

                        duration: 1.25,
                        ease: 'power2.out',
                    },
                    5.9,
                );

                timeline.fromTo(
                    '.experience__statement-line > span',
                    {
                        yPercent: 105,
                    },
                    {
                        yPercent: 0,

                        duration: 1.1,
                        stagger: 0.08,

                        ease: 'power3.out',
                    },
                    5.95,
                );

                timeline.to(
                    '.experience__progress-fill',
                    {
                        scaleX: 1,

                        duration: 1.15,
                        ease: 'power2.inOut',
                    },
                    5.75,
                );

                timeline.to(
                    '.experience__counter-current',
                    {
                        innerText: 3,

                        duration: 0.01,

                        snap: {
                            innerText: 1,
                        },
                    },
                    6.05,
                );

                /* ========================================
                   RESPIRATION FINALE
                ======================================== */

                timeline.to(
                    '.experience__phase--immersion',
                    {
                        opacity: 1,

                        duration: 2,
                    },
                    7.2,
                );
            });

            /* ========================================
               MOBILE
            ======================================== */

            mm.add('(max-width: 800px)', () => {
                gsap.from('.experience__mobile-index', {
                    scrollTrigger: {
                        trigger: '.experience__mobile',
                        start: 'top 88%',
                    },

                    opacity: 0,
                    x: -18,

                    duration: 0.7,
                    ease: 'power3.out',
                });

                gsap.from('.experience__mobile-heading', {
                    scrollTrigger: {
                        trigger: '.experience__mobile-heading',
                        start: 'top 88%',
                    },

                    opacity: 0,
                    y: 25,

                    duration: 0.9,
                    ease: 'power3.out',
                });

                gsap.from('.experience__visual', {
                    scrollTrigger: {
                        trigger: '.experience__visual',
                        start: 'top 88%',
                    },

                    opacity: 0,
                    y: 25,

                    duration: 1,
                    ease: 'power3.out',
                });

                gsap.from('.experience__mobile-item', {
                    scrollTrigger: {
                        trigger: '.experience__mobile-list',
                        start: 'top 90%',
                    },

                    opacity: 0,
                    y: 18,

                    duration: 0.7,
                    stagger: 0.12,

                    ease: 'power3.out',
                });
            });

            return () => mm.revert();
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="experience"
            id="experience"
        >
            {/* ======================================
          DESKTOP
      ====================================== */}

            <div className="experience__desktop">
                {/* BACKGROUND */}

                <div
                    className="experience__background"
                    style={{
                        backgroundImage: `url(${experienceImage})`,
                    }}
                />

                <div
                    className="experience__shade"
                    aria-hidden="true"
                />

                {/* INDEX */}

                <div className="experience__index">
                    <span>04</span>

                    <span className="experience__index-line" />

                    <span>EXPERIENCE</span>
                </div>

                {/* PHASES */}

                <div className="experience__phases">
                    {/* 01 */}

                    <div className="experience__phase experience__phase--precision">
                        <span className="experience__phase-code">
                            01 / PRECISION
                        </span>

                        <h2>
                            PRECISION
                            <span className="experience__dot">.</span>
                        </h2>

                        <p>
                            Every input.
                            <br />
                            Instantly understood.
                        </p>
                    </div>

                    {/* 02 */}

                    <div className="experience__phase experience__phase--control">
                        <span className="experience__phase-code">
                            02 / CONTROL
                        </span>

                        <h2>
                            CONTROL
                            <span className="experience__dot">.</span>
                        </h2>

                        <p>
                            Machine and driver.
                            <br />
                            Acting as one.
                        </p>
                    </div>

                    {/* 03 */}

                    <div className="experience__phase experience__phase--immersion">
                        <span className="experience__phase-code">
                            03 / IMMERSION
                        </span>

                        <div className="experience__statement">
                            <span className="experience__statement-line">
                                <span>BUILT</span>
                            </span>

                            <span className="experience__statement-line">
                                <span>AROUND</span>
                            </span>

                            <span className="experience__statement-line">
                                <span>
                                    YOU
                                    <span className="experience__dot">.</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* NAVIGATION */}

                <div className="experience__navigation">
                    <div className="experience__counter">
                        <span className="experience__counter-current">
                            1
                        </span>

                        <span>/</span>

                        <span>03</span>
                    </div>

                    <div className="experience__progress">
                        <span className="experience__progress-fill" />
                    </div>
                </div>

                {/* BOTTOM RIGHT */}

                <span className="experience__side-label">
                    HUMAN / MACHINE / INTERFACE
                </span>
            </div>

            {/* ======================================
          MOBILE
      ====================================== */}

            <div className="experience__mobile">
                {/* TOP */}

                <div className="experience__mobile-top">
                    <div className="experience__mobile-index">
                        <span>04</span>

                        <span />

                        <span>EXPERIENCE</span>
                    </div>

                    <span>XN / INT / 026</span>
                </div>

                {/* TITLE */}

                <div className="experience__mobile-heading">
                    <h2>
                        BUILT
                        <br />
                        AROUND
                        <br />
                        YOU<span>.</span>
                    </h2>

                    <p>
                        An environment designed around one thing:
                        the connection between driver and machine.
                    </p>
                </div>

                {/* IMAGE */}

                <div className="experience__visual">
                    <img
                        src={experienceImage}
                        alt="Xenom driver-focused cockpit"
                    />

                    <div
                        className="experience__visual-overlay"
                        aria-hidden="true"
                    />

                    <span>
                        DRIVER ENVIRONMENT / 01
                    </span>
                </div>

                {/* FEATURES */}

                <div className="experience__mobile-list">
                    <article className="experience__mobile-item">
                        <span>01</span>

                        <div>
                            <h3>PRECISION</h3>

                            <p>
                                Every input. Instantly understood.
                            </p>
                        </div>
                    </article>

                    <article className="experience__mobile-item">
                        <span>02</span>

                        <div>
                            <h3>CONTROL</h3>

                            <p>
                                Machine and driver. Acting as one.
                            </p>
                        </div>
                    </article>

                    <article className="experience__mobile-item">
                        <span>03</span>

                        <div>
                            <h3>IMMERSION</h3>

                            <p>
                                Nothing between you and the experience.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}