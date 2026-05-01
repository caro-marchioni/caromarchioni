import type { CSSProperties } from "react";
import { resume } from "@/lib/resume";

const exhibitTilt = ["-3deg", "2deg", "-1deg", "3deg", "-2deg"];
const accentColors = ["#cbb7a6", "#bab3cb", "#b9cbb3", "#c7cbb3", "#cbb3c7"];

export default function Home() {
  return (
    <main className="gallery-shell min-h-screen overflow-hidden bg-[#12121a] text-white">
      <div className="gallery-backdrop" />
      <div className="gallery-grain" />

      <nav className="gallery-nav">
        <a href="#top" className="gallery-link">
          {resume.name}
        </a>
        <div className="gallery-nav-center">
          <a href="#experience" className="gallery-link">
            Exhibits
          </a>
          <a href="#skills" className="gallery-link">
            Timeline
          </a>
        </div>
        <a href="#contact" className="gallery-link">
          Contact
        </a>
      </nav>

      <section id="top" className="gallery-hero">
        <div className="hero-copy">
          <p className="gallery-kicker">{resume.eyebrow}</p>
          <h1>{resume.name}</h1>
          <p className="hero-title">{resume.title}</p>
          <div className="hero-actions">
            <a href="#experience" className="primary-action">
              Enter Gallery
            </a>
            <a href={`mailto:${resume.email}`} className="ghost-action">
              {resume.email}
            </a>
          </div>
        </div>

        <div className="hero-installation" aria-hidden="true">
          <div className="floating-frame frame-large">
            <span>QA</span>
          </div>
          <div className="floating-frame frame-tall">
            <span>UX</span>
          </div>
          <div className="floating-frame frame-small">
            <span>01</span>
          </div>
          <div className="museum-label">
            <span>Current Exhibition</span>
            <strong>Quality, Product Support, Digital Solutions</strong>
          </div>
        </div>
      </section>

      <section id="experience" className="gallery-section">
        <div className="section-heading">
          <p className="gallery-kicker">Selected Exhibits</p>
          <h2>Experience arranged as a moving gallery wall.</h2>
        </div>

        <div className="exhibit-wall">
          {resume.experience.map((item, index) => (
            <article
              key={`${item.role}-${item.period}`}
              className="exhibit-card"
              style={
                {
                  "--tilt": exhibitTilt[index % exhibitTilt.length],
                  "--accent": accentColors[index % accentColors.length],
                } as CSSProperties
              }
            >
              <div className="exhibit-art">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="exhibit-info">
                <p className="exhibit-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="exhibit-company">{item.company}</p>
                <p>{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="timeline-section">
        <div className="section-heading">
          <p className="gallery-kicker">Dial The Timeline</p>
          <h2>Core skills for practical product quality.</h2>
        </div>

        <div className="skill-dial" aria-label="Skills">
          {resume.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="highlight-grid">
          {resume.highlights.map((highlight) => (
            <p key={highlight}>{highlight}</p>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-gallery">
        <div>
          <p className="gallery-kicker">Available For</p>
          <h2>
            Quality Assurance, Product & Process Enhancements, and Tailored
            Digital Solutions
          </h2>
        </div>

        <div className="contact-links">
          <a href={`mailto:${resume.email}`} className="primary-action">
            Email Carolina
          </a>
          {resume.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                social.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="gallery-link"
            >
              {social.label}
            </a>
          ))}
        </div>
      </section>

      <footer className="gallery-footer">
        <span>&copy; {new Date().getFullYear()} {resume.name}</span>
        <span>caromarchioni</span>
      </footer>
    </main>
  );
}
