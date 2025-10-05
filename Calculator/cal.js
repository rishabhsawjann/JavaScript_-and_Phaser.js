// Get all the elements
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

// Add event listeners to each button
document.getElementById("addBtn").onclick = function() {
  result.textContent = Number(num1.value) + Number(num2.value);
};

document.getElementById("subBtn").onclick = function() {
  result.textContent = Number(num1.value) - Number(num2.value);
};

document.getElementById("mulBtn").onclick = function() {
  result.textContent = Number(num1.value) * Number(num2.value);
};

document.getElementById("divBtn").onclick = function() {
  if (Number(num2.value) === 0) {
    result.textContent = "❌ Cannot divide by zero";
  } else {
    result.textContent = Number(num1.value) / Number(num2.value);
  }
};
