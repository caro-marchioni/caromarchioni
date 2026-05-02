"use client";

import { useRef, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import Link from "next/link";
import { GalleryNav } from "@/app/gallery-nav";
import { resume } from "@/lib/resume";

const exhibitTilt = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg"];
const accentColors = ["#cbb7a6", "#bab3cb", "#b9cbb3", "#c7cbb3", "#cbb3c7"];

const EXPERIENCE_PAGE_SIZE = 5;
const EMAILJS_PUBLIC_KEY = "U693Nh1mEKawPbYuK";
const EMAILJS_SERVICE_ID = "service_of9vlm2";
const EMAILJS_TEMPLATE_ID = "template_autoreply";

type EmailJsClient = {
  init: (publicKey: string) => void;
  send: (
    serviceId: string,
    templateId: string,
    templateParams: Record<string, string>
  ) => Promise<unknown>;
};

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const [inquiryStatus, setInquiryStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const exhibitRailRef = useRef<HTMLDivElement>(null);

  const showExperienceArrows =
    resume.experience.length > EXPERIENCE_PAGE_SIZE;

  function scrollExhibits(direction: "left" | "right") {
    const rail = exhibitRailRef.current;
    if (!rail) return;

    const gap = parseFloat(getComputedStyle(rail).columnGap || "0") || 0;
    const amount = rail.clientWidth + gap;
    rail.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  async function handleInquirySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const emailjsClient = (window as Window & {
      emailjs?: EmailJsClient;
    }).emailjs;

    if (!emailjsClient) {
      setInquiryStatus({
        type: "error",
        message: "The contact form is temporarily unavailable.",
      });
      return;
    }

    const templateParams = {
      firstName,
      lastName,
      email,
      message,
    };

    setIsSubmittingInquiry(true);
    setInquiryStatus({ type: "idle", message: "" });

    try {
      emailjsClient.init(EMAILJS_PUBLIC_KEY);
      await emailjsClient.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      form.reset();
      setInquiryStatus({
        type: "success",
        message: "Inquiry sent successfully.",
      });
      setIsContactOpen(false);
      setIsThankYouOpen(true);
      window.setTimeout(() => {
        setIsThankYouOpen(false);
        const topSection = document.getElementById("top");
        if (topSection) {
          topSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 2200);
    } catch (error) {
      setInquiryStatus({
        type: "error",
        message:
          error instanceof Error && error.message
            ? error.message
            : "There was a problem sending your message. Please try again.",
      });
    } finally {
      setIsSubmittingInquiry(false);
    }
  }

  return (
    <main className="gallery-shell min-h-screen overflow-hidden bg-[#12121a] text-white">
      <div className="gallery-backdrop" />
      <div className="gallery-grain" />

      <GalleryNav />

      <section id="top" className="gallery-hero">
        <div className="hero-copy">
          <p className="hero-name">{resume.name}</p>
          <h1>{resume.heroHeading}</h1>
          <p className="gallery-kicker">{resume.eyebrow}</p>
          <p className="hero-title">{resume.title}</p>
          <div className="hero-actions">
            <Link href="/about" className="primary-action">
              Get to know me
            </Link>
          </div>
          <div className="hero-proof-strip" aria-label="Core focus areas">
            <span>Operations</span>
            <span>Client Experience</span>
            <span>Quality</span>
            <span>Training</span>
          </div>
        </div>

        <div className="hero-installation" aria-hidden="true">
          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />
          <div className="hero-glow hero-glow-center" />
        </div>
      </section>

      <section id="experience" className="gallery-section" aria-labelledby="experience-section-title">
        <div className="section-heading">
          <h3 className="gallery-kicker">Portfolio</h3>
          <h2 id="experience-section-title">
            A multidisciplinary background applied to real business needs
          </h2>
        </div>

        <div className="exhibit-rail">
          {showExperienceArrows ? (
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
          ) : null}

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

          {showExperienceArrows ? (
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
          ) : null}
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
        <div className="contact-panel">
          <p className="gallery-kicker">Available For</p>
          <h2>Support for businesses and teams operations</h2>
          <p className="contact-intro">
            Share your doubts, project or support need and I will get back to
            you with the next steps
          </p>
          <div className="contact-links">
            <button
              type="button"
              className="primary-action contact-primary-action"
              onClick={() => setIsContactOpen(true)}
            >
              Lets Get In Touch
            </button>
            <div className="contact-socials">
              <p className="contact-socials-label">More Contact Options</p>
              <div className="contact-socials-list">
                {resume.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="contact-social-link"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
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
                <h2 id="contact-modal-title">Submit your concern</h2>
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

            <form className="contact-form" onSubmit={handleInquirySubmit}>
              <div className="contact-form-grid">
                <label className="contact-field">
                  <span>First Name</span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                  />
                </label>

                <label className="contact-field">
                  <span>Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </label>
              </div>

              <label className="contact-field">
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" />
              </label>

              <label className="contact-field">
                <span>How could I help you?</span>
                <textarea name="message" maxLength={2000} rows={8} />
              </label>

              <div className="contact-form-footer">
                <p className={`contact-form-status contact-form-status-${inquiryStatus.type}`}>
                  {inquiryStatus.type === "idle"
                    ? "Maximum 2000 characters."
                    : inquiryStatus.message}
                </p>
                <button
                  type="submit"
                  className="primary-action"
                  disabled={isSubmittingInquiry}
                >
                  {isSubmittingInquiry ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {isThankYouOpen ? (
        <div className="contact-modal" role="status" aria-live="polite">
          <div className="contact-modal-backdrop" />
          <div className="contact-modal-panel thank-you-panel">
            <p className="gallery-kicker">Thank You</p>
            <h2>Your inquiry has been sent.</h2>
            <p className="contact-intro">
              Thank you for reaching out. I will review your message and get
              back to you soon.
            </p>
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
