import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/wardrobe.css";

export default function WardrobeIntro({ onComplete }) {
  const [phase, setPhase] = useState("clothes_sliding"); // "clothes_sliding" -> "closing" -> "complete"

  useEffect(() => {
    // Step 1: Clothes slide inside wardrobe for 2.8s, then doors close
    const closeTimer = setTimeout(() => {
      setPhase("closing");
    }, 2800);

    // Step 2: Doors remain closed for 1.5s, then finish intro
    const completeTimer = setTimeout(() => {
      setPhase("complete");
      if (onComplete) onComplete();
    }, 4500);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (phase === "complete") return null;

  return (
    <AnimatePresence>
      <motion.div
        className="wardrobe-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
      >
        <button
          className="skip-wardrobe-btn"
          onClick={() => {
            setPhase("complete");
            if (onComplete) onComplete();
          }}
        >
          Skip Intro ✕
        </button>

        <div className="wardrobe-frame">
          {/* Base open wardrobe image asset */}
          <img
            src="/images/wardrobe_open.png"
            alt="Wardrobe"
            className="wardrobe-bg-img"
          />

          {/* Wardrobe Interior sliding clothes area */}
          <div className="wardrobe-interior">
            {/* Clothes moving in a line on hangers */}
            <motion.div
              className="clothes-line"
              initial={{ x: "60%" }}
              animate={{ x: "-60%" }}
              transition={{ duration: 3.5, ease: "linear" }}
            >
              {/* Item 1: Tailored Blazer */}
              <div className="hanger-item">
                <svg className="hanger-hook" viewBox="0 0 40 30">
                  <path d="M20,28 C20,15 28,12 28,6 C28,2 24,0 20,0 C16,0 12,2 12,6" fill="none" stroke="#d4af37" strokeWidth="2.5"/>
                  <path d="M5,28 L35,28" stroke="#d4af37" strokeWidth="2.5"/>
                </svg>
                <div className="cloth-graphic blazer">
                  <div className="blazer-collar" />
                  <div className="blazer-button" />
                </div>
              </div>

              {/* Item 2: Silk Slip Dress */}
              <div className="hanger-item">
                <svg className="hanger-hook" viewBox="0 0 40 30">
                  <path d="M20,28 C20,15 28,12 28,6 C28,2 24,0 20,0 C16,0 12,2 12,6" fill="none" stroke="#d4af37" strokeWidth="2.5"/>
                  <path d="M5,28 L35,28" stroke="#d4af37" strokeWidth="2.5"/>
                </svg>
                <div className="cloth-graphic dress">
                  <div className="dress-strap-l" />
                  <div className="dress-strap-r" />
                </div>
              </div>

              {/* Item 3: Oversized Leather Jacket */}
              <div className="hanger-item">
                <svg className="hanger-hook" viewBox="0 0 40 30">
                  <path d="M20,28 C20,15 28,12 28,6 C28,2 24,0 20,0 C16,0 12,2 12,6" fill="none" stroke="#d4af37" strokeWidth="2.5"/>
                  <path d="M5,28 L35,28" stroke="#d4af37" strokeWidth="2.5"/>
                </svg>
                <div className="cloth-graphic jacket">
                  <div className="jacket-zipper" />
                </div>
              </div>

              {/* Item 4: Trench Coat */}
              <div className="hanger-item">
                <svg className="hanger-hook" viewBox="0 0 40 30">
                  <path d="M20,28 C20,15 28,12 28,6 C28,2 24,0 20,0 C16,0 12,2 12,6" fill="none" stroke="#d4af37" strokeWidth="2.5"/>
                  <path d="M5,28 L35,28" stroke="#d4af37" strokeWidth="2.5"/>
                </svg>
                <div className="cloth-graphic trench">
                  <div className="trench-belt" />
                </div>
              </div>

              {/* Item 5: Cashmere Knit Sweater */}
              <div className="hanger-item">
                <svg className="hanger-hook" viewBox="0 0 40 30">
                  <path d="M20,28 C20,15 28,12 28,6 C28,2 24,0 20,0 C16,0 12,2 12,6" fill="none" stroke="#d4af37" strokeWidth="2.5"/>
                  <path d="M5,28 L35,28" stroke="#d4af37" strokeWidth="2.5"/>
                </svg>
                <div className="cloth-graphic sweater">
                  <div className="sweater-neck" />
                </div>
              </div>
            </motion.div>

            <div className="wardrobe-tagline">
              <span>Curating Your Signature Aesthetic...</span>
            </div>
          </div>

          {/* Left Door Asset */}
          <motion.div
            className="door door-left"
            initial={{ rotateY: -85 }}
            animate={{ rotateY: phase === "closing" ? 0 : -85 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <img
              src="/images/wardrobe_door_left.png"
              alt="Wardrobe Left Door"
              className="door-img"
            />
          </motion.div>

          {/* Right Door Asset */}
          <motion.div
            className="door door-right"
            initial={{ rotateY: 85 }}
            animate={{ rotateY: phase === "closing" ? 0 : 85 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <img
              src="/images/wardrobe_door_right.png"
              alt="Wardrobe Right Door"
              className="door-img"
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
