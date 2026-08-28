import { personas } from "../data/personas.js";

// Mapping each quiz option directly to weighted points across 2 to 4 personas
const ANSWER_WEIGHTS = {
  // Q1: You enter a room...
  q1_a: { urban_rebel: 3, statement_maker: 3, art_house_experimental: 3, neo_street_classic: 3, soft_grunge: 2 },
  q1_b: { soft_minimalist: 3, quiet_luxury: 3, earthy_nomad: 3, classic_romantic: 3, clean_futurist: 2, midnight_architect: 2 },

  // Q2: Pick a texture...
  q2_a: { urban_rebel: 3, midnight_architect: 3, soft_grunge: 3, neo_street_classic: 3, statement_maker: 3, clean_futurist: 2 },
  q2_b: { soft_minimalist: 3, effortless_muse: 3, earthy_nomad: 3, classic_romantic: 3, retro_muse: 2, quiet_luxury: 2 },

  // Q3: Your ideal outfit is...
  q3_a: { midnight_architect: 3, quiet_luxury: 3, classic_romantic: 3, soft_minimalist: 3, neo_street_classic: 3, clean_futurist: 2 },
  q3_b: { urban_rebel: 3, art_house_experimental: 3, retro_muse: 3, effortless_muse: 3, soft_grunge: 2 },

  // Q4: Choose a color palette...
  q4_a: { earthy_nomad: 3, retro_muse: 3, effortless_muse: 3, classic_romantic: 3, quiet_luxury: 2, soft_grunge: 2 },
  q4_b: { clean_futurist: 3, midnight_architect: 3, urban_rebel: 3, statement_maker: 3, soft_minimalist: 2, neo_street_classic: 2 },

  // Q5: What matters more?
  q5_a: { statement_maker: 3, urban_rebel: 3, art_house_experimental: 3, neo_street_classic: 3, soft_grunge: 2, retro_muse: 2 },
  q5_b: { soft_minimalist: 3, quiet_luxury: 3, clean_futurist: 3, midnight_architect: 2, classic_romantic: 2, earthy_nomad: 2 },

  // Q6: Pick a vibe...
  q6_a: { midnight_architect: 3, quiet_luxury: 3, clean_futurist: 3, statement_maker: 3, neo_street_classic: 3, classic_romantic: 2 },
  q6_b: { soft_minimalist: 3, effortless_muse: 3, earthy_nomad: 3, soft_grunge: 3, retro_muse: 2, art_house_experimental: 2 },

  // Q7: Fashion for you is...
  q7_a: { art_house_experimental: 3, effortless_muse: 3, retro_muse: 3, urban_rebel: 3, soft_grunge: 2 },
  q7_b: { classic_romantic: 3, quiet_luxury: 3, midnight_architect: 3, neo_street_classic: 3, statement_maker: 3, soft_minimalist: 2 },

  // Q8: Choose an environment...
  q8_a: { classic_romantic: 3, earthy_nomad: 3, soft_minimalist: 3, retro_muse: 3, effortless_muse: 2, quiet_luxury: 2 },
  q8_b: { urban_rebel: 3, midnight_architect: 3, clean_futurist: 3, neo_street_classic: 3, soft_grunge: 3, statement_maker: 2, art_house_experimental: 2 }
};

// Fallback trait-to-option id mapping if caller passes legacy trait counts
const TRAIT_OPTION_MAP = {
  bold: ["q1_a", "q5_a"],
  subtle: ["q1_b", "q5_b"],
  structured: ["q2_a", "q6_a"],
  flowing: ["q2_b", "q6_b"],
  classic: ["q3_a", "q7_b"],
  experimental: ["q3_b", "q7_a"],
  warm: ["q4_a", "q8_a"],
  cool: ["q4_b", "q8_b"]
};

