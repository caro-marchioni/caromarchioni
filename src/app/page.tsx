"use client";

import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { GalleryNav } from "@/app/gallery-nav";
import { resume } from "@/lib/resume";

const exhibitTilt = ["-3deg", "2deg", "-1deg", "3deg", "-2deg"];
const accentColors = ["#cbb7a6", "#bab3cb", "#b9cbb3", "#c7cbb3", "#cbb3c7"];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const exhibitRailRef = useRef<HTMLDivElement>(null);

  function scrollExhibits(direction: "left" | "right") {
    const rail = exhibitRailRef.current;
    if (!rail) return;

    const amount = Math.min(rail.clientWidth * 0.8, 720);
    rail.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <main className="gallery-shell min-h-screen overflow-hidden bg-[#12121a] text-white">
      <div className="gallery-backdrop" />
      <div className="gallery-grain" />

      <GalleryNav onOpenContact={() => setIsContactOpen(true)} />

      <section id="top" className="gallery-hero">
        <div className="hero-copy">
          <p className="gallery-kicker">{resume.eyebrow}</p>
          <h1>{resume.heroHeading}</h1>
          <p className="hero-name">{resume.name}</p>
          <p className="hero-title">{resume.title}</p>
          <div className="hero-actions">
            <a href="#experience" className="primary-action">
              View My Work
            </a>
            <a href={`mailto:${resume.email}`} className="ghost-action">
              {resume.email}
            </a>
          </div>
        </div>

        <div className="hero-installation" aria-hidden="true">
          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />
          <div className="hero-glow hero-glow-center" />
        </div>
      </section>

      <section id="experience" className="gallery-section">
        <div className="section-heading">
          <h3 className="gallery-kicker">Portfolio</h3>
          <h2>A multidisciplinary background applied to real business needs</h2>
        </div>

        <div className="exhibit-rail">
          <button
            type="button"
            className="exhibit-arrow exhibit-arrow-left"
            aria-label="Scroll experience left"
            onClick={() => scrollExhibits("left")}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15 5 8 12l7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div ref={exhibitRailRef} className="exhibit-wall">
            {resume.experience.map((item, index) => (
              <Link
                key={`${item.role}-${item.period}`}
                href={`/experience/${item.slug}`}
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
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="exhibit-arrow exhibit-arrow-right"
            aria-label="Scroll experience right"
            onClick={() => scrollExhibits("right")}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="m9 5 7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
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
        <div className="contact-copy">
          <p className="gallery-kicker">Available For</p>
          <h2>
            Support for small businesses, clinics, and growing teams that need
            stronger processes, better service, and more organized day-to-day
            operations
          </h2>

          <p className="contact-intro">
            Use the form to describe your inquiry, project, or support needs.
          </p>
        </div>

        <div className="contact-links">
          <button
            type="button"
            className="primary-action"
            onClick={() => setIsContactOpen(true)}
          >
            Open Contact Form
          </button>
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

      {isContactOpen ? (
        <div
          className="contact-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div
            className="contact-modal-backdrop"
            onClick={() => setIsContactOpen(false)}
          />
          <div className="contact-modal-panel">
            <div className="contact-modal-header">
              <div>
                <p className="gallery-kicker">Contact</p>
                <h2 id="contact-modal-title">Tell me about your inquiry</h2>
              </div>
              <button
                type="button"
                className="contact-modal-close"
                onClick={() => setIsContactOpen(false)}
                aria-label="Close contact form"
              >
                Close
              </button>
            </div>

            <form className="contact-form">
              <div className="contact-form-grid">
                <label className="contact-field">
                  <span>Name</span>
                  <input type="text" name="name" autoComplete="given-name" />
                </label>

                <label className="contact-field">
                  <span>Surname</span>
                  <input
                    type="text"
                    name="surname"
                    autoComplete="family-name"
                  />
                </label>
              </div>

              <label className="contact-field">
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" />
              </label>

              <label className="contact-field">
                <span>Inquiry</span>
                <textarea name="inquiry" maxLength={2000} rows={8} />
              </label>

              <div className="contact-form-footer">
                <p>Maximum 2000 characters.</p>
                <button type="submit" className="primary-action">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <footer className="gallery-footer">
        <span>&copy; {new Date().getFullYear()} {resume.name}</span>
        <span>caromarchioni</span>
      </footer>
    </main>
  );
}
