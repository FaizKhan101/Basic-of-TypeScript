"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const btnElement = document.querySelector("button");
// const paraElement = document.querySelector("p") || null;
const numResults = [];
const textResult = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
btnElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResult.push(stringResult);
    console.log(numResults, textResult);
    printResult({ val: result, timestamp: new Date() });
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It's worked!");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split("w"));
});
