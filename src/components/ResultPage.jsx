import { motion } from "framer-motion";
import { useEffect } from "react";


export default function ResultPage({ persona, onExplore }) {
  if (!persona) return null;
    useEffect(() => {
    document.body.classList.add("no-glow");

    return () => {
      document.body.classList.remove("no-glow");
    };
  }, []);

  return (
    <div className={`container ${persona.tone}`}>
      <div className="result-card">

        <motion.img
  src={persona.image}
  alt={persona.name}
  className="persona-img"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
/>

        <motion.h1
          className="persona-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {persona.name}
        </motion.h1>

        <motion.p
          className="persona-hook"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {persona.hook}
        </motion.p>

        <motion.p
          className="persona-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {persona.description}
        </motion.p>

        <div className="style-list">
  {persona.styles.map((s, i) => (
    <span key={i} className="style-pill">
      {s}
    </span>
  ))}
</div>

<button
  className="explore-btn"
  onClick={onExplore}
>
  Discover Your Persona
</button>

      </div>
    </div>
  );
}