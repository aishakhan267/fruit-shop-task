
let appleQty = 0;
let orangeQty = 0;
let bananaQty = 0;
// i have 28 rupees total.example
// Apple task

function aon() {
  document.querySelector(".two").style = " transform: scale(1.2); transition: 0.3s;";
  document.querySelector(".three").style = " transform: scale(1.4); transition: 0.3s;";

}
function aout() {
  document.querySelector(".two").style = " transform: scale(1); transition: 0.3s;";
  document.querySelector(".three").style = " transform: scale(1); transition: 0.3s;";
}



function addApple() {
  let pocket = Number(document.querySelector("#all-about").value);
  let totalbill = Number(document.querySelector("#totalbill").innerHTML);
  if (pocket <= document.querySelector("#totalbill").innerHTML) {
    alert("Sorry! You can`t buy more");

  } else {

    let addingApple = document.querySelector('#apple').value = ++appleQty;
    console.log(addingApple);
    total = appleQty * 10 + orangeQty * 15 + bananaQty * 7;
    document.querySelector('#totalbill').innerHTML = total;
  }
}
function minusApple() {
  let minusApple = document.querySelector('#apple').value = --appleQty;
  console.log(minusApple);
  total = appleQty * 10 + orangeQty * 15 + bananaQty * 7;
  document.querySelector('#totalbill').innerHTML = total;
}
// Orange task
function oon() {
  document.querySelector(".five").style = " transform: scale(1.2); transition: 0.3s;";
  document.querySelector(".six").style = " transform: scale(1.4); transition: 0.3s;";

}
function oout() {
  document.querySelector(".five").style = " transform: scale(1); transition: 0.3s;";
  document.querySelector(".six").style = " transform: scale(1); transition: 0.3s;";
}
function addOrange() {
  let pocket = Number(document.querySelector("#all-about").value);
  let totalbill = Number(document.querySelector("#totalbill").innerHTML);
  if (pocket <= document.querySelector("#totalbill").innerHTML) {
    alert("Sorry! You can`t buy more");
  } else {
    let addingOrange = document.querySelector('#orange').value = ++orangeQty;
    console.log(addingOrange);
    total = appleQty * 10 + orangeQty * 15 + bananaQty * 7;
    document.querySelector('#totalbill').innerHTML = total;
  }
}
function minusOrange() {

  let minusOrange = document.querySelector('#orange').value = --orangeQty;
  console.log(minusOrange);
  total = appleQty * 10 + orangeQty * 15 + bananaQty * 7;
  document.querySelector('#totalbill').innerHTML = total;
}
// Banana task
function bon() {
  document.querySelector(".eight").style = " transform: scale(1.2); transition: 0.3s;";
  document.querySelector(".nine").style = " transform: scale(1.4); transition: 0.3s;";

}
function bout() {
  document.querySelector(".eight").style = " transform: scale(1); transition: 0.3s;";
  document.querySelector(".nine").style = " transform: scale(1); transition: 0.3s;";
}
function addBanana() {
  let pocket = Number(document.querySelector("#all-about").value);
  let totalbill = Number(document.querySelector("#totalbill").innerHTML);
  if (pocket <= document.querySelector("#totalbill").innerHTML) {
    alert("Sorry! You can`t buy more");
  } else {
    let addingBanana = document.querySelector('#banana').value = ++bananaQty;
    console.log(addingBanana);
    total = appleQty * 10 + orangeQty * 15 + bananaQty * 7;
    document.querySelector('#totalbill').innerHTML = total;
  }
}
function minusBanana() {
  document.querySelector('#banana').value = --bananaQty;
  total = appleQty * 10 + orangeQty * 15 + bananaQty * 7;
  document.querySelector('#totalbill').innerHTML = total;
}









