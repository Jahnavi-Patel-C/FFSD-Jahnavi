import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ResultPage({ persona, onExplore, onRestart }) {
  if (!persona) return null;

  useEffect(() => {
    document.body.classList.add("no-glow");
    return () => {
      document.body.classList.remove("no-glow");
    };
  }, []);

  return (
    <div className={`container ${persona.tone || "calm"}`}>
      <div className="result-card">

        {persona.isBlended && (
          <motion.div
            className="blended-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "0.85rem",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              margin: "0 auto 12px auto",
              display: "inline-block",
              border: "1px solid rgba(255, 255, 255, 0.25)"
            }}
          >
            ✨ Blended Persona • {persona.name} + {persona.accentPersona.name} Accent
          </motion.div>
        )}

        <motion.img
          src={persona.image}
          alt={persona.name}
          className="persona-img"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22400%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%232a2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23888888%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%3E' + encodeURIComponent(persona.name) + '%3C%2Ftext%3E%3C%2Fsvg%3E';
          }}
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
          {persona.styles && persona.styles.map((s, i) => (
            <span key={i} className="style-pill">
              {s}
            </span>
          ))}
        </div>

        <div className="result-card-actions">
          <button
            className="explore-btn"
            onClick={onExplore}
          >
            Discover Your Persona
          </button>
          {onRestart && (
            <button
              className="explore-btn retake-btn"
              onClick={onRestart}
            >
              Retake Quiz
            </button>
          )}
        </div>

      </div>
    </div>
  );
}