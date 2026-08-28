import { motion } from "framer-motion";

function PersonaPage({ persona, onBack, traits, onShop, onSave }) {
  if (!persona) return null;

  const totalPoints = Object.values(traits || {}).reduce((a, b) => a + b, 0);
  const traitPercentages = Object.entries(traits || {})
    .map(([key, val]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      percent: totalPoints > 0 ? Math.round((val / totalPoints) * 100) : 0
    }))
    .sort((a, b) => b.percent - a.percent)
    .filter(t => t.percent > 0);

  const paletteMap = {
    Black: "linear-gradient(135deg, #0f0f0f, #2a2a2a)",
    White: "linear-gradient(135deg, #f8f7f3, #dfddd7)",
    Navy: "linear-gradient(135deg, #1c2b52, #0d1630)",
    Grey: "linear-gradient(135deg, #8b8b8b, #5f5f5f)",
    Charcoal: "linear-gradient(135deg, #333333, #1a1a1a)",
    Silver: "linear-gradient(135deg, #e0e0e0, #a6a6a6)",
    "Deep Red": "linear-gradient(135deg, #660000, #330000)",
    "Ruby Red": "linear-gradient(135deg, #8f1029, #4b0614)",
    Gold: "linear-gradient(135deg, #d4af37, #8c6b1f)",
    Beige: "linear-gradient(135deg, #d8cbb8, #bca58b)",
    Ivory: "linear-gradient(135deg, #f6f2ea, #dfd7ca)",
    Cream: "linear-gradient(135deg, #f3ede2, #d8c7af)",
    Taupe: "linear-gradient(135deg, #9f8d7a, #7d6b58)",
    "Dusty Rose": "linear-gradient(135deg, #c9a6a6, #9d7f7f)",
    "Muted Sage": "linear-gradient(135deg, #a8b2a1, #6f7b69)",
    "Soft Brown": "linear-gradient(135deg, #9a7f6b, #705a4a)"
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <motion.div
      className="persona-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <div style={{ display: "flex", gap: "10px" }}>
          {onSave && (
            <button className="back-btn" onClick={onSave} style={{ borderColor: "rgba(255,255,255,0.4)" }}>
              ❤️ Save
            </button>
          )}
          {onShop && (
            <button className="back-btn" onClick={onShop} style={{ background: "#ffffff", color: "#000000" }}>
              🛍️ Shop Looks
            </button>
          )}
        </div>
      </div>

      <motion.img
        src={persona.image}
        alt={persona.name}
        className="persona-hero"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22600%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%232a2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23555555%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%3E' + encodeURIComponent(persona.name) + '%3C%2Ftext%3E%3C%2Fsvg%3E';
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.h1
        className="persona-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {persona.name}
      </motion.h1>

      <motion.p
        className="persona-hook"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {persona.hook}
      </motion.p>

      {persona.isBlended && persona.accentPersona && (
        <motion.div
          className="blended-banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            borderLeft: "4px solid #ffffff",
            padding: "16px 20px",
            borderRadius: "8px",
            margin: "20px 0",
            backdropFilter: "blur(5px)"
          }}
        >
          <h3 style={{ margin: "0 0 6px 0", fontSize: "1.1rem" }}>
            ✨ Blended Style Matrix
          </h3>
          <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.9 }}>
            Your answers reflect a close duality! You hold primary alignment with <strong>{persona.name}</strong> while drawing a strong accent from <strong>{persona.accentPersona.name}</strong> (<em>"{persona.accentPersona.hook}"</em>).
          </p>
        </motion.div>
      )}

      <motion.p
        className="persona-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {persona.longDescription || persona.description}
      </motion.p>

      {/* FASHION DNA */}
      {traitPercentages.length > 0 && (
        <motion.section
          className="persona-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2>Fashion DNA</h2>
          <div className="dna-grid">
            {traitPercentages.map((trait, idx) => (
              <div className="dna-bar-container" key={trait.name}>
                <div className="dna-label">
                  <span>{trait.name}</span>
                  <span>{trait.percent}%</span>
                </div>
                <div className="dna-track">
                  <motion.div
                    className="dna-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${trait.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* OUTFIT INSPIRATION */}
      {persona.gallery && persona.gallery.length > 0 && (
        <motion.section
          className="persona-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2>Outfit Inspiration</h2>
          <div className="masonry-grid">
            {persona.gallery.map((img, idx) => (
              <motion.div
                className="masonry-item"
                key={idx}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={img}
                  alt={`${persona.name} look ${idx + 1}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22600%22%3E%3Crect%20width%3D%22400%22%20height%3D%22600%22%20fill%3D%22%232a2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23555555%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216%22%3E' + encodeURIComponent(persona.name) + ' Look 0' + (idx + 1) + '%3C%2Ftext%3E%3C%2Fsvg%3E';
                  }}
                />
                <div className="masonry-overlay">
                  <span>Look 0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* TRAITS */}
      {persona.traits && (
        <motion.section
          className="persona-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2>Personality Traits</h2>
          <div className="tag-container">
            {persona.traits.map((trait) => (
              <span className="tag" key={trait}>
                {trait}
              </span>
            ))}
          </div>
        </motion.section>
      )}

      {/* COLORS */}
      {persona.colors && (
        <motion.section
          className="persona-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2>Style Palette</h2>
          <div className="palette-grid">
            {persona.colors.map((color) => (
              <div className="color-card" key={color}>
                <div
                  className="color-circle"
                  style={{
                    background: paletteMap[color] || color.toLowerCase()
                  }}
                />
                <p>{color}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* STYLE TIPS */}
      {persona.styleTips && (
        <motion.section
          className="persona-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2>Style Tips</h2>
          <div className="tips-grid">
            {persona.styleTips.map((tip) => (
              <div className="tip-card" key={tip}>
                <p>“{tip}”</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* ESSENTIALS */}
      {persona.wardrobeEssentials && (
        <motion.section
          className="persona-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2>Capsule Wardrobe</h2>
          <div className="essentials-grid">
            {persona.wardrobeEssentials.map((item, index) => (
              <motion.div
                className="essential-card image-backed"
                key={item}
                style={{
                  backgroundImage: persona.wardrobeImages && persona.wardrobeImages[index] ? `url(${persona.wardrobeImages[index]})` : undefined,
                  backgroundColor: "#2a2a2a"
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="essential-overlay"></div>
                <div className="essential-content">
                  <span className="essential-number">0{index + 1}</span>
                  <p>{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

    </motion.div>
  );
}

export default PersonaPage;