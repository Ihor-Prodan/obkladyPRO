import { useLanguage } from "../../context/useLanguage";
import { CONTACT_INFO_SK, CONTACT_INFO_UK } from "../../translations";
import { Camera, Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import "./Contacts.css";

export default function Contact() {
  const { t, language } = useLanguage();
  const contactInfo = language === "sk" ? CONTACT_INFO_SK : CONTACT_INFO_UK;

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        {/* Header */}
        <div className="contact__header">
          <h2 className="contact__badge">{t("contact.badge")}</h2>
          <p className="contact__title">{t("contact.title")}</p>
          <div className="contact__divider" />
          <p className="contact__desc">{t("contact.desc")}</p>
        </div>

        {/* Contact cards */}
        <div className="contact__cards">
          {/* Phone */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="contact__card contact__card--link"
          >
            <div className="contact__card-icon contact__card-icon--amber">
              <Phone size={22} />
            </div>
            <div className="contact__card-body">
              <span className="contact__card-label">
                {t("contact.phoneLabel")}
              </span>
              <span className="contact__card-value">
                {contactInfo.phoneDisplay}
              </span>
              <span className="contact__card-sub contact__card-sub--green">
                {t("contact.phoneStatus")}
              </span>
            </div>
          </a>

          {/* Working hours */}
          <div className="contact__card">
            <div className="contact__card-icon">
              <Clock size={22} />
            </div>
            <div className="contact__card-body">
              <span className="contact__card-label">
                {t("contact.hoursLabel")}
              </span>
              <span className="contact__card-value">
                {contactInfo.workingHours}
              </span>
              <span className="contact__card-sub">
                {t("contact.hoursDesc")}
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="contact__card">
            <div className="contact__card-icon">
              <MapPin size={22} />
            </div>
            <div className="contact__card-body">
              <span className="contact__card-label">
                {t("contact.coverageLabel")}
              </span>
              <span className="contact__card-value">
                {contactInfo.coverageArea}
              </span>
            </div>
          </div>

          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="contact__card contact__card--link"
          >
            <div className="contact__card-icon">
              <Mail size={22} />
            </div>
            <div className="contact__card-body">
              <span className="contact__card-label">
                {t("contact.emailLabel")}
              </span>
              <span className="contact__card-value contact__card-value--sm">
                {contactInfo.email}
              </span>
              <span className="contact__card-sub">
                {t("contact.emailDesc")}
              </span>
            </div>
          </a>
        </div>

        {/* Messengers */}
        <div className="contact__social">
          <h4 className="contact__social-label">{t("contact.socialLabel")}</h4>
          <div className="contact__social-grid">
            <a
              href={contactInfo.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-btn contact__social-btn--telegram"
            >
              <MessageSquare size={18} color="#38bdf8" />
              <span>Telegram</span>
            </a>
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-btn contact__social-btn--whatsapp"
            >
              <MessageSquare size={18} color="#25D366" />
              <span>WhatsApp</span>
            </a>
            <a
              href={contactInfo.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-btn contact__social-btn--instagram"
            >
              <Camera size={18} color="#e1306c" />
              <span>{contactInfo.instagramDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
