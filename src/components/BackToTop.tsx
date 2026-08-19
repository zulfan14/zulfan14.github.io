import { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 w-11 h-11 rounded-full accent-gradient text-white flex items-center justify-center text-xl z-[999] border-none cursor-pointer shadow-[0_4px_20px_var(--color-accent-glow)] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--color-accent-glow)] ${
        visible
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-2.5"
      }`}
    >
      <BiArrowToTop />
    </button>
  );
}
