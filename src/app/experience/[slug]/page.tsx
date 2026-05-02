import Link from "next/link";
import { notFound } from "next/navigation";
import { getExperienceBySlug, resume } from "@/lib/resume";

export function generateStaticParams() {
  return resume.experience.map((item) => ({
    slug: item.slug,
  }));
}

type ExperiencePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ExperiencePage({
  params,
}: ExperiencePageProps) {
  const { slug } = await params;
  const item = getExperienceBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="gallery-shell min-h-screen bg-[#12121a] text-white">
      <div className="gallery-backdrop" />
      <div className="gallery-grain" />

      <section className="detail-page">
        <Link href="/#experience" className="gallery-link detail-back-link">
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
          Back to portfolio
        </Link>

        <header className="detail-header">
          <p className="gallery-kicker">{item.period}</p>
          <h1>{item.role}</h1>
          <p className="detail-company">{item.company}</p>
          <p className="detail-summary">{item.details}</p>
        </header>

        <section className="detail-placeholder">
          <p className="gallery-kicker">Case Details</p>
          {/* Write the full story for this role here later: scope, challenges, actions, outcomes, tools, and what you learned. */}
          <h2>This page is ready for the full case study.</h2>
          <p>
            Project details, business context, responsibilities, and measurable
            outcomes can be expanded here as the full case study is developed.
          </p>
        </section>
      </section>
    </main>
  );
}
