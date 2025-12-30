import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
      <div className="flex flex-col gap-2">
        {["about", "work", "contact"].map((section, index) => (
          <a
            key={section}
            href={`#${section}`}
            className="w-3 h-3 rounded-full bg-secondary/50 hover:bg-[#915EFF] transition-colors relative group"
          >
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap capitalize">
              {section}
            </span>
          </a>
        ))}
      </div>

      <div className="w-1 h-32 bg-secondary/20 rounded-full relative overflow-hidden">
        <motion.div
          className="w-full bg-[#915EFF] rounded-full"
          style={{
            height: `${scrollProgress}%`,
          }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;

