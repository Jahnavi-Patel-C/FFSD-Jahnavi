import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ResultPage from "./components/ResultPage";
import ProgressBar from "./components/ProgressBar";
import { questions } from "./data/questions";
import { personas } from "./data/personas";
import PersonaPage from "./components/PersonaPage";
import "./styles/global.css";
import ShopPage from "./components/ShopPage";
function App() {
  // ✅ STATES
  const [step, setStep] = useState("start");
  const [index, setIndex] = useState(0);
  const [traits, setTraits] = useState({});
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [savedPersonas, setSavedPersonas] = useState(() => {
    const saved = localStorage.getItem("savedPersonas");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ HANDLE ANSWER
  const handleAnswer = (trait) => {
    setTraits((prev) => ({
      ...prev,
      [trait]: (prev[trait] || 0) + 1,
    }));

    if (index + 1 < questions.length) {
      setIndex((prev) => prev + 1);
    } else {
      setStep("result");
    }
  };

  // ✅ RESULT LOGIC
  const getResult = () => {
  const {
    bold = 0,
    subtle = 0,
    structured = 0,
    flowing = 0,
    classic = 0,
    experimental = 0
  } = traits;

  const presence = bold >= subtle ? "bold" : "subtle";
  const form = structured >= flowing ? "structured" : "flowing";
  const style = classic >= experimental ? "classic" : "experimental";

  // 🎯 DIRECT MAPPING (CLEAN + COMPLETE)
  if (presence === "bold" && style === "experimental") {
    return personas.bold_experimental; // Urban Rebel
  }

  if (presence === "subtle" && form === "flowing") {
    return personas.subtle_flowing; // Soft Minimalist
  }

  if (form === "structured" && style === "classic") {
    return personas.structured_classic; // Midnight Architect
  }

  if (form === "flowing" && style === "experimental") {
    return personas.flowing_experimental; // Effortless Muse
  }

  if (presence === "bold" && form === "structured") {
    return personas.bold_structured; // Statement Maker
  }

  // fallback
  return personas.subtle_flowing;
};
  // ✅ UI RENDER
  return (
    <AnimatePresence mode="wait">
      {step === "start" && (
        <motion.div
  key="start"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
          <StartScreen onStart={() => setStep("questions")} />
        </motion.div>
      )}

      {step === "questions" && (
        <motion.div
  key="questions"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
          <ProgressBar current={index + 1} total={questions.length} />
          <QuestionCard
            question={questions[index]}
            onAnswer={handleAnswer}
          />
        </motion.div>
      )}

      {step === "result" && (
  <motion.div
    key="result"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >

    <ResultPage
      persona={getResult()}

      onExplore={() => {
        setSelectedPersona(getResult());
        setStep("persona");
      }}
    />

  </motion.div>
)}

{step === "persona" && (
  <motion.div
    key="persona"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >

    <PersonaPage
      persona={selectedPersona}
      traits={traits}
      onBack={() => {
        setStep("result");
      }}
      onShop={() => setStep("shop")}
      onSave={() => {
        if (!savedPersonas.find(p => p.id === selectedPersona.id)) {
          const newSaved = [...savedPersonas, selectedPersona];
          setSavedPersonas(newSaved);
          localStorage.setItem("savedPersonas", JSON.stringify(newSaved));
          alert("Persona Saved!");
        } else {
          alert("Persona already saved!");
        }
      }}
    />

  </motion.div>
)}

{step === "shop" && (
  <motion.div
    key="shop"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <ShopPage
      persona={selectedPersona}
      onBack={() => setStep("persona")}
    />
  </motion.div>
)}
    </AnimatePresence>
  );
}

export default App;