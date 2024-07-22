const inputPre = document.querySelector(".input-pre");
const inputNex = document.querySelector(".input-nex");
const numbers = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

// Number Inputs

numbers.forEach((e) => {
  e.addEventListener("click", () => {
    inputNex.value += e.textContent;
  });
});

// Operator Inputs
operators.forEach((e) => {
  e.addEventListener("click", () => {
    if(inputNex.value.slice(-1) === e.textContent){
        inputNex.value.slice(-1) = e.textContent;
    }else {
    inputNex.value += e.textContent;
    }
  });
});

// Evaluate Function
equalBtn.addEventListener("click", () => {
  try {
    if(!inputNex.value){
        inputPre.value = '';
    }else {
    evaluate = eval(inputNex.value);
    inputPre.value = evaluate;
}
  } catch (error) {
    inputPre.value = "Error";
  }
});

// Clear Function
clearBtn.addEventListener("click", () => {
  inputNex.value = "";
  inputPre.value = "";
});

// Delete Value Function
deleteBtn.addEventListener("click", () => {
  inputNex.value = inputNex.value.slice(0, -1);
});

// Disable Function Evokes when Error Occurs
// function disable() {
//     numbers.forEach((e) => {
//         e.disabled = true;
//     })

//     operators.forEach((e) => {
//         e.disabled = true;
//     })

//     equalBtn.disabled = true;
//     deleteBtn.disabled = true;
// }

// function enable() {
//     numbers.forEach((e) => {
//         e.disabled = false;
//     })

//     operators.forEach((e) => {
//         e.disabled = false;
//     })

//     equalBtn.disabled = false;
//     deleteBtn.disabled = false;
// }