// Persona Trait Profiles for Priority Tie-Breaking
const PERSONA_PROFILES = {
  urban_rebel: { visibility: 5, structure: 4, creativity: 5, warmth: 1, classic_balance: 1 },
  soft_minimalist: { visibility: 1, structure: 1, creativity: 1, warmth: 2, classic_balance: 5 },
  midnight_architect: { visibility: 3, structure: 5, creativity: 1, warmth: 1, classic_balance: 5 },
  effortless_muse: { visibility: 3, structure: 1, creativity: 4, warmth: 5, classic_balance: 1 },
  statement_maker: { visibility: 5, structure: 5, creativity: 3, warmth: 1, classic_balance: 3 },
  classic_romantic: { visibility: 1, structure: 2, creativity: 1, warmth: 5, classic_balance: 5 },
  clean_futurist: { visibility: 1, structure: 5, creativity: 2, warmth: 1, classic_balance: 3 },
  quiet_luxury: { visibility: 1, structure: 4, creativity: 1, warmth: 3, classic_balance: 5 },
  art_house_experimental: { visibility: 5, structure: 3, creativity: 5, warmth: 3, classic_balance: 1 },
  soft_grunge: { visibility: 4, structure: 3, creativity: 4, warmth: 3, classic_balance: 1 },
  earthy_nomad: { visibility: 1, structure: 1, creativity: 3, warmth: 5, classic_balance: 3 },
  retro_muse: { visibility: 3, structure: 2, creativity: 5, warmth: 5, classic_balance: 2 },
  neo_street_classic: { visibility: 4, structure: 5, creativity: 2, warmth: 2, classic_balance: 4 }
};

/**
 * Calculates raw persona scores from selected option IDs or accumulated trait counts.
 */
export function calculatePersonaScores(selectedOptionsOrTraits) {
  const scores = {
    urban_rebel: 0,
    soft_minimalist: 0,
    midnight_architect: 0,
    effortless_muse: 0,
    statement_maker: 0,
    classic_romantic: 0,
    clean_futurist: 0,
    quiet_luxury: 0,
    art_house_experimental: 0,
    soft_grunge: 0,
    earthy_nomad: 0,
    retro_muse: 0,
    neo_street_classic: 0
  };

  let optionIds = [];

  if (Array.isArray(selectedOptionsOrTraits)) {
    optionIds = selectedOptionsOrTraits;
  } else if (typeof selectedOptionsOrTraits === 'object' && selectedOptionsOrTraits !== null) {
    // If trait object passed (e.g. { bold: 2, structured: 1... })
    Object.entries(selectedOptionsOrTraits).forEach(([trait, count]) => {
      const mappedIds = TRAIT_OPTION_MAP[trait] || [];
      for (let i = 0; i < count; i++) {
        if (mappedIds[i]) optionIds.push(mappedIds[i]);
      }
    });
  }

  optionIds.forEach((optionId) => {
    const weights = ANSWER_WEIGHTS[optionId];
    if (weights) {
      Object.entries(weights).forEach(([personaId, weight]) => {
        if (scores[personaId] !== undefined) {
          scores[personaId] += weight;
        }
      });
    }
  });

  return scores;
}

/**
 * Calculates user preference profile vector based on chosen options.
 */
function getTargetProfile(selectedOptionIds) {
  let vis = 3, struct = 3, creative = 3, warm = 3, classic = 3;

  selectedOptionIds.forEach((id) => {
    if (id === "q1_a" || id === "q5_a") vis += 1;
    if (id === "q1_b" || id === "q5_b") vis -= 1;

    if (id === "q2_a" || id === "q6_a") struct += 1;
    if (id === "q2_b" || id === "q6_b") struct -= 1;

    if (id === "q3_b" || id === "q7_a") creative += 1;
    if (id === "q3_a" || id === "q7_b") creative -= 1;

    if (id === "q4_a" || id === "q8_a") warm += 1;
    if (id === "q4_b" || id === "q8_b") warm -= 1;

    if (id === "q3_a" || id === "q7_b") classic += 1;
    if (id === "q3_b" || id === "q7_a") classic -= 1;
  });

  return { vis, struct, creative, warm, classic };
}

