import { ChevronRight, ShieldCheck, MapPin, Award } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";
import { HERO_IMAGE } from "../../translations";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const offsetPosition =
        element.getBoundingClientRect().top - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      {/* Background */}
      <div className="hero__bg">
        <img
          src={HERO_IMAGE}
          alt="Modern interior design and quality renovation"
          className="hero__bg-img"
          referrerPolicy="no-referrer"
        />
        <div className="hero__gradient-v" />
        <div className="hero__gradient-h" />
      </div>

      <div className="hero__content">
        <div className="hero__inner">
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>{t("hero.subtitle")}</span>
          </div>

          {/* Title */}
          <h1 className="hero__title">
            {t("hero.titleMain")}{" "}
            <span className="hero__title-accent">{t("hero.titleAccent")}</span>
          </h1>

          {/* Description */}
          <p className="hero__desc">{t("hero.desc")}</p>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <Award size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div className="hero__stat-text">
                <span className="hero__stat-label">{t("hero.statExp")}</span>
                <span className="hero__stat-sublabel">
                  {t("hero.statExpLabel")}
                </span>
              </div>
            </div>
            <div className="hero__stat">
              <ShieldCheck
                size={20}
                color="#f59e0b"
                style={{ flexShrink: 0 }}
              />
              <div className="hero__stat-text">
                <span className="hero__stat-label">{t("hero.statQual")}</span>
                <span className="hero__stat-sublabel">
                  {t("hero.statQualLabel")}
                </span>
              </div>
            </div>
            <div className="hero__stat">
              <MapPin size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div className="hero__stat-text">
                <span className="hero__stat-label">{t("hero.statLoc")}</span>
                <span className="hero__stat-sublabel">
                  {t("hero.statLocLabel")}
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="hero__cta">
            <button
              onClick={() => scrollTo("contact")}
              className="hero__cta-primary"
            >
              <span>{t("hero.btnContact")}</span>
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => scrollTo("portfolio")}
              className="hero__cta-secondary"
            >
              <span>{t("hero.btnPortfolio")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
