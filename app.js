var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var btnElement = document.querySelector("button");
// const paraElement = document.querySelector("p") || null;
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + " " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
btnElement.addEventListener("click", function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    var stringResult = add(num1, num2);
    console.log(result);
    console.log(stringResult);
});
