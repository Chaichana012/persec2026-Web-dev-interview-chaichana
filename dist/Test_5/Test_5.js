"use strict";
/*
Pre-Interview Question
Question 5
*/
function SortInteger(num) {
    const SplitNum = num.toString().split("");
    let SortNum = [...SplitNum].sort((a, b) => {
        let parseA = parseInt(a);
        let parseB = parseInt(b);
        return parseA > parseB ? -1 : 1;
    });
    let resultl = Number(SortNum.join(""));
    return resultl;
}
let passedCount_5 = 0;
let failedCount_5 = 0;
function runtest_5(testName, input, expectedOut) {
    const result = SortInteger(input);
    if (result === expectedOut) {
        console.log(`✅ PASS: ${testName} | input: "${input}"`);
        passedCount_5++;
    }
    else {
        console.error(`❌ FAIL: ${testName} | input: "${input}" | Expected: ${expectedOut}, Got: ${result}`);
        failedCount_5++;
    }
}
runtest_5("Test 1", 3008, 8300);
runtest_5("Test 2", 1989, 9981);
runtest_5("Test 3", 2679, 9762);
runtest_5("Test 4", 9163, 9631);
console.log("---------------------------------");
console.log(`Summary: ${passedCount_5} Pass, ${failedCount_5} Fail`);
