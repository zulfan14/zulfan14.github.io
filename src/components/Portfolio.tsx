import { useState } from "react";
import { BiZoomIn, BiLinkExternal } from "react-icons/bi";
import { projects } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Portfolio() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 relative bg-[var(--bg-secondary)]">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <span className="section-label">My Work</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold mb-5 text-[var(--text-primary)]">
            Portfolio
          </h2>
          <p className="text-[var(--text-secondary)] text-[1.05rem] max-w-[600px] leading-relaxed">
            A collection of web applications I've contributed to, showcasing my
            dedication to quality and excellence in development.
          </p>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.title}
              delay={0.08 * (i % 3)}
            >
              <div className="group relative rounded-[20px] overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-[var(--card-border-hover)]">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-[#0a0a0f]/40 to-transparent opacity-0 flex items-end justify-center pb-6 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex gap-3">
                      <button
                        onClick={() => setLightboxImg(project.image)}
                        className="flex items-center justify-center w-11 h-11 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-[10px] border border-white/20 text-white text-lg transition-all duration-200 hover:accent-gradient hover:border-transparent cursor-pointer"
                        aria-label={`Preview ${project.title}`}
                      >
                        <BiZoomIn />
                      </button>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-11 h-11 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-[10px] border border-white/20 text-white text-lg transition-all duration-200 hover:accent-gradient hover:border-transparent"
                          aria-label={`Visit ${project.title}`}
                        >
                          <BiLinkExternal />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h4 className="font-heading text-[1.1rem] font-bold mb-1.5 text-[var(--text-primary)]">
                    {project.title}
                  </h4>
                  <p className="text-[0.85rem] text-[var(--text-muted)] uppercase tracking-[1px] font-medium">
                    {project.category}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <img
            src={lightboxImg}
            alt="Portfolio preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl bg-black/10 dark:bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            onClick={() => setLightboxImg(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
