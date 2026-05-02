type ExperienceItem = {
  slug: string;
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
  heroHeading: string;
  title: string;
  aboutSummary: string;
  aboutHighlights: string[];
  email: string;
  socials: SocialLink[];
  experience: ExperienceItem[];
  skills: string[];
  highlights: string[];
};

export const resume: ResumeProfile = {
  name: "Carolina Marchioni Reyes",
  eyebrow: "People-centered business & operations support",
  heroHeading: "Helping small & medium businesses to thrive",
  title:
    "Supporting busines owners growing teams improve processes, strengthen client experience, and bring more structure to day-to-day operations.",
  aboutSummary:
    "I work across operations, quality, client experience, and team support, with experience spanning digital products, clinics, and small service businesses. My background combines QA, process improvement, psychology, and teaching, which means I tend to approach business problems through both structure and people.",
  aboutHighlights: [
    "Support for small businesses, clinics, and growing teams that need clearer systems and steadier day-to-day operations.",
    "Work shaped by quality oversight, service design, training, and practical coordination across stakeholders.",
    "A people-centered approach informed by a psychology degree and university teaching experience.",
  ],
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
    slug: "fx-digital",
    role: "Sr. QA Analyst & Digital Operations Support",
    company: "FX Digital",
    period: "Jan 2025 - Present",
    details:
      "Support remote product teams and clients by improving delivery quality, streamlining QA processes, and introducing automation. Identify risks early, optimize workflows, and help teams ship faster with fewer issues while maintaining clear communication across stakeholders.",
  },
  {
    slug: "grupo-digital",
    role: "Sr. QA Analyst & Product Support",
    company: "Grupo Digital",
    period: "May 2024 - Oct 2024",
    details:
      "Worked closely with design, product, and development teams to ensure smooth user experiences across responsive interfaces. Helped refine customer-facing workflows, reduce friction, and align product delivery with business goals.",
  },
  {
    slug: "revolt-digital",
    role: "Sr. QA Analyst & Stakeholder Coordinator",
    company: "Revolt Digital",
    period: "Dec 2021 - May 2024",
    details:
      "Acted as a central point of coordination between teams, ensuring clear communication, timely delivery, and high-quality releases. Supported project organization, tracked issues, and improved cross-team alignment in fast-paced environments.",
  },
  {
    slug: "learnlight",
    role: "QA Engineer & Customer Support Specialist",
    company: "Learnlight",
    period: "Apr 2019 - Dec 2021",
    details:
      "Bridged QA and customer support by resolving user issues, improving platform stability, and providing actionable feedback to product teams. Contributed to better user satisfaction while supporting daily operations in a fully digital environment.",
  },
  {
    slug: "globant",
    role: "QA Analyst",
    company: "Globant",
    period: "Jun 2011 - Sep 2013",
    details:
      "Built strong QA foundations by executing test plans, identifying defects, and supporting development teams. Contributed to reliable product releases within structured, high-performance delivery teams.",
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

export function getExperienceBySlug(slug: string) {
  return resume.experience.find((item) => item.slug === slug);
}
