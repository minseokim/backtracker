import { trace } from "./../trace";

const RockPaperScissorsWrapper = function RockPaperScissorsWrapper(roundCount) {
  const steps = [];
  trace(
    {
      type: "initWrapper",
      line: 0,
      environment: { roundCount }
    },
    steps
  );

  const urls = [
    `<img src="https://image.ibb.co/fFiRNv/rock.png" />`,
    `<img src="https://image.ibb.co/iUA6Nv/hand.png" />`,
    `<img src="https://image.ibb.co/gB349a/scissors.png" />`
  ];

  const hands = ["rock", "paper", "scissors"];

  trace(
    {
      type: "assign",
      line: 1,
      environment: { roundCount, hands }
    },
    steps
  );

  const result = [];

  trace(
    {
      type: "assign",
      line: 2,
      environment: { roundCount, hands, result }
    },
    steps
  );

  // invoke recursive function
  trace(
    {
      type: "firstRecursiveCall",
      line: 17,
      environment: { roundCount, hands, result }
    },
    steps
  );

  const RockPaperScissorsRecurse = function(playedSoFar) {
    trace(
      {
        type: "initRecursive",
        line: 4,
        environment: { roundCount, playedSoFar, result }
      },
      steps
    );

    trace(
      {
        type: "compare",
        line: 5,
        environment: { roundCount, playedSoFar, result }
      },
      steps
    );
    // We've reached base case
    if (playedSoFar.length === roundCount) {
      // push to solution
      result.push(playedSoFar.slice());

      trace(
        {
          type: "AddToSolution",
          line: 6,
          environment: { roundCount, playedSoFar, result }
        },
        steps
      );

      trace(
        {
          type: "returnRecursive",
          line: 11,
          environment: { roundCount, playedSoFar, result }
        },
        steps
      );
    } else {
      // Otherwise loop over hands

      for (let i = 0; i < hands.length; i++) {
        trace(
          {
            type: "loop",
            line: 8,
            environment: { roundCount, playedSoFar, result, i }
          },
          steps
        );

        const currentHand = hands[i];

        trace(
          {
            type: "assign",
            line: 9,
            environment: { roundCount, playedSoFar, result, i, currentHand }
          },
          steps
        );

        playedSoFar.push(currentHand);

        trace(
          {
            type: "push",
            line: 10,
            environment: {
              roundCount,
              playedSoFar,
              result,
              currentHand
            }
          },
          steps
        );

        trace(
          {
            type: "recurse",
            line: 11,
            environment: {
              roundCount,
              playedSoFar,
              result,
              i,
              currentHand
            }
          },
          steps
        );

        // Enter Recursive Call
        RockPaperScissorsRecurse(playedSoFar);

        // pop from playedSoFar
        playedSoFar.pop();

        trace(
          {
            type: "pop",
            line: 12,
            environment: {
              roundCount,
              playedSoFar,
              result,
              i,
              currentHand
            }
          },
          steps
        );
      } // For loop ends
      trace(
        {
          type: "returnRecursive",
          line: 11,
          environment: { roundCount, playedSoFar, result }
        },
        steps
      );
    }
  };

  RockPaperScissorsRecurse([]);

  trace(
    {
      type: "returnRecursive",
      line: 17,
      environment: { roundCount, hands, result }
    },
    steps
  );

  trace(
    {
      type: "finishWrapper",
      line: 18,
      environment: { roundCount, hands, result }
    },
    steps
  );

  return steps;
};

export default RockPaperScissorsWrapper;
