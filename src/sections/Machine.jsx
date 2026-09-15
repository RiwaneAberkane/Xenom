import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import exteriorImage from '../assets/images/xenom-machine-exterior.png';
import aeroImage from '../assets/images/xenom-machine-aero.png';
import signatureImage from '../assets/images/xenom-machine-signature.png';

import './Machine.css';

gsap.registerPlugin(ScrollTrigger);

const chapters = [
    {
        number: '01',
        code: 'EXTERIOR',
        title: 'SCULPTED\nBY AIR.',
        description:
            'Every surface exists for a reason. Form and airflow become one continuous gesture.',
        image: exteriorImage,
        meta: 'XN / BODY / 001',
    },
    {
        number: '02',
        code: 'AERODYNAMICS',
        title: 'AIR BECOMES\nSTRUCTURE.',
        description:
            'Channels, carbon and pressure zones shape the machine long before speed begins.',
        image: aeroImage,
        meta: 'XN / AERO / 002',
    },
    {
        number: '03',
        code: 'SIGNATURE',
        title: 'SEEN AFTER\nDARK.',
        description:
            'A red signature cuts through the darkness. Instantly recognizable. Unmistakably Xenom.',
        image: signatureImage,
        meta: 'XN / LIGHT / 003',
    },
];

export default function Machine() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;

        if (!section || !track) return undefined;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            /* ======================================
               DESKTOP — HORIZONTAL SCROLL
            ====================================== */

            mm.add('(min-width: 801px)', () => {
                const panels = gsap.utils.toArray('.machine__panel');

                gsap.set(track, {
                    xPercent: 0,
                });

                const horizontalTween = gsap.to(track, {
                    xPercent: -66.6667,
                    ease: 'none',

                    scrollTrigger: {
                        trigger: section,
                        start: 'top top',
                        end: '+=260%',
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                panels.forEach((panel) => {
                    const image = panel.querySelector('.machine__image img');
                    const content = panel.querySelector('.machine__content');

                    gsap.fromTo(
                        image,
                        {
                            scale: 1.08,
                        },
                        {
                            scale: 1,
                            ease: 'none',

                            scrollTrigger: {
                                trigger: panel,
                                containerAnimation: horizontalTween,
                                start: 'left right',
                                end: 'right left',
                                scrub: true,
                            },
                        },
                    );

                    gsap.from(content, {
                        opacity: 0.25,
                        x: 50,

                        scrollTrigger: {
                            trigger: panel,
                            containerAnimation: horizontalTween,
                            start: 'left 85%',
                            end: 'left 45%',
                            scrub: true,
                        },
                    });
                });

                gsap.from('.machine__header', {
                    opacity: 0,
                    y: -15,
                    duration: 0.8,

                    scrollTrigger: {
                        trigger: section,
                        start: 'top 75%',
                    },
                });
            });

            /* ======================================
               MOBILE
            ====================================== */

            mm.add('(max-width: 800px)', () => {
                const cards = gsap.utils.toArray('.machine__panel');

                cards.forEach((card) => {
                    gsap.from(card, {
                        opacity: 0,
                        y: 35,
                        duration: 0.9,
                        ease: 'power3.out',

                        scrollTrigger: {
                            trigger: card,
                            start: 'top 88%',
                        },
                    });
                });
            });

            return () => mm.revert();
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="machine"
            id="machine"
        >
            {/* HEADER FIXE */}

            <div className="machine__header">
                <div className="machine__index">
                    <span>05</span>
                    <span className="machine__index-line" />
                    <span>THE MACHINE</span>
                </div>

                <div className="machine__header-center">
                    XENOM ONE
                </div>

                <div className="machine__header-code">
                    FIRST SERIES / 001
                </div>
            </div>

            {/* TRACK */}

            <div
                ref={trackRef}
                className="machine__track"
            >
                {chapters.map((chapter) => (
                    <article
                        className="machine__panel"
                        key={chapter.number}
                    >
                        {/* NUMBER */}

                        <div className="machine__number">
                            {chapter.number}
                        </div>

                        {/* IMAGE */}

                        <div className="machine__image">
                            <img
                                src={chapter.image}
                                alt={`Xenom One ${chapter.code.toLowerCase()} detail`}
                            />

                            <div className="machine__image-shade" />

                            <span className="machine__image-meta">
                                {chapter.meta}
                            </span>
                        </div>

                        {/* CONTENT */}

                        <div className="machine__content">
                            <span className="machine__eyebrow">
                                {chapter.number} / {chapter.code}
                            </span>

                            <h2>
                                {chapter.title.split('\n').map((line) => (
                                    <span key={line}>
                                        {line}
                                    </span>
                                ))}
                            </h2>

                            <p>
                                {chapter.description}
                            </p>
                        </div>

                        {/* BOTTOM */}

                        <div className="machine__panel-bottom">
                            <span>XENOM / ONE</span>

                            <span>
                                {chapter.number} — 03
                            </span>
                        </div>
                    </article>
                ))}
            </div>

            {/* DESKTOP SCROLL INDICATOR */}

            <div className="machine__scroll">
                <span>SCROLL</span>

                <span className="machine__scroll-line">
                    <span />
                </span>

                <span>EXPLORE</span>
            </div>
        </section>
    );
}