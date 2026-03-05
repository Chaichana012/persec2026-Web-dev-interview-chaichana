"use strict";
/*
Pre-Interview Question
Question 4
*/
//number to string roman number
function NumberToRoman(number) {
    const romanMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];
    let roman = "";
    for (let i = 0; i < romanMap.length; i++) {
        while (number >= romanMap[i].value) {
            roman += romanMap[i].symbol;
            number -= romanMap[i].value;
        }
    }
    return roman;
}
function RomantoNumber(roman) {
    const romanMap = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanMap[roman[i]];
        const next = romanMap[roman[i + 1]];
        if (next && next > current) {
            result += next - current;
            i++;
        }
        else {
            result += current;
        }
    }
    return result;
}
let passedCount_4 = 0;
let failedCount_4 = 0;
function runTest_4_1(testName, input, expectedOut) {
    const result = NumberToRoman(input);
    if (result === expectedOut) {
        console.log(`✅ PASS: ${testName} | input: "${input}"`);
        passedCount_4++;
    }
    else {
        console.error(`❌ FAIL: ${testName} | input: "${input}" | Expected: ${expectedOut}, Got: ${result}`);
        failedCount_4++;
    }
}
function runTest_4_2(testName, input, expectedOut) {
    const result = RomantoNumber(input);
    if (result === expectedOut) {
        console.log(`✅ PASS: ${testName} | input: "${input}"`);
        passedCount_4++;
    }
    else {
        console.error(`❌ FAIL: ${testName} | input: "${input}" | Expected: ${expectedOut}, Got: ${result}`);
        failedCount_4++;
    }
}
runTest_4_1("Test 1", 1989, "MCMLXXXIX");
runTest_4_1("Test 2", 2000, "MM");
runTest_4_1("Test 3", 68, "LXVIII");
runTest_4_1("Test 4", 109, "CIX");
runTest_4_2("Test 5", "MCMLXXXIX", 1989);
runTest_4_2("Test 6", "MM", 2000);
runTest_4_2("Test 7", "LXVIII", 68);
runTest_4_2("Test 8", "CIX", 109);
console.log("---------------------------------");
console.log(`Summary: ${passedCount_4} Pass, ${failedCount_4} Fail`);
