import { motion } from "framer-motion";
import "../styles/global.css";

export default function ProductCard({ product }) {
  const title = product.title || product.name || "Curated Fashion Item";
  const brand = product.source || product.brand || "Curated Store";
  const link = product.product_link || product.link || `https://www.google.com/search?q=${encodeURIComponent(title)}`;

  return (
    <motion.div
      className="editorial-product-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="epc-image-container">
        <motion.img
          src={product.thumbnail || product.image}
          alt={title}
          className="epc-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
        <div className="epc-tag">Curated for your aesthetic</div>
      </div>
      <div className="epc-info">
        <h3 className="epc-name">{title}</h3>
        <p className="epc-brand">{brand}</p>
        <div className="epc-footer">
          <span className="epc-price">{product.price}</span>
          <a
            href={link}
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
