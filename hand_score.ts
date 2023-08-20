/* enable eslint */
function getHandScore(input: string): number {
  const cards = input.split(" "); 
  const suits = ["S", "C", "D", "H"]; 

  const suitValues = { S: 0, C: 0, D: 0, H: 0 }; // Initialize suit values with 0

  for (const card of cards) {
    const suit = card.charAt(0); 
    const value = card.slice(1); 

    const cardValue = value === "A" ? 11 : value === "J" || value === "Q" || value === "K" ? 10 : parseInt(value);

    suitValues[suit] += cardValue;
  }

  const maxSuitValue = Math.max(...suits.map((suit) => suitValues[suit]));

  const rankCounts = Object.values(suitValues);
  const maxRankCount = Math.max(...rankCounts);
  const totalRankScore = maxRankCount === 3 ? (maxRankCount === 1 ? 0 : 35) : 0;

  const finalScore = Math.max(maxSuitValue, totalRankScore);

  return finalScore;
}

// Test cases
console.log(getHandScore("SJ SQ S8")); 