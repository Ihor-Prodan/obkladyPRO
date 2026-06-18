import { useState } from "react";
import { X, Maximize, Layers, CheckCircle, Clock } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";
import type { Project } from "../../types";
import { PROJECTS_SK, PROJECTS_UK } from "../../translations";
import "./Portfolio.css";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "tiles" | "drywall" | "painting"
  >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t, language } = useLanguage();

  const projectsData = language === "sk" ? PROJECTS_SK : PROJECTS_UK;

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const scrollToContact = () => {
    setSelectedProject(null);
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
    <section id="portfolio" className="portfolio">
      <div className="portfolio__container">
        {/* Header */}
        <div className="portfolio__header">
          <div className="portfolio__header-left">
            <h2 className="portfolio__badge">{t("portfolio.badge")}</h2>
            <p className="portfolio__title">{t("portfolio.title")}</p>
            <div className="portfolio__divider" />
          </div>
          <p className="portfolio__desc">{t("portfolio.desc")}</p>
        </div>

        {/* Filter tabs */}
        <div className="portfolio__filters">
          {(["all", "tiles", "drywall", "painting"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`portfolio__filter-btn${activeFilter === filter ? " portfolio__filter-btn--active" : ""}`}
            >
              {t(
                `portfolio.${filter === "all" ? "allFilter" : filter + "Filter"}`,
              )}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="portfolio__grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="portfolio__card"
            >
              <div className="portfolio__card-img-wrap">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="portfolio__card-img"
                  referrerPolicy="no-referrer"
                />
                <div className="portfolio__card-img-overlay" />
                <div className="portfolio__card-maximize">
                  <Maximize size={20} color="#f59e0b" />
                </div>
                <span className="portfolio__card-category">
                  {project.categoryLabel}
                </span>
              </div>

              <div className="portfolio__card-body">
                <div className="portfolio__card-meta">
                  <span className="portfolio__card-meta-item">
                    <Layers size={14} color="#f59e0b" />
                    {t("portfolio.area")}: <strong>{project.areaSqM} m²</strong>
                  </span>
                  <span className="portfolio__card-meta-item">
                    <Clock size={14} color="#f59e0b" />
                    {t("portfolio.duration")}:{" "}
                    <strong>
                      {project.durationDays} {t("portfolio.daysUnit")}
                    </strong>
                  </span>
                </div>
                <h3 className="portfolio__card-title">{project.title}</h3>
                <p className="portfolio__card-desc">{project.description}</p>
                <span className="portfolio__card-more">
                  {t("portfolio.moreDetails")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="portfolio__modal-overlay">
            <div className="portfolio__modal">
              <button
                onClick={() => setSelectedProject(null)}
                className="portfolio__modal-close"
              >
                <X size={20} />
              </button>

              <div className="portfolio__modal-grid">
                {/* Left */}
                <div className="portfolio__modal-left">
                  <div>
                    <span className="portfolio__modal-cat">
                      {selectedProject.categoryLabel}
                    </span>
                    <h3 className="portfolio__modal-title">
                      {selectedProject.title}
                    </h3>

                    <div className="portfolio__modal-img-wrap">
                      <img
                        src={selectedProject.imageUrl}
                        alt={selectedProject.title}
                        className="portfolio__modal-img"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <h4 className="portfolio__modal-stages-title">
                      <CheckCircle size={20} color="#f59e0b" />
                      <span>{t("portfolio.modalStages")}</span>
                    </h4>

                    <ul className="portfolio__modal-stages">
                      {selectedProject.stagesOfWork.map((stage, idx) => (
                        <li key={idx} className="portfolio__modal-stage">
                          <span className="portfolio__modal-stage-num">
                            {idx + 1}
                          </span>
                          <span className="portfolio__modal-stage-text">
                            {stage}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right */}
                <div className="portfolio__modal-right">
                  <div>
                    <div className="portfolio__modal-stats">
                      <div>
                        <span className="portfolio__modal-stat-label">
                          {t("portfolio.modalArea")}
                        </span>
                        <strong className="portfolio__modal-stat-value">
                          {selectedProject.areaSqM} m²
                        </strong>
                      </div>
                      <div className="portfolio__modal-vdivider" />
                      <div>
                        <span className="portfolio__modal-stat-label">
                          {t("portfolio.modalDuration")}
                        </span>
                        <strong className="portfolio__modal-stat-value">
                          {selectedProject.durationDays}{" "}
                          {t("portfolio.modalDaysUnit")}
                        </strong>
                      </div>
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4 className="portfolio__modal-desc-title">
                        {t("portfolio.modalDescTitle")}
                      </h4>
                      <p className="portfolio__modal-desc-text">
                        {selectedProject.detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="portfolio__modal-materials-title">
                        {t("portfolio.modalMaterials")}
                      </h4>
                      <div className="portfolio__modal-materials">
                        {selectedProject.materialsUsed.map((material, idx) => (
                          <span key={idx} className="portfolio__modal-material">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="portfolio__modal-cta-wrap">
                    <p className="portfolio__modal-pitch">
                      {t("portfolio.modalPitch")}
                    </p>
                    <button
                      onClick={scrollToContact}
                      className="portfolio__modal-cta"
                    >
                      {t("portfolio.modalCta")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
