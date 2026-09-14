import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <a
                className="header__brand"
                href="#hero"
                aria-label="Xenom - Home"
            >
                <span className="header__x">X</span>
                <span>XENOM</span>
            </a>

            <nav
                className="header__nav"
                aria-label="Main navigation"
            >
                <a href="#models">Models</a>
                <a href="#performance">Performance</a>
                <a href="#design">Design</a>
                <a href="#experience">Experience</a>
            </nav>

            <a
                className="header__explore"
                href="#performance"
            >
                Explore
                <span>↗</span>
            </a>

            <button
                className="header__menu"
                type="button"
                aria-label="Open menu"
            >
                <span />
                <span />
            </button>
        </header>
    );
}