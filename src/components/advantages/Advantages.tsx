import {
  ShieldCheck,
  TrendingUp,
  Award,
  CheckSquare,
  Sparkles,
  Zap,
} from "lucide-react";
import { BENEFITS_SK, BENEFITS_UK } from "../../translations";
import "./Advantages.css";
import { useLanguage } from "../../context/useLanguage";

function BenefitIcon({ name }: { name: string }) {
  const color = "#f59e0b";
  const size = 28;
  switch (name) {
    case "ShieldCheck":
      return <ShieldCheck size={size} color={color} />;
    case "TrendingUp":
      return <TrendingUp size={size} color={color} />;
    case "Award":
      return <Award size={size} color={color} />;
    case "CheckSquare":
      return <CheckSquare size={size} color={color} />;
    case "Sparkles":
      return <Sparkles size={size} color={color} />;
    default:
      return <Zap size={size} color={color} />;
  }
}

export default function Advantages() {
  const { t, language } = useLanguage();
  const benefitsData = language === "sk" ? BENEFITS_SK : BENEFITS_UK;

  const scrollToContact = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const offsetPosition =
        contactEl.getBoundingClientRect().top - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="advantages" className="advantages">
      <div className="advantages__container">
        {/* Header */}
        <div className="advantages__header">
          <h2 className="advantages__badge">{t("advantages.badge")}</h2>
          <p className="advantages__title">{t("advantages.title")}</p>
          <div className="advantages__divider" />
          <p className="advantages__desc">{t("advantages.desc")}</p>
        </div>

        {/* Cards */}
        <div className="advantages__grid">
          {benefitsData.map((benefit, index) => (
            <div key={benefit.id} className="adv-card">
              <div className="adv-card__glow" />
              <div>
                <div className="adv-card__icon">
                  <BenefitIcon name={benefit.iconName} />
                </div>
                <h3 className="adv-card__title">{benefit.title}</h3>
                <p className="adv-card__desc">{benefit.description}</p>
              </div>
              <div className="adv-card__footer">
                <span className="adv-card__index">
                  {language === "uk" ? "СТАНДАРТ" : "ŠTANDARD"} #0{index + 1}
                </span>
                <span className="adv-card__dot" />
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="advantages__banner">
          <div className="advantages__banner-text">
            <h4 className="advantages__banner-title">
              {t("advantages.bannerTitle")}
            </h4>
            <p className="advantages__banner-desc">
              {t("advantages.bannerDesc")}
            </p>
          </div>
          <button onClick={scrollToContact} className="advantages__banner-btn">
            {t("advantages.bannerCta")}
          </button>
        </div>
      </div>
    </section>
  );
}
