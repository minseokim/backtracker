const RockPaperScissorsSourceCode = () => {
  return `const rockPaperScissorsPermutation = roundCount => {
    const hands = ["rock", "paper", "scissors"];
    let result = [];

    const generator = playedSoFar => {
      if (playedSoFar.length === roundCount) {
        result.push(playedSoFar.slice());
      } else {
        for (let i = 0; i < hands.length; i++) {
          const nextHand = hands[i];
          const currentPlay = playedSoFar.concat(nextHand);
          generator(currentPlay);
        }
      }
    };

    generator([]);
    return result;
  };`;
};

export default RockPaperScissorsSourceCode;
