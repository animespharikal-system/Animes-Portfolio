import { useState } from "react";
import { profileLinks } from "../data.js";
import Icon from "./Icon.jsx";

const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          aria-label="Animes Pharikal, home"
          className="brand"
          href="#home"
          onClick={closeMenu}
        >
          <span className="brand-mark">AP</span>
          <span className="brand-name">Animes Pharikal</span>
        </a>

        <button
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Icon name={menuOpen ? "close" : "menu"} size={20} />
        </button>

        <nav
          aria-label="Main navigation"
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          id="site-navigation"
        >
          {navigation.map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <a
          className="header-link"
          href={profileLinks.github}
          rel="noreferrer"
          target="_blank"
        >
          GitHub
          <Icon name="external" size={14} />
        </a>
      </div>
    </header>
  );
}