/**
 * Breaks ties deterministically using 5 explicit priority levels:
 * 1. Visibility match
 * 2. Structure match
 * 3. Creativity match
 * 4. Warmth/Coolness match
 * 5. Classic vs Experimental balance
 */
function breakTie(tiedIds, selectedOptionIds) {
  const target = getTargetProfile(selectedOptionIds);

  return [...tiedIds].sort((a, b) => {
    const profA = PERSONA_PROFILES[a] || {};
    const profB = PERSONA_PROFILES[b] || {};

    // 1. Visibility match
    const diffVisA = Math.abs(profA.visibility - target.vis);
    const diffVisB = Math.abs(profB.visibility - target.vis);
    if (diffVisA !== diffVisB) return diffVisA - diffVisB;

    // 2. Structure match
    const diffStructA = Math.abs(profA.structure - target.struct);
    const diffStructB = Math.abs(profB.structure - target.struct);
    if (diffStructA !== diffStructB) return diffStructA - diffStructB;

    // 3. Creativity match
    const diffCreativeA = Math.abs(profA.creativity - target.creative);
    const diffCreativeB = Math.abs(profB.creativity - target.creative);
    if (diffCreativeA !== diffCreativeB) return diffCreativeA - diffCreativeB;

    // 4. Warmth/Coolness match
    const diffWarmA = Math.abs(profA.warmth - target.warm);
    const diffWarmB = Math.abs(profB.warmth - target.warm);
    if (diffWarmA !== diffWarmB) return diffWarmA - diffWarmB;

    // 5. Classic vs Experimental balance
    const diffClassicA = Math.abs(profA.classic_balance - target.classic);
    const diffClassicB = Math.abs(profB.classic_balance - target.classic);
    return diffClassicA - diffClassicB;
  })[0];
}

/**
 * Computes best matching persona for given answers.
 * Returns persona object (including blended details if scores are close).
 */
export function getBestMatchingPersona(selectedOptionsOrTraits) {
  let optionIds = [];
  if (Array.isArray(selectedOptionsOrTraits)) {
    optionIds = selectedOptionsOrTraits;
  } else if (typeof selectedOptionsOrTraits === 'object' && selectedOptionsOrTraits !== null) {
    Object.entries(selectedOptionsOrTraits).forEach(([trait, count]) => {
      const mappedIds = TRAIT_OPTION_MAP[trait] || [];
      for (let i = 0; i < count; i++) {
        if (mappedIds[i]) optionIds.push(mappedIds[i]);
      }
    });
  }

  const scores = calculatePersonaScores(optionIds);

  const ranked = Object.entries(scores)
    .map(([id, score]) => ({ id, score }))
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0 || ranked[0].score === 0) {
    return personas.soft_minimalist;
  }

  // Find top score and handle potential ties
  const topScore = ranked[0].score;
  const topTied = ranked.filter(r => r.score === topScore).map(r => r.id);

  let winnerId;
  if (topTied.length > 1) {
    winnerId = breakTie(topTied, optionIds);
  } else {
    winnerId = ranked[0].id;
  }

  const primaryPersona = personas[winnerId] || personas.soft_minimalist;

  // Check for blended result (top 2 score difference <= 2)
  const second = ranked.find(r => r.id !== winnerId);
  const isBlended = second && (topScore - second.score <= 2);

  if (isBlended && personas[second.id]) {
    const accent = personas[second.id];
    return {
      ...primaryPersona,
      isBlended: true,
      accentPersona: {
        id: accent.id,
        name: accent.name,
        hook: accent.hook,
        description: accent.description
      },
      blendedTitle: `${primaryPersona.name} (with ${accent.name} accent)`
    };
  }

  return primaryPersona;
}
