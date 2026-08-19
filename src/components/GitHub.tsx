import ScrollReveal from "./ScrollReveal";

export default function GitHub() {
  return (
    <section id="github" className="py-24 relative">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <span className="section-label">Open Source</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold mb-5 text-[var(--text-primary)]">
            GitHub Contributions
          </h2>
          <p className="text-[var(--text-secondary)] text-[1.05rem] max-w-[600px] leading-relaxed">
            My daily coding activity and open-source contributions.
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* Heatmap Card */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[var(--card-bg)] rounded-[20px] border border-[var(--card-border)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col min-w-0">
              <div className="mb-5">
                <h5 className="text-[0.85rem] font-bold tracking-[2px] text-[var(--text-primary)] uppercase mb-1">
                  GITHUB HEATMAP
                </h5>
                <p className="text-[0.8rem] text-[var(--accent-1)] font-semibold m-0">
                  LIVE ACTIVITY
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center overflow-x-auto w-full">
                <img
                  src="https://ghchart.rshah.org/10b981/zulfan14"
                  alt="Zulfan's GitHub Contribution Graph"
                  className="min-w-[600px] md:min-w-[500px] w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Streak Stats Card */}
          <ScrollReveal delay={0.2}>
            <div className="bg-[var(--card-bg)] rounded-[20px] border border-[var(--card-border)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col min-w-0">
              <div className="mb-5">
                <h5 className="text-[0.85rem] font-bold tracking-[2px] text-[var(--text-primary)] uppercase mb-1">
                  GITHUB SUMMARY
                </h5>
                <p className="text-[0.8rem] text-[var(--accent-1)] font-semibold m-0">
                  STREAK STATS
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center w-full">
                {/* Light Mode Streak */}
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=zulfan14&theme=transparent&hide_border=true&ring=10b981&fire=10b981&currStreakNum=0f172a&sideNums=0f172a&currStreakLabel=475569&sideLabels=475569&dates=475569"
                  alt="Zulfan's GitHub Streak Stats"
                  className="w-full max-w-[400px] hide-in-dark"
                  loading="lazy"
                />
                {/* Dark Mode Streak */}
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=zulfan14&theme=transparent&hide_border=true&ring=10b981&fire=10b981&currStreakNum=ffffff&sideNums=ffffff&currStreakLabel=9ca3af&sideLabels=9ca3af&dates=6b7280"
                  alt="Zulfan's GitHub Streak Stats"
                  className="w-full max-w-[400px] hide-in-light"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
