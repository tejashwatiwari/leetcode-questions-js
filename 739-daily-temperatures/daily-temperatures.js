/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let answer = new Array(n).fill(0);
    let stack = []; // Stack to hold indices

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let prevDayIndex = stack.pop();
            answer[prevDayIndex] = i - prevDayIndex; // Calculate the number of days
        }
        stack.push(i);
    }

    return answer;
};