import Link from "next/link";
import { SectionLink } from "@/app/section-link";

export function SecondaryNav() {
  return (
    <nav className="gallery-nav">
      <div className="gallery-nav-brand">
        <Link href="/" className="gallery-nav-mark" aria-label="Back to home">
          CMR
        </Link>
      </div>

      <div className="gallery-nav-actions">
        <SectionLink href="/#experience" className="gallery-link">
          <span className="gallery-link-label">Work</span>
        </SectionLink>

        <SectionLink href="/#contact" className="gallery-connect">
          Contact
        </SectionLink>
      </div>
    </nav>
  );
}
