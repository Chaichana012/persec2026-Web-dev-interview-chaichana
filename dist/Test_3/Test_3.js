"use strict";
/*
Pre-Interview Question
Question 3
*/
function Autocomplete(search, item, maxResult) {
    const lowerSearch = search.toLowerCase();
    const filteredItem = item.filter(item => item.toLowerCase().includes(lowerSearch));
    return [...filteredItem].sort((a, b) => {
        let aIndex = (a.toLowerCase().indexOf(lowerSearch));
        let bIndex = (b.toLowerCase().indexOf(lowerSearch));
        return aIndex - bIndex;
    }).slice(0, maxResult);
}
let passedCount_3 = 0;
let failedCount_3 = 0;
function runTest_3(testName, input, item, maxResult, expectedOut) {
    const result = Autocomplete(input, item, maxResult);
    if (result.join(",") === expectedOut.join(",")) {
        console.log(`✅ PASS: ${testName} | input: "${input}"`);
        passedCount_3++;
    }
    else {
        console.error(`❌ FAIL: ${testName} | input: "${input}" | Expected: ${expectedOut}, Got: ${result}`);
        failedCount_3++;
    }
}
runTest_3("Test 1", "th", ["Mother", "Think", "Worthy", "Apple", "Android"], 3, ["Think", "Mother", "Worthy"]);
console.log("---------------------------------");
console.log(`Summary: ${passedCount_3} Pass, ${failedCount_3} Fail`);
