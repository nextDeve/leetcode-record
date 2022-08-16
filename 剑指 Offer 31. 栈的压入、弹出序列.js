/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = [], index = 0;
    for (let v of pushed) {
        stack.push(v);
        while (stack.length > 0 && stack[stack.length - 1] === popped[index]) {
            index++;
            stack.pop()
        }
    }
    return stack.length === 0;
};
console.log(validateStackSequences(
    [1,2,3,4,5],
    [4,5,3,2,1]))
