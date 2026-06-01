import { NAV } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <a href="#top" className="footer__brand">
            <img src="/logos/logo-v-white.svg" alt="ELI'Sens" />
          </a>
          <nav className="footer__nav">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="footer__tagline display">Le soin qui se ressent.</p>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} ELI'Sens · Yaoundé, Cameroun</span>
          <span className="footer__social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
