"use strict";
/*
Pre-Interview Question
Question 5
*/
function Tribonacci(array, int) {
    if (array.length == 0) {
        array = [0, 0, 1];
    }
    let result = [...array];
    for (let i = array.length; i < int; i++) {
        let num1 = result[i - 1] || 0;
        let num2 = result[i - 2] || 0;
        let num3 = result[i - 3] || 0;
        result.push(num1 + num2 + num3);
    }
    return result.slice(0, int);
}
let passedCount_6 = 0;
let failedCount_6 = 0;
function RunTest_6(testName, input, int, expectedOut) {
    const result = Tribonacci(input, int);
    console.log(result);
    if (result.join(",") === expectedOut.join(",")) {
        console.log(`✅ PASS: ${testName} | input: "${input}"`);
        passedCount_6++;
    }
    else {
        console.error(`❌ FAIL: ${testName} | input: "${input}" | Expected: ${expectedOut}, Got: ${result}`);
        failedCount_6++;
    }
}
RunTest_6("Test 1", [1, 3, 5], 5, [1, 3, 5, 9, 17]);
RunTest_6("Test 2", [2, 2, 2], 3, [2, 2, 2]);
RunTest_6("Test 3", [10, 10, 10], 4, [10, 10, 10, 30]);
RunTest_6("Test 4", [], 3, [0, 0, 1]);
RunTest_6("Test 5", [5, 2, 0], 6, [5, 2, 0, 7, 9, 16]);
RunTest_6("Test 6", [1], 3, [1, 1, 2]);
console.log("---------------------------------");
console.log(`Summary: ${passedCount_6} Pass, ${failedCount_6} Fail`);
