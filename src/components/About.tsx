import { BiMap, BiEnvelope, BiCake, BiBook } from "react-icons/bi";
import { useAge } from "../hooks/useAge";
import ScrollReveal from "./ScrollReveal";

const BIRTHDAY = new Date(1998, 10, 6); // November 6, 1998

interface InfoItem {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

export default function About() {
  const age = useAge(BIRTHDAY);

  const infoItems: InfoItem[] = [
    { icon: <BiMap />, label: "Location", value: "Banda Aceh, Indonesia" },
    {
      icon: <BiEnvelope />,
      label: "Email",
      value: "muhammadzulfan48@gmail.com",
    },
    { icon: <BiCake />, label: "Age", value: `${age} years old` },
    {
      icon: <BiBook />,
      label: "Degree",
      value: "Bachelor of Technology Information",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <span className="section-label">About Me</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold mb-5 text-[var(--text-primary)]">
            Backend Developer &<br />
            Operations Manager
          </h2>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
          {/* Photo */}
          <ScrollReveal className="about-image-wrapper max-w-[280px] mx-auto md:mx-0">
            <img
              src="/img/profile.jpeg"
              alt="Muhammad Zulfan"
              className="w-full aspect-square object-cover rounded-[20px] border-2 border-black/10 dark:border-white/10 relative z-[2]"
            />
          </ScrollReveal>

          {/* Text & Info */}
          <div>
            <ScrollReveal>
              <p className="text-[var(--text-secondary)] text-[1.05rem] mb-8 leading-relaxed">
                I am a Backend Developer with experience in building software
                applications, either independently or as part of a team. I am
                highly enthusiastic and dedicated to efficiently solve project
                problems, particularly in the realm of backend development.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item, i) => (
                <ScrollReveal key={item.label} delay={0.1 * (i + 1)}>
                  <div className="flex items-center gap-3.5 px-5 py-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[12px] transition-all duration-300 hover:bg-[var(--card-bg-hover)] hover:border-[var(--card-border-hover)] hover:-translate-y-0.5">
                    <span className="text-xl text-[var(--accent-1)] shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <span className="block text-[0.78rem] text-[var(--text-muted)] uppercase tracking-[1px] font-semibold">
                        {item.label}
                      </span>
                      <span className="text-[0.95rem] text-[var(--text-primary)] font-medium">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
