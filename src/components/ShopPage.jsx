import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { searchProducts } from "../services/serpapi";
import ProductCard from "./ProductCard";
import "../styles/global.css";

export default function ShopPage({ persona, onBack }) {
  const [products, setProducts] = useState(persona?.products || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Self-sufficient: fetch products on mount if not already loaded
  useEffect(() => {
    if (!persona) return;
    if (products && products.length > 0) return; // Already have products

    fetchProducts();
  }, [persona]);

  const fetchProducts = async () => {
    if (!persona) return;

    setLoading(true);
    setError(null);

    try {
      const primaryItem = persona.wardrobeEssentials?.[0] || persona.name;
      const query = `women ${primaryItem} fashion`;

      const data = await searchProducts(query);
      const results = data.shopping_results || [];

      if (results.length > 0) {
        setProducts(results);
      } else {
        setError("No products found for your style. Try again!");
      }
    } catch (err) {
      console.error("Shop fetch error:", err);
      setError("Could not load shopping results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

      {/* Loading State */}
      {loading && (
        <motion.div
          className="shop-loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            padding: "60px 20px",
          }}
        >
          <div className="shop-spinner" style={{
            width: "48px",
            height: "48px",
            border: "3px solid rgba(63, 29, 14, 0.15)",
            borderTopColor: "#3F1D0E",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }} />
          <p style={{ fontSize: "1.1rem", color: "#7A6E63", fontStyle: "italic" }}>
            Curating your perfect pieces...
          </p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </motion.div>
      )}

      {/* Error State */}
      {error && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            textAlign: "center",
            padding: "60px 20px",
          }}
        >
          <p style={{ fontSize: "1.1rem", color: "#7A6E63", marginBottom: "24px" }}>
            {error}
          </p>
          <button
            className="explore-btn"
            onClick={fetchProducts}
            style={{ marginTop: "0" }}
          >
            🔄 Try Again
          </button>
        </motion.div>
      )}

      {/* Products Grid */}
      {!loading && !error && products.length > 0 && (
        <div className="shop-grid">
          {products.map((product, idx) => (
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
      )}

      {/* Empty State — no products, no error, not loading */}
      {!loading && !error && products.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            textAlign: "center",
            padding: "60px 20px",
          }}
        >
          <p style={{ fontSize: "1.1rem", color: "#7A6E63", marginBottom: "24px" }}>
            No curated pieces loaded yet.
          </p>
          <button
            className="explore-btn"
            onClick={fetchProducts}
            style={{ marginTop: "0" }}
          >
            🛍️ Load Shopping Results
          </button>
        </motion.div>
      )}
    </div>
  );
}
