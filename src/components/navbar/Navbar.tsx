import { useState, useEffect } from "react";
import { Menu, X, Phone, Hammer, Globe } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";
import { CONTACT_INFO_SK, CONTACT_INFO_UK } from "../../translations";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const currentContact = language === "sk" ? CONTACT_INFO_SK : CONTACT_INFO_UK;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header
      id="navbar"
      className={`navbar ${isScrolled ? "navbar--scrolled" : "navbar--top"}`}
    >
      <div className="navbar__container">
        <div className="navbar__row">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="navbar__logo"
          >
            <div className="navbar__logo-icon">
              <Hammer size={20} strokeWidth={2.5} />
            </div>
            <div>
              <span className="navbar__logo-name">
                Obklady<span className="navbar__logo-accent">PRO</span>
              </span>
              <span className="navbar__logo-sub">
                {language === "uk" ? "Внутрішні роботи" : "Interiérové práce"}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="navbar__nav">
            <button
              onClick={() => scrollToSection("services")}
              className="navbar__nav-btn"
            >
              {t("nav.works")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="navbar__nav-btn"
            >
              {t("nav.portfolio")}
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className="navbar__nav-btn"
            >
              {t("nav.advantages")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="navbar__nav-btn"
            >
              {t("nav.contact")}
            </button>
          </nav>

          {/* Desktop Controls */}
          <div className="navbar__controls">
            <div className="navbar__lang-pill">
              <span className="navbar__lang-globe">
                <Globe size={14} />
              </span>
              <div className="navbar__lang-buttons">
                <button
                  type="button"
                  onClick={() => setLanguage("uk")}
                  className={`navbar__lang-btn${language === "uk" ? " navbar__lang-btn--active" : ""}`}
                >
                  UA
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("sk")}
                  className={`navbar__lang-btn${language === "sk" ? " navbar__lang-btn--active" : ""}`}
                >
                  SK
                </button>
              </div>
            </div>

            <a
              href={`tel:${currentContact.phone}`}
              className="navbar__call-btn"
            >
              <Phone size={16} />
              <span>{currentContact.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="navbar__mobile-controls">
            <div className="navbar__mobile-lang">
              <button
                type="button"
                onClick={() => setLanguage("uk")}
                className={`navbar__mobile-lang-btn${language === "uk" ? " navbar__mobile-lang-btn--active" : ""}`}
              >
                UA
              </button>
              <button
                type="button"
                onClick={() => setLanguage("sk")}
                className={`navbar__mobile-lang-btn${language === "sk" ? " navbar__mobile-lang-btn--active" : ""}`}
              >
                SK
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar__menu-btn"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="navbar__drawer">
          <button
            onClick={() => scrollToSection("services")}
            className="navbar__drawer-btn"
          >
            {t("nav.works")}
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="navbar__drawer-btn"
          >
            {t("nav.portfolio")}
          </button>
          <button
            onClick={() => scrollToSection("advantages")}
            className="navbar__drawer-btn"
          >
            {t("nav.advantages")}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="navbar__drawer-btn"
          >
            {t("nav.contact")}
          </button>
          <div className="navbar__drawer-footer">
            <a
              href={`tel:${currentContact.phone}`}
              className="navbar__drawer-call"
            >
              <Phone size={20} />
              <span>
                {t("nav.callBtn")}: {currentContact.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
