import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = ["home", "resume", "projects", "contact"];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 150;
      links.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* LOGO */}
        <div className="logo">
          <span>{'</> '}</span>Mukesh
        </div>

        {/* DESKTOP RIGHT GROUP */}
        <div className="nav-right">
          <ul className="nav-links">
            {links.map(l => (
              <li key={l}>
                <a
                  href={`#${l}`}
                  className={active === l ? "active" : ""}
                >
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hire-btn">
            Hire me
          </a>
        </div>

        {/* HAMBURGER ICON (MOBILE) */}
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map(l => (
            <a
              key={l}
              href={`#${l}`}
              className={active === l ? "active" : ""}
              onClick={closeMenu}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}

          <a href="#contact" className="mobile-hire" onClick={closeMenu}>
            Hire me
          </a>
        </div>
      )}
    </nav>
  );
}
