import { experiences, education } from "../data/experience";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <span className="section-label">Career Path</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold mb-5 text-[var(--text-primary)]">
            Experience
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, i) => (
            <ScrollReveal key={`${exp.company}-${exp.date}`} delay={0.05 * i}>
              <div className="timeline-item px-6 py-7 sm:px-8 sm:py-7 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[12px] transition-all duration-300 hover:bg-[var(--card-bg-hover)] hover:border-[var(--card-border-hover)] hover:translate-x-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-full text-[0.78rem] font-semibold text-[var(--accent-2)] mb-3 tracking-[0.5px]">
                  {exp.date}
                </span>
                <h3 className="font-heading text-[1.2rem] font-bold text-[var(--text-primary)] mb-1">
                  {exp.role}
                </h3>
                <p className="text-[0.95rem] text-[var(--accent-1)] mb-3.5 font-medium">
                  {exp.company}
                </p>
                <div className="timeline-desc text-[var(--text-secondary)] text-[0.92rem] leading-relaxed">
                  <ul className="mt-2.5 pl-0">
                    {exp.descriptions.map((desc, j) => (
                      <li key={j}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education */}
        <ScrollReveal className="mt-16 mb-16">
          <span className="section-label">Education</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold mb-5 text-[var(--text-primary)]">
            Academic Background
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 mt-10">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.school} delay={0.1 * i}>
              <div className="px-6 py-7 sm:px-8 sm:py-7 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[12px] transition-all duration-300 hover:bg-[var(--card-bg-hover)] hover:border-[var(--card-border-hover)]">
                <h3 className="font-heading text-[1.1rem] font-bold text-[var(--text-primary)] mb-1">
                  {edu.degree}
                </h3>
                <p className="text-[0.95rem] text-[var(--accent-1)] mb-2">
                  {edu.school}
                </p>
                <p className="text-[0.82rem] text-[var(--text-muted)] mb-3">
                  {edu.date}
                </p>
                <p className="text-[0.9rem] text-[var(--text-secondary)] leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
