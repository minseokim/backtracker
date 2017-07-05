const RockPaperScissorsSourceCode = `const rockPaperScissorsPermutation = roundCount => {
    const hands = ["rock", "paper", "scissors"];
    let result = [];

    const generator = playedSoFar => {
      if (playedSoFar.length === roundCount) {
        result.push(playedSoFar.slice());
      } else {
        for (let i = 0; i < hands.length; i++) {
          let currentHand = hands[i];
          playedSoFar.push(nextHand);
          generator(playedSoFar);
          playedSoFar.pop();
        }
      }
    };

    generator([]);
    return result;
  };`;

export default RockPaperScissorsSourceCode;
