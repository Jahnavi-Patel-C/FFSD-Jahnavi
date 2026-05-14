import { motion } from "framer-motion";

export default function QuestionCard({ question, onAnswer }) {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="question-text">{question.question}</h2>

      <div className="options-container">
  {question.options.map((opt, i) => (
    <motion.div
      key={i}
      className="option-card"
      whileTap={{ scale: 0.97 }}
      onClick={() => onAnswer(opt.trait)}
    >
      <img src={opt.image} alt={opt.text} className="option-img" />
      <p className="option-text">{opt.text}</p>
    </motion.div>
  ))}
</div>
    </motion.div>
  );
}