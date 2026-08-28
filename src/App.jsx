import { useEffect, useState } from "react";
import { searchProducts } from "./services/serpapi";
import { AnimatePresence, motion } from "framer-motion";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ResultPage from "./components/ResultPage";
import ProgressBar from "./components/ProgressBar";
import { questions } from "./data/questions";
import PersonaPage from "./components/PersonaPage";
import ShopPage from "./components/ShopPage";
import WardrobeIntro from "./components/WardrobeIntro";
import AmbientGraphics from "./components/AmbientGraphics";
import { getBestMatchingPersona } from "./services/personaEngine";
import "./styles/global.css";

function App() {
  // ✅ STATES
  const [showIntro, setShowIntro] = useState(true);
  const [step, setStep] = useState("start");
  const [index, setIndex] = useState(0);
  const [traits, setTraits] = useState({});
  const [selectedOptionIds, setSelectedOptionIds] = useState([]);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [savedPersonas, setSavedPersonas] = useState(() => {
    const saved = localStorage.getItem("savedPersonas");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ HANDLE ANSWER
  const handleAnswer = (trait, optionId) => {
    setTraits((prev) => ({
      ...prev,
      [trait]: (prev[trait] || 0) + 1,
    }));

    if (optionId) {
      setSelectedOptionIds((prev) => [...prev, optionId]);
    }

    if (index + 1 < questions.length) {
      setIndex((prev) => prev + 1);
    } else {
      setStep("result");
    }
  };

  // ✅ RESULT LOGIC — Modular Weighted Scoring Engine with 13 Personas
  const getResult = () => {
    if (selectedOptionIds.length > 0) {
      return getBestMatchingPersona(selectedOptionIds);
    }
    return getBestMatchingPersona(traits);
  };

  // Reset quiz state
  const handleRestart = () => {
    setIndex(0);
    setTraits({});
    setSelectedOptionIds([]);
    setSelectedPersona(null);
    setStep("start");
  };

  // ✅ UI RENDER
  return (
    <>
      {showIntro && (
        <WardrobeIntro onComplete={() => setShowIntro(false)} />
      )}

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
            style={{ position: "relative", minHeight: "100vh" }}
          >
            <AmbientGraphics />
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
            onExplore={async () => {
              const persona = getResult();

              try {
                const primaryItem = persona.wardrobeEssentials?.[0] || persona.name;
                const query = `women ${primaryItem}`;

                const products = await searchProducts(query);

                setSelectedPersona({
                  ...persona,
                  products: products.shopping_results || []
                });
              } catch (error) {
                console.error(error);

                // fallback if API fails
                setSelectedPersona(persona);
              }

              setStep("persona");
            }}
            onRestart={handleRestart}
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
            persona={selectedPersona || getResult()}
            traits={traits}
            onBack={() => {
              setStep("result");
            }}
            onShop={() => setStep("shop")}
            onSave={() => {
              const current = selectedPersona || getResult();
              if (!savedPersonas.find((p) => p.id === current.id)) {
                const newSaved = [...savedPersonas, current];
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
    </>
  );
}

export default App;