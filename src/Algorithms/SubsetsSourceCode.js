const SubsetsSourceCode = `const subsets = nums => {
    const result = [];

    const generate = (startIndex, subset) => {
        result.push(subset.slice());

        for (let i = startIndex; i < nums.length; i++) {
            let currentElementToSelect = nums[i];
            subset.push(currentElementToSelect);
            generate(i + 1, subset);
            subset.pop();
        }
    };

    generate(0, []);
    return result;
};`;

export default SubsetsSourceCode;
