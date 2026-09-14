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
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top top',
                        end: '+=240%',
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                    },
                });

                /* ======================================
                   PHASE 01 — PRECISION
                ====================================== */

                timeline
                    .fromTo(
                        '.experience__background',
                        {
                            scale: 1.045,
                            xPercent: 0,
                        },
                        {
                            scale: 1,
                            xPercent: 0,
                            duration: 1,
                            ease: 'none',
                        },
                    )

                    .from(
                        '.experience__index',
                        {
                            opacity: 0,
                            x: -30,
                            duration: 0.35,
                            ease: 'power3.out',
                        },
                        0,
                    )

                    .from(
                        '.experience__phase--precision',
                        {
                            opacity: 0,
                            y: 30,
                            duration: 0.45,
                            ease: 'power3.out',
                        },
                        0.15,
                    )

                    .from(
                        '.experience__counter',
                        {
                            opacity: 0,
                            duration: 0.35,
                        },
                        0.2,
                    );

                /* ======================================
                   PHASE 02 — CONTROL
                ====================================== */

                timeline
                    .to(
                        '.experience__phase--precision',
                        {
                            opacity: 0,
                            y: -25,
                            duration: 0.35,
                        },
                        1.1,
                    )

                    .to(
                        '.experience__background',
                        {
                            scale: 1.035,
                            xPercent: -0.8,
                            duration: 0.9,
                            ease: 'none',
                        },
                        1.1,
                    )

                    .fromTo(
                        '.experience__phase--control',
                        {
                            opacity: 0,
                            y: 30,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.45,
                            ease: 'power3.out',
                        },
                        1.3,
                    )

                    .to(
                        '.experience__progress-fill',
                        {
                            scaleX: 0.66,
                            duration: 0.8,
                        },
                        1.25,
                    )

                    .to(
                        '.experience__counter-current',
                        {
                            innerText: 2,
                            duration: 0.01,
                            snap: {
                                innerText: 1,
                            },
                        },
                        1.3,
                    );

                /* ======================================
                   PHASE 03 — IMMERSION
                ====================================== */

                timeline
                    .to(
                        '.experience__phase--control',
                        {
                            opacity: 0,
                            y: -25,
                            duration: 0.35,
                        },
                        2.2,
                    )

                    /*
                     * On limite volontairement le zoom final.
                     * 1.06 au lieu de 1.11 :
                     * moins de perte de netteté sur grands écrans.
                     */
                    .to(
                        '.experience__background',
                        {
                            scale: 1.06,
                            xPercent: 0,
                            duration: 1,
                            ease: 'none',
                        },
                        2.15,
                    )

                    .to(
                        '.experience__red-glow',
                        {
                            opacity: 0.62,
                            duration: 0.8,
                        },
                        2.2,
                    )

                    .fromTo(
                        '.experience__phase--immersion',
                        {
                            opacity: 0,
                            y: 35,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            ease: 'power3.out',
                        },
                        2.4,
                    )

                    .fromTo(
                        '.experience__statement-line > span',
                        {
                            yPercent: 115,
                        },
                        {
                            yPercent: 0,
                            duration: 0.65,
                            stagger: 0.08,
                            ease: 'power3.out',
                        },
                        2.45,
                    )

                    .to(
                        '.experience__progress-fill',
                        {
                            scaleX: 1,
                            duration: 0.8,
                        },
                        2.3,
                    )

                    .to(
                        '.experience__counter-current',
                        {
                            innerText: 3,
                            duration: 0.01,
                            snap: {
                                innerText: 1,
                            },
                        },
                        2.4,
                    );
            });

            /* ========================================
               MOBILE
            ======================================== */

            mm.add('(max-width: 800px)', () => {
                gsap.from('.experience__mobile-index', {
                    scrollTrigger: {
                        trigger: '.experience__mobile',
                        start: 'top 85%',
                    },
                    opacity: 0,
                    x: -20,
                    duration: 0.7,
                    ease: 'power3.out',
                });

                gsap.from('.experience__mobile-heading', {
                    scrollTrigger: {
                        trigger: '.experience__mobile-heading',
                        start: 'top 85%',
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.9,
                    ease: 'power3.out',
                });

                gsap.from('.experience__visual', {
                    scrollTrigger: {
                        trigger: '.experience__visual',
                        start: 'top 88%',
                    },
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    ease: 'power3.out',
                });

                gsap.from('.experience__mobile-item', {
                    scrollTrigger: {
                        trigger: '.experience__mobile-list',
                        start: 'top 88%',
                    },
                    opacity: 0,
                    y: 22,
                    duration: 0.75,
                    stagger: 0.13,
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

                <div
                    className="experience__red-glow"
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
                    {/* PRECISION */}

                    <div className="experience__phase experience__phase--precision">
                        <span className="experience__phase-code">
                            01 / PRECISION
                        </span>

                        <h2>
                            PRECISION<span className="experience__dot">.</span>
                        </h2>

                        <p>
                            Every input.
                            <br />
                            Instantly understood.
                        </p>
                    </div>

                    {/* CONTROL */}

                    <div className="experience__phase experience__phase--control">
                        <span className="experience__phase-code">
                            02 / CONTROL
                        </span>

                        <h2>
                            CONTROL<span className="experience__dot">.</span>
                        </h2>

                        <p>
                            Machine and driver.
                            <br />
                            Acting as one.
                        </p>
                    </div>

                    {/* IMMERSION */}

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
                                    YOU<span className="experience__dot">.</span>
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

                {/* HEADING */}

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

                    <span>DRIVER ENVIRONMENT / 01</span>
                </div>

                {/* MOBILE PHASES */}

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