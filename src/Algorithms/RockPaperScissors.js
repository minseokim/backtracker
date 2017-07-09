import { trace } from "./../trace";

const RockPaperScissorsWrapper = function RockPaperScissorsWrapper(roundCount) {
  trace({
    type: "initWrapper",
    line: 0,
    environment: { roundCount }
  });

  const urls = [
    `<img src="https://image.ibb.co/fFiRNv/rock.png" />`,
    `<img src="https://image.ibb.co/iUA6Nv/hand.png" />`,
    `<img src="https://image.ibb.co/gB349a/scissors.png" />`
  ];

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
    trace({
      type: "initRecursive",
      line: 4,
      environment: { roundCount, playedSoFar, result }
    });

    trace({
      type: "compare",
      line: 5,
      environment: { roundCount, playedSoFar, result }
    });
    // We've reached base case
    if (playedSoFar.length === roundCount) {
      // push to solution
      result.push(playedSoFar.slice());

      trace({
        type: "AddToSolution",
        line: 6,
        environment: { roundCount, playedSoFar, result }
      });

      trace({
        type: "returnRecursive",
        line: 11,
        environment: { roundCount, playedSoFar, result }
      });
    } else {
      // Otherwise loop over hands

      for (let i = 0; i < hands.length; i++) {
        trace({
          type: "loop",
          line: 8,
          environment: { roundCount, playedSoFar, result, i }
        });

        const currentHand = hands[i];

        trace({
          type: "assign",
          line: 9,
          environment: { roundCount, playedSoFar, result, i, currentHand }
        });

        playedSoFar.push(currentHand);

        trace({
          type: "push",
          line: 10,
          environment: {
            roundCount,
            playedSoFar,
            result,
            currentHand
          }
        });

        trace({
          type: "recurse",
          line: 11,
          environment: {
            roundCount,
            playedSoFar,
            result,
            i,
            currentHand
          }
        });

        // Enter Recursive Call
        RockPaperScissorsRecurse(playedSoFar);

        // pop from playedSoFar
        playedSoFar.pop();

        trace({
          type: "pop",
          line: 12,
          environment: {
            roundCount,
            playedSoFar,
            result,
            i,
            currentHand
          }
        });
      } // For loop ends
      trace({
        type: "returnRecursive",
        line: 11,
        environment: { roundCount, playedSoFar, result }
      });
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
