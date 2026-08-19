import {
  BiChevronDown,
  BiRightArrowAlt,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_400px_1fr] items-center gap-10 relative z-[2]">
        {/* Left Column */}
        <ScrollReveal className="flex flex-col justify-center text-center lg:text-left">
          <div className="w-20 h-1 bg-[var(--text-primary)] mb-6 mx-auto lg:mx-0" />
          <h1 className="font-heading text-[clamp(2.8rem,4.5vw,4.2rem)] font-extrabold leading-[1.1] mb-6 text-[var(--text-primary)]">
            I'm <span className="gradient-text">Zulfan</span>,
            <br />a Web Developer
          </h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-10 max-w-[90%] mx-auto lg:mx-0">
            I am a Backend Developer with experience in building software
            applications. I'm highly enthusiastic and dedicated to efficiently
            solve project problems.
          </p>
          <div>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("about");
              }}
              className="hidden lg:inline-flex items-center justify-center w-16 h-16 bg-[var(--accent-1)] text-white rounded-full text-[32px] transition-all duration-300 hover:translate-y-1.5 hover:bg-[var(--accent-2)] shadow-[0_4px_14px_var(--glow)]"
              aria-label="Scroll down"
            >
              <BiChevronDown />
            </a>
          </div>
        </ScrollReveal>

        {/* Center Column (Image) */}
        <ScrollReveal
          delay={0.1}
          className="flex justify-center items-end h-full order-first lg:order-none"
        >
          <img
            src="/img/bg-hero.png"
            alt="Muhammad Zulfan"
            className="max-h-[75vh] object-cover object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          />
        </ScrollReveal>

        {/* Right Column */}
        <ScrollReveal
          delay={0.2}
          className="flex flex-col justify-center lg:pl-5 text-center lg:text-left"
        >
          {/* About Me Block */}
          <div className="mb-6">
            <h5 className="text-[0.85rem] font-bold tracking-[2px] text-[var(--text-primary)] mb-3 uppercase">
              ABOUT ME
            </h5>
            <p className="text-[0.9rem] text-[var(--text-secondary)] leading-relaxed mb-3">
              I am a Backend Developer with experience in building software
              applications, either independently or as part of a team.
            </p>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("about");
              }}
              className="inline-flex items-center gap-2 text-[0.8rem] font-bold text-[var(--text-primary)] tracking-[1px] uppercase border-b border-black/30 dark:border-white/30 pb-1 transition-all duration-200 hover:text-[var(--accent-1)] hover:border-[var(--accent-1)]"
            >
              LEARN MORE <BiRightArrowAlt className="text-lg" />
            </a>
          </div>

          <div className="h-px bg-[var(--text-primary)]/10 mb-6" />

          {/* My Work Block */}
          <div className="mb-6">
            <h5 className="text-[0.85rem] font-bold tracking-[2px] text-[var(--text-primary)] mb-3 uppercase">
              MY WORK
            </h5>
            <p className="text-[0.9rem] text-[var(--text-secondary)] leading-relaxed mb-3">
              A collection of web applications I've contributed to, showcasing
              my dedication to quality and excellence.
            </p>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("portfolio");
              }}
              className="inline-flex items-center gap-2 text-[0.8rem] font-bold text-[var(--text-primary)] tracking-[1px] uppercase border-b border-black/30 dark:border-white/30 pb-1 transition-all duration-200 hover:text-[var(--accent-1)] hover:border-[var(--accent-1)]"
            >
              BROWSE PORTFOLIO <BiRightArrowAlt className="text-lg" />
            </a>
          </div>

          <div className="h-px bg-[var(--text-primary)]/10 mb-6" />

          {/* Follow Me Block */}
          <div>
            <h5 className="text-[0.85rem] font-bold tracking-[2px] text-[var(--text-primary)] mb-3 uppercase">
              FOLLOW ME
            </h5>
            <div className="flex gap-4 mt-3 justify-center lg:justify-start">
              <a
                href="https://github.com/zulfan14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] text-xl transition-colors duration-200 hover:text-[var(--accent-1)]"
              >
                <BiLogoGithub />
              </a>
              <a
                href="https://www.instagram.com/mhzulfan/?hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] text-xl transition-colors duration-200 hover:text-[var(--accent-1)]"
              >
                <BiLogoInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-zulfan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] text-xl transition-colors duration-200 hover:text-[var(--accent-1)]"
              >
                <BiLogoLinkedin />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
