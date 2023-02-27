import "./styles.css";

var buttons = document.getElementsByClassName("button_clk");
var display = document.getElementById("display_val");
var oper1 = 0;
var oper2 = 0;
var operator = null;
var flag = true;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    console.log("button clicked ");

    var value = e.target.getAttribute("data-value");
    console.log("value: " + value);
    display.innerHTML = value;

    if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "%"
    ) {
      flag = false;

      operator = value.toString();
      display.textContent = operator;
      console.log("operator: " + operator);
    } else if (value === "=") {
      try {
        var output = eval(oper1 + operator + oper2);
        console.log(oper1, operator, oper2);
        display.textContent = output;
        flag = true;
      } catch (error) {
        display.textContent = "Values are not supported";
      }
    } else if (value === "AC") {
      display.textContent = "";
      flag = true;
    } else {
      if (flag === true) {
        if (oper1 == "0") {
          oper1 = parseFloat(display.textContent).toString();
        } else {
          oper1 += parseFloat(display.textContent).toString();
        }
      } else {
        if (oper2 == "0") {
          oper2 = parseFloat(display.textContent).toString();
        } else {
          oper2 += parseFloat(display.textContent).toString();
        }
        console.log("oper2: " + oper2);
      }
    }
  });
}
