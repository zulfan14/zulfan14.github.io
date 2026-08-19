import { skills } from "../data/skills";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[var(--bg-secondary)]">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <span className="section-label">Tech Stack</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold mb-5 text-[var(--text-primary)]">
            Skills & Technologies
          </h2>
          <p className="text-[var(--text-secondary)] text-[1.05rem] max-w-[600px] leading-relaxed">
            Technologies and tools I use to build robust backend systems and web
            applications.
          </p>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <ScrollReveal
                key={skill.name}
                delay={0.05 * (i % 4)}
              >
                <div className="group flex flex-col items-center gap-3 px-4 py-7 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[12px] transition-all duration-300 cursor-default text-center hover:bg-[var(--card-bg-hover)] hover:border-[var(--card-border-hover)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                  <div className="w-12 h-12 flex items-center justify-center rounded-[8px] bg-white/[0.05] text-2xl transition-all duration-300 group-hover:accent-gradient group-hover:text-white">
                    <Icon />
                  </div>
                  <span className="text-[0.85rem] font-semibold text-[var(--text-primary)] tracking-[0.3px]">
                    {skill.name}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
