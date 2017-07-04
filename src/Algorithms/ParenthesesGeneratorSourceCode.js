const ParenthesesGeneratorSourceCode = `const generateParenthesis = function(n) {
        const result = [];

        const generate = function(soFar, open, closed, max) {

          if (soFar.length === max*2) {
            result.push(soFar);
            return;
          }

          if (open < max) {
            generate(soFar + '(', open+1, closed, max);
          }

          if (closed < open) {
            generate(soFar + ')', open, closed+1, max);
          }
        };

        generate('', 0, 0, n);
        return result;
    };`;

export default ParenthesesGeneratorSourceCode;
