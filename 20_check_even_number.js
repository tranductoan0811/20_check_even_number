function checkNumber() {

  let number = +document.getElementById("num").value;
  let number2 = number % 2
  if (number2 == 0) {

    number = "Số nhập vào " + number + " là số chẵn ";

  } else {

    number = "Số nhập vào " + number + " là số lẻ ";
  }

 document.getElementById("result").innerHTML = number;





}