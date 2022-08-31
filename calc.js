var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultFiled = document.getElementById("resultField");
var percentForm = document.getElementById("xIsWhatPercentOfY");

var wtField = document.getElementById("wtField");
var htField = document.getElementById("htField");
var bmiResult = document.getElementById("bmiResult");
var bmiForm = document.getElementById("bmiForm");

percentForm.addEventListener("submit", function (event) {
  if (!numField1.value || !numField2.value) {
    alert("Please enter values in the fields");
  } else {
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);

    var result = x / y;
    var percent = result * 100;

    resultFiled.innerText = "Result: " + percent + "%";
    event.preventDefault();
  }
});

bmiForm.addEventListener("submit", function (event) {
  if (!wtField.value || !htField.value) {
    alert("Please enter values in the fields");
  } else {
    var wt = wtField.value;
    var ht = htField.value;

    var result = wt / (ht * ht);
    var bmi = result * 10000;

    bmiResult.innerText = "Result: " + bmi + "kg/m2";
    event.preventDefault();
  }
});
