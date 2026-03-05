"use strict";
/*
Pre-Interview Question
Question 2
*/
function SortArrayString(arr) {
    const PrefixPriority = {
        SG: 1,
        TH: 2
    };
    const parse = (str) => {
        const prefix = str.match(/^[A-Z]+/)[0];
        const number = parseInt(str.match(/\d+/)[0]);
        return { prefix, number };
    };
    return [...arr].sort((a, b) => {
        const parsedA = parse(a);
        const parsedB = parse(b);
        if (PrefixPriority[parsedA.prefix] !== PrefixPriority[parsedB.prefix]) {
            return PrefixPriority[parsedA.prefix] - PrefixPriority[parsedB.prefix];
        }
        return parsedA.number - parsedB.number;
    });
}
let passedCount_2 = 0;
let failedCount_2 = 0;
function runTest_2(testName, input, expectedOut) {
    const result = SortArrayString(input);
    if (result.join(",") === expectedOut.join(",")) {
        console.log(`✅ PASS: ${testName} | input: "${input}"`);
        passedCount_2++;
    }
    else {
        console.error(`❌ FAIL: ${testName} | input: "${input}" | Expected: ${expectedOut}, Got: ${result}`);
        failedCount_2++;
    }
}
console.log("--- (Testing) ---");
runTest_2("Test 1", ["TH19", "SG20", "TH2"], ["SG20", "TH2", "TH19"]);
runTest_2("Test 2", ["TH10", "TH3Netfilx", "TH1", "TH7"], ["TH1", "TH3Netfilx", "TH7", "TH10"]);
console.log("---------------------------------");
console.log(`Summary: ${passedCount_2} Pass, ${failedCount_2} Fail`);
