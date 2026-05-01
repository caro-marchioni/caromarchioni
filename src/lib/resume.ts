type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  details: string;
};

type SocialLink = {
  label: string;
  href: string;
  image: string;
};

type ResumeProfile = {
  name: string;
  eyebrow: string;
  title: string;
  email: string;
  socials: SocialLink[];
  experience: ExperienceItem[];
  skills: string[];
  highlights: string[];
};

export const resume: ResumeProfile = {
  name: "Carolina Marchioni Reyes",
  eyebrow: "Quality Assurance Services & Product Support",
  title:
    "Product-minded quality engineer creating elegant, fast, and approachable solutions.",
  email: "carolina.marchioni@gmail.com",
  socials: [
    {
      label: "LinkedIn",
      image: "linkedin-icon.png",
      href: "https://www.linkedin.com/in/carolina-mr/",
    },
    {
      label: "Instagram",
      image: "instagram-icon.png",
      href: "https://www.instagram.com/",
    },
    {
      label: "Gmail",
      image: "gmail-icon.png",
      href: "mailto:carolina.marchioni@gmail.com",
    },
  ],
  experience: [
    {
      role: "Sr. Manual QA Analyst - Jr. Automation Engineer",
      company: "FX Digital",
      period: "Jan 2025 - Present",
      details:
        "Building polished quality assurance processes and automation suites for a variety of clients, including startups and agencies.",
    },
    {
      role: "Sr. Manual QA Analyst",
      company: "Gurpo Digital",
      period: "May 2024 - Oct 2024",
      details:
        "Shipped responsive interfaces, design systems, and customer-facing workflows focused on clarity and speed.",
    },
    {
      role: "Sr. Manual QA Analyst",
      company: "Revolt Digital",
      period: "Dec 2021 - May 2024",
      details:
        "Led communication-heavy work across stakeholders, timelines, and service details with strong follow-through.",
    },
    {
      role: "QA/QC - Testing Engineer & Support Specialist",
      company: "Learnlight",
      period: "Apr 2019 - Dec 2021",
      details:
        "Led communication-heavy work across stakeholders, timelines, and service details with strong follow-through.",
    },
      {
      role: "Jr. QA/QC Analyst",
      company: "Globant",
      period: "Jun 2011 - Sep 2013",
      details:
        "Led communication-heavy work across stakeholders, timelines, and service details with strong follow-through.",
    },
  ],
  skills: [
    "Problem Solving",
    "Quality Assurance",
    "Digital Business Management",
    "Tailwind CSS",
    "Product UX",
    "Content Strategy",
    "Client Communication",
    "Project Delivery",
  ],
  highlights: [
    "Translates ambiguous goals into clean, usable processes that improve user and client experience.",
    "Balances visual polish with maintainable implementation.",
    "Comfortable owning projects from first brief to shipped release.",
  ],
};
