import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import './Header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    /* ========================================
       LOCK SCROLL WHEN MENU IS OPEN
    ======================================== */

    useEffect(() => {
        if (!menuOpen) {
            return undefined;
        }

        const previousBodyOverflow = document.body.style.overflow;
        const previousHtmlOverflow = document.documentElement.style.overflow;

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;
        };
    }, [menuOpen]);

    /* ========================================
       CLOSE WITH ESCAPE
    ======================================== */

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    /* ========================================
       CLOSE MENU WHEN RETURNING TO DESKTOP
    ======================================== */

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 801px)');

        const handleChange = (event) => {
            if (event.matches) {
                setMenuOpen(false);
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    /* ========================================
       CLOSE MENU
    ======================================== */

    const closeMenu = () => {
        setMenuOpen(false);
    };

    /* ========================================
       NAVIGATION
    ======================================== */

    const navigation = [
        {
            number: '01',
            label: 'Performance',
            href: '#performance',
        },
        {
            number: '02',
            label: 'Design',
            href: '#design',
        },
        {
            number: '03',
            label: 'Experience',
            href: '#experience',
        },
        {
            number: '04',
            label: 'The Machine',
            href: '#machine',
        },
    ];

    /* ========================================
       PORTAL
    ======================================== */

    return createPortal(
        <>
            {/* ======================================
          FIXED HEADER
      ====================================== */}

            <header className="header">
                {/* BRAND */}

                <a
                    className="header__brand"
                    href="#hero"
                    aria-label="Xenom - Home"
                    onClick={closeMenu}
                >
                    <span className="header__x">
                        X
                    </span>

                    <span>
                        XENOM
                    </span>
                </a>

                {/* DESKTOP NAV */}

                <nav
                    className="header__nav"
                    aria-label="Main navigation"
                >
                    {navigation.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* DESKTOP EXPLORE */}

                <a
                    className="header__explore"
                    href="#performance"
                >
                    <span>
                        Explore
                    </span>

                    <span>
                        ↗
                    </span>
                </a>

                {/* MOBILE BURGER */}

                <button
                    className="header__menu"
                    type="button"
                    aria-label="Open navigation menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen(true)}
                >
                    <span />
                    <span />
                </button>
            </header>

            {/* ======================================
          MOBILE MENU
      ====================================== */}

            <div
                id="mobile-navigation"
                className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''
                    }`}
                aria-hidden={!menuOpen}
            >
                {/* DECORATIVE X */}

                <div
                    className="mobile-menu__background"
                    aria-hidden="true"
                >
                    <span>X</span>
                </div>

                {/* MENU HEADER */}

                <div className="mobile-menu__header">
                    <a
                        className="mobile-menu__brand"
                        href="#hero"
                        aria-label="Xenom - Home"
                        onClick={closeMenu}
                    >
                        <span>X</span>

                        <span>XENOM</span>
                    </a>

                    <button
                        className="mobile-menu__close"
                        type="button"
                        aria-label="Close navigation menu"
                        onClick={closeMenu}
                    >
                        <span />
                        <span />
                    </button>
                </div>

                {/* META */}

                <div className="mobile-menu__meta">
                    <span>XN / NAVIGATION</span>

                    <span>MMXXVI</span>
                </div>

                {/* MOBILE NAV */}

                <nav
                    className="mobile-menu__nav"
                    aria-label="Mobile navigation"
                >
                    {navigation.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                        >
                            <span className="mobile-menu__number">
                                {item.number}
                            </span>

                            <span className="mobile-menu__label">
                                {item.label}
                            </span>

                            <span className="mobile-menu__arrow">
                                ↗
                            </span>
                        </a>
                    ))}
                </nav>

                {/* BOTTOM */}

                <div className="mobile-menu__bottom">
                    <div>
                        <span>XENOM</span>

                        <span>BEYOND MOTION.</span>
                    </div>

                    <span>CONCEPT 001</span>
                </div>
            </div>
        </>,
        document.body,
    );
}