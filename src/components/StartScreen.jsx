import { motion } from "framer-motion";
import "../styles/global.css";

export default function StartScreen({ onStart }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <div className="landing-wrapper">
      <div className="ambient-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <motion.div
        className="landing-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="landing-eyebrow" variants={itemVariants}>
          THE AESTHETIC ALGORITHM
        </motion.p>
        
        <motion.h1 className="landing-title" variants={itemVariants}>
          Discover Your <br />
          <span className="italic-serif">Fashion Identity</span>
        </motion.h1>
        
        <motion.p className="landing-subtitle" variants={itemVariants}>
          Not trends. Not rules. An editorial curation of who you already are.
        </motion.p>

        <motion.button
          className="explore-btn landing-btn"
          variants={itemVariants}
          whileHover={{ scale: 1.03, letterSpacing: "2px" }}
          transition={{ duration: 0.3 }}
          onClick={onStart}
        >
          Begin the Journey
        </motion.button>
      </motion.div>
    </div>
  );
}