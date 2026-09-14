import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Header from '../components/Header';

import heroImage from '../assets/images/xenom-hero.png';
import heroMobileImage from '../assets/images/xenom-hero-mobile.png';

import './Hero.css';

export default function Hero() {
    const heroRef = useRef(null);
    const imageRef = useRef(null);

    // Animation d'entrée du Hero
    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                defaults: {
                    ease: 'power3.out',
                },
            });

            timeline
                .from('.hero__background', {
                    scale: 1.12,
                    opacity: 0,
                    duration: 1.8,
                })
                .from(
                    '.header',
                    {
                        y: -25,
                        opacity: 0,
                        duration: 0.9,
                    },
                    '-=1',
                )
                .from(
                    '.hero__eyebrow',
                    {
                        x: -25,
                        opacity: 0,
                        duration: 0.7,
                    },
                    '-=0.45',
                )
                .from(
                    '.hero__title-line > span',
                    {
                        yPercent: 110,
                        duration: 1,
                        stagger: 0.12,
                    },
                    '-=0.4',
                )
                .from(
                    '.hero__description',
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.7,
                    },
                    '-=0.45',
                )
                .from(
                    '.hero__actions',
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.7,
                    },
                    '-=0.45',
                )
                .from(
                    '.hero__footer',
                    {
                        opacity: 0,
                        duration: 1,
                    },
                    '-=0.3',
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Micro-parallaxe uniquement sur les appareils avec souris
    useEffect(() => {
        const hero = heroRef.current;
        const image = imageRef.current;

        if (!hero || !image) return undefined;

        const mediaQuery = window.matchMedia(
            '(pointer: fine) and (min-width: 801px)',
        );

        if (!mediaQuery.matches) return undefined;

        const moveX = gsap.quickTo(image, 'x', {
            duration: 1.5,
            ease: 'power3.out',
        });

        const moveY = gsap.quickTo(image, 'y', {
            duration: 1.5,
            ease: 'power3.out',
        });

        const handleMouseMove = (event) => {
            const x = event.clientX / window.innerWidth - 0.5;
            const y = event.clientY / window.innerHeight - 0.5;

            moveX(x * -18);
            moveY(y * -10);
        };

        const handleMouseLeave = () => {
            moveX(0);
            moveY(0);
        };

        hero.addEventListener('mousemove', handleMouseMove);
        hero.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            hero.removeEventListener('mousemove', handleMouseMove);
            hero.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="hero"
            id="hero"
            style={{
                '--hero-desktop': `url(${heroImage})`,
                '--hero-mobile': `url(${heroMobileImage})`,
            }}
        >
            <div
                ref={imageRef}
                className="hero__background"
                aria-hidden="true"
            />

            <div className="hero__overlay" aria-hidden="true" />

            <Header />

            <div className="hero__content">
                <div className="hero__eyebrow">
                    <span />
                    A NEW ERA BEGINS
                </div>

                <h1 className="hero__title">
                    <span className="hero__title-line">
                        <span>BEYOND</span>
                    </span>

                    <span className="hero__title-line">
                        <span>
                            MOTION<span className="hero__dot">.</span>
                        </span>
                    </span>
                </h1>

                <p className="hero__description">
                    More than a car.
                    <br />
                    A state of mind.
                </p>

                <div className="hero__actions">
                    <a className="hero__primary" href="#performance">
                        Discover Xenom
                        <span>→</span>
                    </a>

                    <button className="hero__film" type="button">
                        <span className="hero__play">▶</span>
                        <span className="hero__film-label">Watch film</span>
                    </button>
                </div>
            </div>

            <div className="hero__footer">
                <div className="hero__pagination">
                    <strong>01</strong>

                    <span className="hero__pagination-line" />

                    <span>05</span>
                </div>

                <a className="hero__scroll" href="#performance">
                    <span>Scroll to explore</span>
                    <span className="hero__scroll-line" />
                </a>

                <span className="hero__edition">
                    XENOM
                    <br />
                    MMXXVI
                </span>
            </div>
        </section>
    );
}