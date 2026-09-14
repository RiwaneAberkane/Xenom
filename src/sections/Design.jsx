import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bodyImage from '../assets/images/xenom-design-body.png';
import lightImage from '../assets/images/xenom-design-light.png';
import wheelImage from '../assets/images/xenom-design-wheel.png';

import './Design.css';

gsap.registerPlugin(ScrollTrigger);

export default function Design() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return undefined;

        const ctx = gsap.context(() => {
            /* ========================================
               INDEX
            ======================================== */

            gsap.from('.design__index', {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 82%',
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                ease: 'power3.out',
            });

            /* ========================================
               MAIN TITLE
            ======================================== */

            gsap.from('.design__title-line > span', {
                scrollTrigger: {
                    trigger: '.design__title',
                    start: 'top 82%',
                },
                yPercent: 115,
                duration: 1.1,
                stagger: 0.12,
                ease: 'power4.out',
            });

            /* ========================================
               INTRO
            ======================================== */

            gsap.from('.design__intro', {
                scrollTrigger: {
                    trigger: '.design__intro',
                    start: 'top 88%',
                },
                opacity: 0,
                y: 25,
                duration: 0.9,
                ease: 'power3.out',
            });

            /* ========================================
               IMAGE REVEALS
            ======================================== */

            const visuals = gsap.utils.toArray('.design__visual');

            visuals.forEach((visual) => {
                const image = visual.querySelector('.design__image');

                gsap.fromTo(
                    visual,
                    {
                        clipPath: 'inset(0 0 100% 0)',
                    },
                    {
                        scrollTrigger: {
                            trigger: visual,
                            start: 'top 88%',
                        },
                        clipPath: 'inset(0 0 0% 0)',
                        duration: 1.25,
                        ease: 'power4.inOut',
                    },
                );

                gsap.fromTo(
                    image,
                    {
                        scale: 1.12,
                    },
                    {
                        scrollTrigger: {
                            trigger: visual,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1,
                        },
                        scale: 1.02,
                        ease: 'none',
                    },
                );
            });

            /* ========================================
               LABELS
            ======================================== */

            gsap.from('.design__label', {
                scrollTrigger: {
                    trigger: '.design__gallery',
                    start: 'top 75%',
                },
                opacity: 0,
                y: 15,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power3.out',
            });

            /* ========================================
               FINAL STATEMENT
            ======================================== */

            gsap.from('.design__statement-line > span', {
                scrollTrigger: {
                    trigger: '.design__statement',
                    start: 'top 80%',
                },
                yPercent: 115,
                duration: 1.1,
                stagger: 0.12,
                ease: 'power4.out',
            });

            gsap.from('.design__statement-copy', {
                scrollTrigger: {
                    trigger: '.design__statement-copy',
                    start: 'top 90%',
                },
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: 'power3.out',
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="design"
            id="design"
        >
            {/* ======================================
          TOP
      ====================================== */}

            <div className="design__top">
                <div className="design__index">
                    <span>03</span>
                    <span className="design__index-line" />
                    <span>DESIGN</span>
                </div>

                <span className="design__code">
                    XN / FORM / 026
                </span>
            </div>

            {/* ======================================
          HEADING
      ====================================== */}

            <div className="design__heading">
                <h2 className="design__title">
                    <span className="design__title-line">
                        <span>SCULPTED</span>
                    </span>

                    <span className="design__title-line">
                        <span>
                            BY AIR<span className="design__dot">.</span>
                        </span>
                    </span>
                </h2>

                <div className="design__intro">
                    <span className="design__intro-line" />

                    <p>
                        Every line has a purpose.
                        <br />
                        Every surface, a function.
                    </p>
                </div>
            </div>

            {/* ======================================
          DESIGN GALLERY
      ====================================== */}

            <div className="design__gallery">

                {/* BODY */}

                <article className="design__item design__item--body">
                    <div className="design__visual design__visual--body">
                        <img
                            className="design__image"
                            src={bodyImage}
                            alt="Sculpted Xenom carbon bodywork"
                        />
                    </div>

                    <div className="design__label">
                        <span>FORM / 01</span>
                        <span>AERODYNAMIC SURFACE</span>
                    </div>
                </article>

                {/* LIGHT */}

                <article className="design__item design__item--light">
                    <div className="design__visual design__visual--light">
                        <img
                            className="design__image"
                            src={lightImage}
                            alt="Xenom front lighting signature"
                        />
                    </div>

                    <div className="design__label">
                        <span>FORM / 02</span>
                        <span>LIGHT SIGNATURE</span>
                    </div>
                </article>

                {/* WHEEL */}

                <article className="design__item design__item--wheel">
                    <div className="design__visual design__visual--wheel">
                        <img
                            className="design__image"
                            src={wheelImage}
                            alt="Xenom forged wheel and braking system"
                        />
                    </div>

                    <div className="design__label">
                        <span>FORM / 03</span>
                        <span>FORGED PRECISION</span>
                    </div>
                </article>
            </div>

            {/* ======================================
          FINAL STATEMENT
      ====================================== */}

            <div className="design__statement">
                <div className="design__statement-title">
                    <span className="design__statement-line">
                        <span>BEAUTY</span>
                    </span>

                    <span className="design__statement-line">
                        <span>WITHOUT</span>
                    </span>

                    <span className="design__statement-line">
                        <span>
                            EXCESS<span className="design__dot">.</span>
                        </span>
                    </span>
                </div>

                <div className="design__statement-copy">
                    <span>DESIGN PHILOSOPHY</span>

                    <p>
                        Nothing added without reason.
                        <br />
                        Nothing removed without purpose.
                    </p>
                </div>
            </div>
        </section>
    );
}