/* enable eslint */
function getQuestionPart(phrases: string[]): string[] {
  const commonLength = Math.min(...phrases.map((phrase) => phrase.length));
  const questionPart = [];

  for (let i = 0; i < commonLength; i++) {
    const characters = phrases.map((phrase) => phrase[i]);

    if (new Set(characters).size === 1) {
      questionPart.push(characters[0]);
    } else {
      const commonSubstring = characters.join("").match(/(.+)\1+/);
      if (commonSubstring) {
        questionPart.push(commonSubstring[1]);
      } else {
        break;
      }
    }
  }

  return questionPart;
}


// Test cases
console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));