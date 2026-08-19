import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="py-16 pb-8 border-t border-[var(--card-border)]">
      <div className="container">
        <div className="text-center">
          {/* Social */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              {
                href: "https://github.com/zulfan14",
                icon: <BiLogoGithub />,
                label: "GitHub",
              },
              {
                href: "https://www.instagram.com/mhzulfan/?hl=id",
                icon: <BiLogoInstagram />,
                label: "Instagram",
              },
              {
                href: "https://www.linkedin.com/in/muhammad-zulfan/",
                icon: <BiLogoLinkedin />,
                label: "LinkedIn",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--card-border)] text-[var(--text-secondary)] text-base transition-all duration-300 hover:text-white hover:border-[#7c3aed] hover:bg-[#7c3aed]/15 hover:-translate-y-0.5"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[var(--text-muted)] text-[0.85rem]">
            © {year} Muhammad Zulfan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
