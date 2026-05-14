import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import "../styles/global.css";

export default function ShopPage({ persona, onBack }) {
  if (!persona) return null;

  return (
    <div className="shop-page">
      <button className="back-btn" onClick={onBack}>← Back</button>
      
      <motion.div
        className="shop-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="shop-title">The Boutique</h1>
        <p className="shop-subtitle">A curated selection of signature pieces for the {persona.name}.</p>
      </motion.div>

      <div className="shop-grid">
        {persona.products.map((product, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
