const PermutationsSourceCode = `var permute = function(nums) {
    const result = [];

    const generate = (startIndex, input) => {
        if (startIndex === input.length) {
            result.push(input.slice());
        }
        for (let i = startIndex; i < input.length; i++) {
            swap(input, startIndex, i);
            generate(startIndex+1, input);
            swap(input, startIndex, i);
        }
    };

    generate(0, nums);

    return result;
};`;

export default PermutationsSourceCode;
