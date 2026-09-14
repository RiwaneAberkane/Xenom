import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import performanceImage from '../assets/images/xenom-performance.png';

import './Performance.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        value: 2.7,
        decimals: 1,
        suffix: 'SEC',
        label: '0 — 100 KM/H',
    },
    {
        value: 780,
        decimals: 0,
        suffix: 'HP',
        label: 'TOTAL POWER',
    },
    {
        value: 510,
        decimals: 0,
        suffix: 'KM',
        label: 'RANGE WLTP',
    },
];

export default function Performance() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return undefined;

        const ctx = gsap.context(() => {
            /*
             * -------------------------------------------------
             * INTRODUCTION DE LA SECTION
             * -------------------------------------------------
             */

            gsap.from('.performance__index', {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                ease: 'power3.out',
            });

            gsap.from('.performance__title-line > span', {
                scrollTrigger: {
                    trigger: '.performance__title',
                    start: 'top 82%',
                },
                yPercent: 110,
                duration: 1.1,
                stagger: 0.12,
                ease: 'power4.out',
            });

            gsap.from('.performance__intro', {
                scrollTrigger: {
                    trigger: '.performance__intro',
                    start: 'top 88%',
                },
                opacity: 0,
                y: 25,
                duration: 0.9,
                ease: 'power3.out',
            });

            /*
             * -------------------------------------------------
             * VOITURE
             * -------------------------------------------------
             */

            gsap.fromTo(
                '.performance__visual',
                {
                    opacity: 0,
                    x: 90,
                    scale: 1.06,
                },
                {
                    scrollTrigger: {
                        trigger: '.performance__visual',
                        start: 'top 88%',
                        end: 'center 55%',
                        scrub: 1.2,
                    },
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    ease: 'none',
                },
            );

            /*
             * -------------------------------------------------
             * LIGNE ROUGE
             * -------------------------------------------------
             */

            gsap.fromTo(
                '.performance__accent-line',
                {
                    scaleX: 0,
                },
                {
                    scrollTrigger: {
                        trigger: '.performance__visual',
                        start: 'top 75%',
                    },
                    scaleX: 1,
                    duration: 1.3,
                    ease: 'power3.inOut',
                },
            );

            /*
             * -------------------------------------------------
             * STATISTIQUES
             * -------------------------------------------------
             */

            const statElements = gsap.utils.toArray('.performance__stat');

            statElements.forEach((stat) => {
                const number = stat.querySelector('.performance__number');

                const target = Number(number.dataset.value);
                const decimals = Number(number.dataset.decimals);

                const counter = {
                    value: 0,
                };

                gsap.from(stat, {
                    scrollTrigger: {
                        trigger: stat,
                        start: 'top 90%',
                    },
                    opacity: 0,
                    y: 35,
                    duration: 0.9,
                    ease: 'power3.out',
                });

                gsap.to(counter, {
                    scrollTrigger: {
                        trigger: stat,
                        start: 'top 90%',
                        once: true,
                    },

                    value: target,
                    duration: 1.8,
                    ease: 'power3.out',

                    onUpdate: () => {
                        number.textContent = counter.value.toFixed(decimals);
                    },
                });
            });

            /*
             * -------------------------------------------------
             * MICRO PARALLAXE AU SCROLL
             * -------------------------------------------------
             */

            gsap.to('.performance__image', {
                scrollTrigger: {
                    trigger: '.performance__visual',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },

                yPercent: 5,

                ease: 'none',
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="performance"
            id="performance"
        >
            <div className="performance__top">
                <div className="performance__index">
                    <span>02</span>
                    <span className="performance__index-line" />
                    <span>PERFORMANCE</span>
                </div>

                <p className="performance__microcopy">
                    ENGINEERED
                    <br />
                    WITHOUT
                    <br />
                    COMPROMISE.
                </p>
            </div>

            <div className="performance__heading">
                <h2 className="performance__title">
                    <span className="performance__title-line">
                        <span>PURE</span>
                    </span>

                    <span className="performance__title-line">
                        <span>
                            PERFORMANCE<span className="performance__dot">.</span>
                        </span>
                    </span>
                </h2>

                <p className="performance__intro">
                    Power isn't measured by numbers alone.
                    <br />
                    It's measured by what you feel.
                </p>
            </div>

            <div className="performance__visual">
                <img
                    className="performance__image"
                    src={performanceImage}
                    alt="Xenom hypercar in a dark architectural environment"
                />

                <div
                    className="performance__visual-shade"
                    aria-hidden="true"
                />

                <span
                    className="performance__accent-line"
                    aria-hidden="true"
                />

                <span className="performance__visual-label performance__visual-label--left">
                    XN / 01
                </span>

                <span className="performance__visual-label performance__visual-label--right">
                    PRECISION IN MOTION
                </span>
            </div>

            <div className="performance__stats">
                {stats.map((stat) => (
                    <article
                        className="performance__stat"
                        key={stat.label}
                    >
                        <div className="performance__value">
                            <span
                                className="performance__number"
                                data-value={stat.value}
                                data-decimals={stat.decimals}
                            >
                                0
                            </span>

                            <span className="performance__suffix">
                                {stat.suffix}
                            </span>
                        </div>

                        <p>{stat.label}</p>
                    </article>
                ))}
            </div>

            <div className="performance__bottom">
                <span>POWER</span>

                <span className="performance__bottom-line" />

                <span>PRECISION</span>

                <span className="performance__bottom-line" />

                <span>CONTROL</span>
            </div>
        </section>
    );
}