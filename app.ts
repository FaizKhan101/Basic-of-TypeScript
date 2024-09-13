const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const btnElement = document.querySelector("button")!;
// const paraElement = document.querySelector("p") || null;

const numResults: number[] = [];
const textResult: string[] = [];

type NumOrString = number | string;
type Result = { val: number; timestamp: Date }

interface ResultObj {
  val: number,
  timestamp: Date
}

function add(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  } else {
    return +num1 + +num2;
  }
}

function printResult(resultObj: ResultObj) {
  console.log(resultObj.val);
}

btnElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  numResults.push(result as number);
  const stringResult = add(num1, num2);
  textResult.push(stringResult as string);
  console.log(numResults, textResult);

  printResult({ val: result as number, timestamp: new Date() });
});
