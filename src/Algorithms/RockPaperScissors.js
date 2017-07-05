import { trace } from "./../trace";

const RockPaperScissorsRecurse = function RockPaperScissorsRecurse(
  playedSoFar,
  result,
  roundCount,
  hands
) {
  trace({
    type: "initRecursive",
    line: 4,
    environment: { result, playedSoFar, roundCount }
  });

  // We've reached base case
  if (
    trace({
      type: "compare",
      line: 5,
      environment: { result, playedSoFar, roundCount }
    }) &&
    playedSoFar.length === roundCount
  ) {
    // push to solution
    result.push(playedSoFar.slice());

    trace({
      type: "AddToSolution",
      line: 6,
      environment: { result, playedSoFar, roundCount }
    });

    trace({
      type: "returnRecursive",
      line: 11,
      environment: { roundCount, result }
    });
  } else {
    // Otherwise loop over hands

    for (let i = 0; i < hands.length; i++) {
      trace({
        type: "loop",
        line: 8,
        environment: { i, result, playedSoFar, roundCount }
      });

      const nextHand = hands[i];

      trace({
        type: "assign",
        line: 9,
        environment: { i, result, playedSoFar, nextHand, roundCount }
      });

      const currentPlay = playedSoFar.concat(nextHand);

      trace({
        type: "assign",
        line: 10,
        environment: {
          i,
          result,
          playedSoFar,
          nextHand,
          currentPlay,
          roundCount
        }
      });

      trace({
        type: "recurse",
        line: 11,
        environment: {
          i,
          result,
          playedSoFar,
          nextHand,
          currentPlay,
          roundCount
        }
      });

      //Enter Recursive Call
      RockPaperScissorsRecurse(currentPlay, result, roundCount, hands);
    }
  }
};

const RockPaperScissorsWrapper = function RockPaperScissorsWrapper(roundCount) {
  trace({
    type: "initWrapper",
    line: 0,
    environment: { roundCount }
  });

  const hands = ["rock", "paper", "scissors"];

  trace({
    type: "assign",
    line: 1,
    environment: { hands }
  });

  const result = [];

  trace({
    type: "assign",
    line: 2,
    environment: { roundCount, hands }
  });

  const playedSoFar = [];

  // invoke recursive function
  trace({
    type: "firstRecursiveCall",
    line: 16,
    environment: { roundCount, result, playedSoFar }
  });

  RockPaperScissorsRecurse(playedSoFar, result, roundCount, hands);

  trace({
    type: "returnRecursive",
    line: 16,
    environment: { roundCount, result }
  });

  trace({
    type: "finishWrapper",
    line: 17,
    environment: { roundCount, result }
  });
  console.log("result :", result);
  return result;
};
