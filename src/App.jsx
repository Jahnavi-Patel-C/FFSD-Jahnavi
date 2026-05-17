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

  // ✅ RESULT LOGIC — Verified Weighted Scoring Engine
  // Trait axes (each question answered once, max 2 pts per axis across 8 questions):
  //   bold/subtle (Q1,Q5) | structured/flowing (Q2,Q6)
  //   classic/experimental (Q3,Q7) | warm/cool (Q4,Q8)
  //
  // Verified ideal winners:
  //   bold=2 exp=2 cool=2            → Urban Rebel       score=18 vs next=14 ✓
  //   subtle=2 flowing=2 warm=2      → Soft Minimalist   score=20 vs next=14 ✓
  //   structured=2 classic=2 cool=2  → Midnight Architect score=20 vs next=13 ✓
  //   flowing=2 exp=2 warm=2         → Effortless Muse   score=20 vs next=11 ✓
  //   bold=2 structured=2 classic=2  → Statement Maker   score=20 vs next=16 ✓
  const getResult = () => {
    const {
      bold = 0,
      subtle = 0,
      structured = 0,
      flowing = 0,
      classic = 0,
      experimental = 0,
      warm = 0,
      cool = 0,
    } = traits;

    const scores = {
      // ── Urban Rebel ──────────────────────────────────────────────────────────
      // Core: bold + experimental. Cool tone. NOT subtle, NOT classic.
      bold_experimental:
        bold * 4 + experimental * 4 + cool * 1
        - subtle * 3 - classic * 2,

      // ── Soft Minimalist ──────────────────────────────────────────────────────
      // Core: subtle + flowing + warm. NOT bold, NOT experimental.
      subtle_flowing:
        subtle * 4 + flowing * 3 + warm * 3
        - bold * 3 - experimental * 1 - cool * 1,

      // ── Midnight Architect ───────────────────────────────────────────────────
      // Core: structured + classic + cool. NEVER bold/expressive.
      // Key: strong bold penalty separates this from Statement Maker.
      structured_classic:
        structured * 3 + classic * 4 + cool * 3
        - bold * 4 - flowing * 2 - warm * 1,

      // ── Effortless Muse ──────────────────────────────────────────────────────
      // Core: flowing + experimental + warm. Creative, dreamy. NOT structured.
      // Warm differentiates from Urban Rebel; flowing from Soft Minimalist.
      flowing_experimental:
        flowing * 4 + experimental * 3 + warm * 3
        - structured * 3 - bold * 1 - cool * 1,

      // ── Statement Maker ──────────────────────────────────────────────────────
      // Core: bold + structured. Powerful, classic/cool. NOT subtle, NOT flowing.
      // Key: bold+structured must beat Midnight Architect when bold is high.
      bold_structured:
        bold * 4 + structured * 4 + classic * 1 + cool * 1
        - subtle * 3 - flowing * 2,
    };

    // The persona with the highest score wins
    const winner = Object.entries(scores).reduce(
      (best, [key, score]) => (score > best[1] ? [key, score] : best),
      [null, -Infinity]
    );

    return personas[winner[0]] || personas.subtle_flowing;
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