import { useState, useEffect } from "react";

export function useScrollspy(sectionIds: string[], offset = 200): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY + offset;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollY >= el.offsetTop) {
          setActiveId(sectionIds[i]);
          return;
        }
      }
      setActiveId(sectionIds[0] || "");
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  useEffect(() => {
    if (activeId) {
      const path = activeId === "hero" ? "/" : `/${activeId}`;
      if (window.location.pathname !== path) {
        window.history.replaceState(null, "", path);
      }
    }
  }, [activeId]);

  return activeId;
}
