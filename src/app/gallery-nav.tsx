"use client";

import { SectionLink } from "@/app/section-link";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "#experience", label: "Work" },
];

export function GalleryNav() {
  return (
    <nav className="gallery-nav">
      <div className="gallery-nav-brand">
        <SectionLink
          href="#top"
          className="gallery-nav-control gallery-nav-mark"
          aria-label="Back to top"
        >
          CMR
        </SectionLink>
      </div>

      <div className="gallery-nav-actions">
        {navItems.map((item) => (
          <SectionLink
            key={item.label}
            href={item.href}
            className="gallery-nav-control gallery-link"
          >
            <span className="gallery-link-label">{item.label}</span>
          </SectionLink>
        ))}

        <SectionLink href="#contact" className="gallery-nav-control gallery-connect">
          Contact
        </SectionLink>
      </div>
    </nav>
  );
}
