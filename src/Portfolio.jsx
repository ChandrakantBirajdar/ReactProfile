import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  MapPin,
  Download,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";

/**
 * Single-file, fully responsive Portfolio component
 * - Tailwind CSS classes for styling
 * - Framer Motion for tasteful animations
 * - Mobile-first nav with smooth scroll
 * - Accessible, keyboard-friendly
 * - Easily customize the DATA object
 *
 * Usage:
 *   1) Ensure Tailwind is set up in your project.
 *   2) Drop this component anywhere and <Portfolio />.
 *   3) Edit the DATA below.
 */

const DATA = {
  name: "Chandraknt",
  role: "Frontend Developer",
  location: "India",
  summary:
    "I craft clean, performant web experiences with React, TypeScript, and Tailwind. I love UI polish, a11y, and shipping fast.",
  heroCTA: {
    primary: { label: "Gmail", href: "#contact" },
    secondary: {
      label: "View Resume",
      href: "https://drive.google.com/file/d/1-X-MeryEktv5W77bwJdA6mGr9dx-HNhG/view?usp=sharing",
    },
  },
  socials: [
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/ChandrakantBirajdar",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/chandrakant-birajdar-82087421a/",
    },
    { label: "Email", icon: Mail, href: "chandrakantbirajdar986.com" },
  ],
  skills: [
    "HTML5",
    "CSS3 / Tailwind",
    "JavaScript / TypeScript",
    "React / Vite",
    "Next.js",
    "Node.js",
    "REST / JSON",
    "Git / GitHub",
    "Responsive Design",
    "Accessibility",
  ],
  projects: [
    {
      title: "UI Component Library",
      description:
        "A reusable, accessible set of headless React components with Tailwind presets and Radix primitives.",
      tech: ["React", "TypeScript", "Tailwind"],
      links: {
        demo: "https://example.com",
        code: "https://github.com/",
      },
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "SaaS Dashboard",
      description:
        "A responsive analytics dashboard with charts, auth, and dark mode. Focus on DX and performance.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      links: {
        demo: "https://example.com",
        code: "https://github.com/",
      },
      image:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Portfolio Starter",
      description:
        "A production-ready portfolio template with SEO, OG images, and content collections.",
      tech: ["Vite", "React", "Tailwind"],
      links: {
        demo: "https://example.com",
        code: "https://github.com/",
      },
      image:
        "https://images.unsplash.com/photo-1529959151276-3f7e4f7c5a49?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  experience: [
    {
      company: "Acme Corp",
      period: "2023 — Present",
      role: "Frontend Engineer",
      bullets: [
        "Built and maintained React apps used by 100k+ monthly users.",
        "Improved Lighthouse performance scores from 78 → 97.",
        "Led migration to Tailwind + headless UI patterns.",
      ],
    },
    {
      company: "Wipro",
      period: "2023 — 2024",
      role: "Project Engineer",
      bullets: [
        "Designed micro-interactions with Framer Motion.",
        "Created an internal component library and docs site.",
        "Collaborated closely with design for design systems.",
      ],
    },
  ],
  education: [
    {
      place: "Padmabhooshan Vasantraodada Patil Institute of Technology,Sangli",
      period: "2018 — 2022",
      program: "B.Tech in Computer Science",
    },
  ],
  contact: {
    email: "chandrakantbirajdar986@gmail.com",
    phone: "+91 7558296756",
    address: "Solpur - 413008 , Maharashtra, India ",
  },
};

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-10 flex items-center gap-3">
        {Icon && (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-muted/40 ring-1 ring-border">
            <Icon className="h-5 w-5" />
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

const NavLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted/60 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
  >
    {label}
  </a>
);

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="bg-gradient-to-b from-background to-muted/40 text-foreground ">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="inline-flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-tr from-blue-500/80 via-cyan-400/80 to-emerald-400/80 text-white shadow-md">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-base font-semibold">{DATA.name}</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <NavLink key={n.href} href={n.href} label={n.label} />
            ))}
          </nav>
          <button
            className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-border md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t bg-background md:hidden">
            <div className="mx-auto max-w-6xl px-4 py-2">
              <div className="flex flex-col gap-1 py-2">
                {nav.map((n) => (
                  <NavLink
                    key={n.href}
                    href={n.href}
                    label={n.label}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--primary)/.10),transparent_70%)]" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-20 sm:py-28 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-foreground/70">
              <Rocket className="h-3.5 w-3.5" /> Available for freelance
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Hi, I'm {DATA.name} —{" "}
              <span className="text-foreground/80">{DATA.role}</span>
            </h1>
            <p className="mt-4 max-w-prose text-base text-foreground/70">
              {DATA.summary}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={DATA.heroCTA.primary.href}
                className="inline-flex items-center gap-2 rounded-2xl bg-foreground px-5 py-2.5 text-background shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {DATA.heroCTA.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={DATA.heroCTA.secondary.href}
                className="inline-flex items-center gap-2 rounded-2xl border px-5 py-2.5 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <Download className="h-4 w-4" /> {DATA.heroCTA.secondary.label}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-foreground/70">
              <MapPin className="h-4 w-4" /> {DATA.location}
            </div>
            <div className="mt-6 flex items-center gap-3">
              {DATA.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-muted/50"
                >
                  <s.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-3xl border shadow-2xl sm:h-72 sm:w-72 md:h-80 md:w-80">
              <img
                alt="Portrait"
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            <div className="mt-4 text-center text-sm text-foreground/70">
              Open to remote and onsite roles
            </div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center pb-6">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About" icon={Sparkles}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-foreground/80">
              I'm a passionate developer who enjoys turning complex ideas into
              delightful user interfaces. I value clear code, meaningful
              animations, and building for everyone.
            </p>
            <p className="mt-4 text-foreground/70">
              When I'm not coding, I'm exploring visual design, reading about
              product strategy, or tinkering with new tools.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {DATA.skills.slice(0, 6).map((skill) => (
              <li
                key={skill}
                className="rounded-xl border px-3 py-2 text-sm text-foreground/80"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" icon={Code2}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {DATA.skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border bg-background p-4 text-center text-sm font-medium shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" icon={ExternalLink}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group overflow-hidden rounded-3xl border bg-background shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-foreground/70">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-2.5 py-1 text-xs text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <a
                    href={p.links.demo}
                    className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Live <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={p.links.code}
                    className="inline-flex items-center gap-1 text-sm text-foreground/70 underline-offset-4 hover:underline"
                  >
                    Code <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={BriefcaseIcon}>
        <div className="space-y-4">
          {DATA.experience.map((e) => (
            <div
              key={e.company}
              className="rounded-2xl border bg-background p-5 shadow-sm"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-base font-semibold">
                    {e.role} · {e.company}
                  </h3>
                  <p className="text-sm text-foreground/60">{e.period}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/80">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" icon={GraduationCapIcon}>
        <div className="grid gap-4 sm:grid-cols-2">
          {DATA.education.map((ed) => (
            <div
              key={ed.place}
              className="rounded-2xl border bg-background p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold">{ed.program}</h3>
              <p className="text-sm text-foreground/80">{ed.place}</p>
              <p className="text-sm text-foreground/60">{ed.period}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={Mail}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-foreground/80">
              Want to collaborate or have a role in mind? Drop a line — I
              usually respond within a day.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <Mail className="h-4 w-4" /> {DATA.contact.email}
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <Phone className="h-4 w-4" /> {DATA.contact.phone}
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <MapPin className="h-4 w-4" /> {DATA.contact.address}
            </div>
          </div>
          <form className="md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border bg-background px-3 py-2 outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-xl border bg-background px-3 py-2 outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium">Message</label>
              <textarea
                rows={5}
                className="w-full rounded-xl border bg-background px-3 py-2 outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                placeholder="Tell me a bit about your project..."
              />
            </div>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-foreground px-5 py-2.5 text-background shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-sm text-foreground/70">
              © {new Date().getFullYear()} {DATA.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {DATA.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-muted/50"
                >
                  <s.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Minimal inline icons (fallbacks) for when lucide-react tree-shaking isn't configured
function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      {...props}
    >
      <path
        d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="3"
        y="7"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function GraduationCapIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      {...props}
    >
      <path
        d="M22 10L12 5 2 10l10 5 5-2.5V17"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 12v4c3 2 9 2 12 0v-4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
