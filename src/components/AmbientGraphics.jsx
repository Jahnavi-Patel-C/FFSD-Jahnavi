import { motion } from "framer-motion";

export default function AmbientGraphics() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden"
      }}
    >
      {/* Graphic 1: Vintage Dress Form Silhouette (Top-Left) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.18, y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "6%",
          left: "4%",
          width: "140px",
          height: "240px",
          color: "#3F1D0E"
        }}
      >
        <svg viewBox="0 0 100 200" fill="currentColor">
          {/* Dress Form Torso */}
          <path d="M40,30 C30,35 25,50 25,75 C25,100 35,115 35,140 L65,140 C65,115 75,100 75,75 C75,50 70,35 60,30 C55,25 45,25 40,30 Z M50,15 L50,30 M50,140 L50,195 M35,195 L65,195" 
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <ellipse cx="50" cy="15" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </motion.div>

      {/* Graphic 2: Measuring Tape Wave Accent (Bottom-Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "5%",
          right: "3%",
          width: "220px",
          height: "160px",
          color: "#A2663C"
        }}
      >
        <svg viewBox="0 0 200 150" fill="none" stroke="currentColor">
          <path d="M10,120 Q60,30 110,90 T190,40" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M15,125 Q65,35 115,95 T195,45" strokeWidth="1" opacity="0.6" />
          <circle cx="110" cy="90" r="4" fill="currentColor" />
          <circle cx="190" cy="40" r="4" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Graphic 3: Editorial Geometric Sketch Ring (Top-Right) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12, rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "8%",
          right: "6%",
          width: "160px",
          height: "160px",
          color: "#3F1D0E"
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="50" cy="50" r="45" strokeDasharray="2 6" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.5" />
          <polygon points="50,10 90,80 10,80" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Graphic 4: Fabric Swatch / Thread Spindle Sketch (Bottom-Left) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.16, y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "8%",
          left: "5%",
          width: "130px",
          height: "130px",
          color: "#6f4324"
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="25" y="20" width="50" height="60" rx="4" strokeWidth="2"/>
          <line x1="25" y1="35" x2="75" y2="35" strokeDasharray="3 3"/>
          <line x1="25" y1="50" x2="75" y2="50" strokeDasharray="3 3"/>
          <line x1="25" y1="65" x2="75" y2="65" strokeDasharray="3 3"/>
          <path d="M75,65 Q90,80 60,95" strokeWidth="1.5"/>
        </svg>
      </motion.div>
    </div>
  );
}
