import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaJs,
  FaPython,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa6";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "#61DAFB", delay: 0 },
  { Icon: FaNode, color: "#339933", delay: 0.2 },
  { Icon: SiNextdotjs, color: "#000000", delay: 0.4 },
  { Icon: FaJs, color: "#F7DF1E", delay: 0.6 },
  { Icon: SiMongodb, color: "#47A248", delay: 0.8 },
  { Icon: SiExpress, color: "#000000", delay: 1 },
  { Icon: FaPython, color: "#3776AB", delay: 1.2 },
  { Icon: FaGitAlt, color: "#F05032", delay: 1.4 },
  { Icon: FaFigma, color: "#F24E1E", delay: 1.6 },
];

const FloatingIcons = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map(({ Icon, color, delay }, index) => {
        const x = (index * 11) % 100;
        const y = (index * 7) % 100;
        const duration = 20 + (index % 5) * 5;

        return (
          <motion.div
            key={index}
            className="absolute opacity-10 hover:opacity-30 transition-opacity"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            <Icon size={32} color={color} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;

