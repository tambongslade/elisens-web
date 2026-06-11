import { useEffect, useState } from "react";
import { NAV } from "../data";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${solid ? "nav--solid" : ""}`}>
      <div className="nav__inner wrap">
        <a href="#top" className="nav__brand" aria-label="ELI'Sens, accueil">
          <img src="/logos/logo-h-white.svg" alt="ELI'Sens" />
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#booking" className="nav__cta" onClick={() => setOpen(false)}>
            Book an appointment
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
