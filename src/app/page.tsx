import { resume } from "@/lib/resume";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ee] text-[#171512]">
      <section className="relative isolate overflow-hidden border-b border-[#d8d0c3] bg-[#f6f3ee]">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[#d94f30] lg:block" />
        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="flex flex-col px-6 py-6 sm:px-10 lg:px-12">
            <nav className="flex items-center justify-between text-sm font-medium">
              <a href="#top" className="tracking-[0.18em] text-[#51483e]">
                {resume.name.toUpperCase()}
              </a>
              <div className="flex items-center gap-5 text-[#5d544a]">
                <a className="transition hover:text-[#171512]" href="#work">
                  Work
                </a>
                <a className="transition hover:text-[#171512]" href="#contact">
                  Contact
                </a>
              </div>
            </nav>

            <div id="top" className="flex flex-1 items-center py-20">
              <div className="max-w-3xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#d94f30]">
                  {resume.eyebrow}
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#171512] sm:text-7xl lg:text-8xl">
                  {resume.name}
                </h1>
                <p className="mt-8 max-w-2xl text-xl leading-8 text-[#51483e] sm:text-2xl">
                  {resume.title}
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center bg-[#171512] px-6 text-sm font-semibold text-white transition hover:bg-[#342f28]"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#work"
                    className="inline-flex h-12 items-center justify-center border border-[#171512] px-6 text-sm font-semibold text-[#171512] transition hover:bg-white"
                  >
                    View Experience
                  </a>
                </div>
              </div>
            </div>
          </div>

          <aside className="relative flex min-h-[520px] items-end bg-[#d94f30] px-6 py-10 sm:px-10 lg:min-h-screen lg:px-12">
            <div className="absolute left-8 top-8 h-24 w-24 border border-white/50" />
            <div className="absolute right-10 top-20 h-36 w-36 rounded-full border border-white/45" />
            <div className="absolute bottom-32 left-12 h-44 w-44 bg-[#f0b429]" />
            <div className="relative w-full overflow-hidden bg-[#171512] p-6 text-white shadow-2xl sm:p-8">
              <div className="aspect-[4/5] border border-white/15 bg-[linear-gradient(140deg,#f6f3ee_0%,#f6f3ee_44%,#f0b429_44%,#f0b429_66%,#d94f30_66%)]" />
              <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
                <div>
                  <p className="text-3xl font-semibold">4+</p>
                  <p className="mt-1 text-sm text-white/70">Years building</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">8</p>
                  <p className="mt-1 text-sm text-white/70">Core skills</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="work" className="border-b border-[#d8d0c3] px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d94f30]">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Clear thinking, careful execution, useful results.
            </h2>
          </div>
          <div className="space-y-5">
            {resume.experience.map((item) => (
              <article
                key={`${item.role}-${item.period}`}
                className="grid gap-4 border border-[#d8d0c3] bg-[#fffbf5] p-6 sm:grid-cols-[0.28fr_0.72fr] sm:p-7"
              >
                <p className="text-sm font-semibold text-[#d94f30]">
                  {item.period}
                </p>
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#6f6254]">
                    {item.company}
                  </p>
                  <p className="mt-4 leading-7 text-[#51483e]">{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d94f30]">
              Strengths
            </p>
            <div className="mt-8 space-y-4">
              {resume.highlights.map((item) => (
                <p
                  key={item}
                  className="border-l-4 border-[#f0b429] bg-[#fffbf5] px-5 py-4 text-lg leading-8 text-[#342f28]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d94f30]">
              Skills
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {resume.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[#d8d0c3] bg-[#fffbf5] px-4 py-3 text-sm font-semibold text-[#342f28]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#171512] px-6 py-16 text-white sm:px-10 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f0b429]">
              Available For
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              Quality Assurance, Product & Process Enhancements, and Tailored Digital Solutions
            </h2>
          </div>
          <a
            href={`mailto:${resume.email}`}
            className="inline-flex h-12 items-center justify-center bg-white px-6 text-sm font-semibold text-[#171512] transition hover:bg-[#f6f3ee]"
          >
            {resume.email}
          </a>
        </div>
      </section>

      <footer className="border-t border-white/15 bg-[#171512] px-6 py-10 text-white sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
          <div>
            <p className="text-lg font-semibold">{resume.name}</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/65">

            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
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
                className="text-white/75 transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-6">
          <p className="text-sm text-white/55">
            &copy; {new Date().getFullYear()} {resume.name}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
