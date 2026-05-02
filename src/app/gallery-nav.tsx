"use client";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "#top", label: "Home" },
  { href: "#experience", label: "Work" },
];

type GalleryNavProps = {
  onOpenContact: () => void;
};

export function GalleryNav({ onOpenContact }: GalleryNavProps) {
  return (
    <nav className="gallery-nav">
      <div className="gallery-nav-brand">
        {navItems.slice(0, 1).map((item) => (
          <a key={item.label} href={item.href} className="gallery-link gallery-nav-name">
            <span className="gallery-nav-mark">CMR</span>
            <span className="gallery-link-label">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="gallery-nav-actions">
        {navItems.slice(1).map((item) => (
          <a key={item.label} href={item.href} className="gallery-link">
            <span className="gallery-link-label">{item.label}</span>
          </a>
        ))}

        <button type="button" onClick={onOpenContact} className="gallery-connect">
          Contact
        </button>
      </div>
    </nav>
  );
}
