import { useState } from "react";
import { useLanguage } from "../../context/useLanguage";
import { SERVICES_SK, SERVICES_UK } from "../../translations";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Droplet,
  Grid,
  Hammer,
  Layers,
  Paintbrush,
  Wrench,
} from "lucide-react";
import "./Services.css";

function ServiceIcon({ name, color }: { name: string; color?: string }) {
  const c = color || "#f59e0b";
  switch (name) {
    case "Grid":
      return <Grid size={24} color={c} />;
    case "Layers":
      return <Layers size={24} color={c} />;
    case "Paintbrush":
      return <Paintbrush size={24} color={c} />;
    case "Hammer":
      return <Hammer size={24} color={c} />;
    case "Droplet":
      return <Droplet size={24} color={c} />;
    default:
      return <Wrench size={24} color={c} />;
  }
}

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>("tiles");
  const { t, language } = useLanguage();

  const servicesData = language === "sk" ? SERVICES_SK : SERVICES_UK;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="services">
      <div className="services__container">
        {/* Header */}
        <div className="services__header">
          <h2 className="services__badge">{t("services.badge")}</h2>
          <p className="services__title">{t("services.title")}</p>
          <div className="services__divider" />
          <p className="services__desc">{t("services.desc")}</p>
        </div>

        <div className="services__grid">
          {/* Left: accordion list */}
          <div className="services__list">
            {servicesData.map((service) => {
              const isActive = expandedId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => toggleExpand(service.id)}
                  className={`services__item${isActive ? " services__item--active" : ""}`}
                >
                  <div className="services__item-left">
                    <div className="services__item-icon">
                      <ServiceIcon
                        name={service.iconName}
                        color={isActive ? "#0a0a0a" : "#f59e0b"}
                      />
                    </div>
                    <div>
                      <h3 className="services__item-name">{service.title}</h3>
                      <p className="services__item-desc">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <span className="services__item-chevron">
                    {isActive ? (
                      <ChevronUp size={20} color="#f59e0b" />
                    ) : (
                      <ChevronDown size={20} color="#737373" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div className="services__detail">
            <div className="services__detail-glow" />

            {expandedId ? (
              (() => {
                const active = servicesData.find((s) => s.id === expandedId)!;
                return (
                  <div className="services__detail-inner">
                    <div>
                      <div className="services__detail-header">
                        <ServiceIcon name={active.iconName} />
                        <span className="services__detail-badge">
                          {t("services.detailsBadge")}
                        </span>
                      </div>

                      <h3 className="services__detail-title">{active.title}</h3>
                      <p className="services__detail-desc">
                        {active.description}
                      </p>

                      <hr className="services__detail-hr" />

                      <p className="services__detail-works-label">
                        {t("services.detailsTitle")}
                      </p>

                      <ul className="services__works-list">
                        {active.detailedWorks.map((work, idx) => (
                          <li key={idx} className="services__works-item">
                            <span className="services__works-check">
                              <Check size={18} color="#f59e0b" />
                            </span>
                            <span>{work}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="services__detail-footer">
                      <div>
                        <span className="services__visit-label">
                          {t("services.visitLabel")}
                        </span>
                        <span className="services__visit-desc">
                          {t("services.visitDesc")}
                        </span>
                      </div>
                      <a href="#contact" className="services__cta-link">
                        <span>{t("services.ctaCalc")}</span>
                        <span className="services__cta-arrow">→</span>
                      </a>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="services__empty">
                <span className="services__empty-icon">
                  <Wrench size={48} color="#404040" />
                </span>
                <h3 className="services__empty-title">
                  {t("services.btnSelect")}
                </h3>
                <p className="services__empty-desc">
                  {t("services.expandedEmpty")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
