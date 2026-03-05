/*
Pre-Interview Question
Question 1
*/

function ValidParentheses(str: string): boolean {
    const stack: string[] = [];
    for (let i = 0; i < str.length; i++) {
        //console.log("ccc str[i]", str[i])
        const char = str[i];
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (top === "(" && char !== ")") {
                return false;
            }
            if (top === "[" && char !== "]") {
                return false;
            }
            if (top === "{" && char !== "}") {
                return false;
            }
        }
    }

    return stack.length === 0;

}

let passedCount_1 = 0;
let failedCount_1 = 0;

function runTest_1(testName: string, input: string, expectedOut: boolean) {
    const result = ValidParentheses(input);
    if (result === expectedOut) {
        console.log(`✅ PASS: ${testName} | input: "${input}"`);
        passedCount_1++;
    } else {
        console.error(`❌ FAIL: ${testName} | input: "${input}" | Expected: ${expectedOut}, Got: ${result}`);
        failedCount_1++;
    }
}

console.log("--- (Testing) ---");

runTest_1("Test 1", "()", true);
runTest_1("Test 2", "([)]", false);
runTest_1("Test 3", "([{}])", true);
runTest_1("Test 4", "([{}]]]", false);
runTest_1("Test 5", ")", false);
runTest_1("Test 6", "{", false);

console.log("---------------------------------");
console.log(`Summary: ${passedCount_1} Pass, ${failedCount_1} Fail`);