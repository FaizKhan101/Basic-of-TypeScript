var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var btnElement = document.querySelector("button");
var paraElement = document.querySelector("p") || null;
function add(num1, num2) {
    return num1 + num2;
}
btnElement.addEventListener("click", function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    if (paraElement) {
        paraElement.textContent = result.toString();
    }
});
