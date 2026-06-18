import { ArrowUp, Hammer } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";
import { CONTACT_INFO_SK, CONTACT_INFO_UK } from "../../translations";
import "./Footer.css";

export default function Footer() {
  const { t, language } = useLanguage();
  const contactInfo = language === "sk" ? CONTACT_INFO_SK : CONTACT_INFO_UK;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-icon">
              <Hammer size={20} color="#f59e0b" />
            </div>
            <div>
              <span className="footer__brand-name">
                Obklady<span className="footer__brand-accent">PRO</span>
              </span>
              <span className="footer__brand-sub">{t("footer.brandLoc")}</span>
            </div>
          </div>

          <div className="footer__contact">
            <p className="footer__contact-sub">{t("footer.subtext")}</p>
            <p className="footer__contact-phone">{contactInfo.phoneDisplay}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>
              &copy; {new Date().getFullYear()} ObkladyPRO.{" "}
              {t("footer.copyright")}
            </p>
            <p>{t("footer.bottomDesc")}</p>
          </div>

          <button
            onClick={scrollToTop}
            className="footer__up-btn"
            aria-label={t("footer.up")}
          >
            <span>{t("footer.up")}</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
