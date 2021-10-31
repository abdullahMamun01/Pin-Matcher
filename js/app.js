let pinValue = document.querySelector("#generatepin-input");
let generateBtn = document.querySelector("#generate-button");
let pinButton = document.querySelectorAll(".pin-button");
let pinInput = document.querySelector("#pin-number");
let submit = document.querySelector("#submit");
let alert = document.querySelector("#text");
// let main = document.querySelectorAll('#main');
// window.addEventListener('DOMContentLoaded', function(){
//     generatePin()
// })
// pinButton.addEventListener('click' , function(e){
//     // console.log(e);
//
// })
// let initialPin = '';
// // console.log(initialPin);
pinButton.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    // initialPin += pinNum;
    if (e.currentTarget.textContent == "c") {
      pinInput.value = "";
    } else {
      let typePin = e.target.innerText;
      let initial = pinInput.value;
      pinInput.value = initial + typePin;
      // console.log(typePin);
      pinInput.value = initialPin;
    }
  });
});


function generatePin() {
  let pin = Math.floor(Math.random() * 10000);
  pinValue.value = pin;
  // verifyPin(pinValue.value);
}

function verifyPin() {
  let verifyPin = document.getElementById("pin-number").value;
  let inputPin = document.getElementById("generatepin-input").value;
  // console.log(pp);
  if (inputPin == verifyPin) {
    alert.className = "alert alert-success";
    alert.innerText = "pin match success";
  } else {
    alert.className = "alert alert-danger";
    alert.innerText = "pin did not match";
  }
}
submit.addEventListener("click", verifyPin);
generateBtn.addEventListener("click", generatePin);
