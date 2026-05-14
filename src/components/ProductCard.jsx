import { motion } from "framer-motion";
import "../styles/global.css";

export default function ProductCard({ product }) {
  return (
    <motion.div 
      className="editorial-product-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="epc-image-container">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="epc-image" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
        <div className="epc-tag">Curated for your aesthetic</div>
      </div>
      <div className="epc-info">
        <h3 className="epc-name">{product.name}</h3>
        <p className="epc-brand">{product.brand}</p>
        <div className="epc-footer">
          <span className="epc-price">{product.price}</span>
          <a 
            href={product.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="epc-button"
          >
            Acquire
          </a>
        </div>
      </div>
    </motion.div>
  );
}
