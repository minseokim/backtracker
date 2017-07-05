import { trace } from "./../trace";

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
    environment: { roundCount, hands }
  });

  const result = [];

  trace({
    type: "assign",
    line: 2,
    environment: { roundCount, hands, result }
  });

  // const playedSoFar = [];

  // invoke recursive function
  trace({
    type: "firstRecursiveCall",
    line: 17,
    environment: { roundCount, hands, result }
  });

  const RockPaperScissorsRecurse = function(playedSoFar) {
    console.log("playedSoFar :", playedSoFar);

    trace({
      type: "initRecursive",
      line: 4,
      environment: { result, playedSoFar, roundCount }
    });

    trace({
      type: "compare",
      line: 5,
      environment: { result, playedSoFar, roundCount }
    });
    // We've reached base case
    if (playedSoFar.length === roundCount) {
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
        environment: { result, playedSoFar, roundCount }
      });
    } else {
      // Otherwise loop over hands

      for (let i = 0; i < hands.length; i++) {
        trace({
          type: "loop",
          line: 8,
          environment: { result, playedSoFar, roundCount, i }
        });

        const currentHand = hands[i];

        trace({
          type: "assign",
          line: 9,
          environment: { result, playedSoFar, roundCount, i, currentHand }
        });

        // console.log("playedSoFar before PUSH :", playedSoFar);
        // let playedSoFarCopy = JSON.parse(JSON.stringify(playedSoFar));
        // playedSoFarCopy.push(currentHand);
        playedSoFar.push(currentHand);

        trace({
          type: "push",
          line: 10,
          environment: {
            result,
            playedSoFar: playedSoFar.slice(),
            roundCount,
            i,
            currentHand
          }
        });

        trace({
          type: "recurse",
          line: 11,
          environment: {
            result,
            playedSoFar: playedSoFar.slice(),
            roundCount,
            i,
            currentHand
          }
        });

        // Enter Recursive Call
        RockPaperScissorsRecurse(playedSoFar.slice());

        // pop from playedSoFar
        // playedSoFarCopy = JSON.parse(JSON.stringify(playedSoFar));
        playedSoFar.pop();

        trace({
          type: "pop",
          line: 12,
          environment: {
            result,
            playedSoFar,
            roundCount,
            i,
            currentHand
          }
        });
      }
    }
  };

  RockPaperScissorsRecurse([], result, roundCount, hands);

  trace({
    type: "returnRecursive",
    line: 17,
    environment: { roundCount, hands, result }
  });

  trace({
    type: "finishWrapper",
    line: 18,
    environment: { roundCount, hands, result }
  });

  return result;
};

export default RockPaperScissorsWrapper;
