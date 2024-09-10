const num1Element = document.getElementById("num1") as HTMLInputElement | null;
const num2Element = document.getElementById("num2") as HTMLInputElement | null;
const btnElement = document.querySelector("button");
const paraElement = document.querySelector("p") || null;

function add(num1: number, num2: number) {
  return num1 + num2;
}

btnElement?.addEventListener("click", () => {
  const num1 = num1Element?.value;
  const num2 = num2Element?.value;
  const result = add(+(num1 || 0), +(num2 || 0));
  if (paraElement) {
    paraElement.textContent = result.toString();
  }
});
