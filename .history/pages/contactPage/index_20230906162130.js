let btn = document.querySelector("button");
let nameInput = document.querySelector(".name-input");
let emailInput = document.querySelector(".email-input");
let msj = document.querySelector(".message");
let ul = document.querySelector("ul");
let errorMsj = document.querySelector(".error-msj");

btn.addEventListener("click", showData);
let allInputs = document.querySelectorAll("input");
console.log(allInputs);
allInputs.forEach((element) => {
  element.addEventListener("keyup", checkData);
});
function checkData() {
  if (nameInput.value && emailInput.value) {
    btn.style.backgroundColor = "violet";
    btn.disabled = false;
  } else {
    btn.style.backgroundColor = "gray";
    btn.disabled = true;
  }
}
function showData(e) {
    e.preventDefault();

    if (nameInput.value && emailInput.value) {
        btn.style.backgroundColor = "violet";
        btn.disabled = false;
      } else {
        btn.style.backgroundColor = "gray";
        btn.disabled = true;
      }

}
