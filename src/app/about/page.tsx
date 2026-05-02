import Link from "next/link";
import { SecondaryNav } from "@/app/secondary-nav";
import { resume } from "@/lib/resume";

export default function AboutPage() {
  return (
    <main className="gallery-shell min-h-screen bg-[#12121a] text-white">
      <div className="gallery-backdrop" />
      <div className="gallery-grain" />
      <SecondaryNav />

      <section className="detail-page">
        <Link href="/" className="gallery-link detail-back-link">
          <svg
            className="detail-back-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M15 5 8 12l7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to home
        </Link>

        <header className="detail-header">
          <p className="gallery-kicker">About Me</p>
          <h1>{resume.name}</h1>
          <p className="detail-company">{resume.eyebrow}</p>
          <p className="detail-summary">{resume.aboutSummary}</p>
        </header>

        <section className="detail-placeholder">
          <p className="gallery-kicker">Overview</p>
          <h2>A multidisciplinary profile built around people and operations.</h2>
          <div className="about-points">
            {resume.aboutHighlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>
      </section>

      <footer className="gallery-footer">
        <span>&copy; {new Date().getFullYear()} {resume.name}</span>
        <span>caromarchioni</span>
      </footer>
    </main>
  );
}
