function checkNumber() {

  let number = +document.getElementById("num").value;
  let div = number % 2;
  var result = "";

  if (div == 0) {

    result = alert("Số nhập vào " + number + " là số chẵn ");

  } else {

    result =alert("Số nhập vào " + number + " là số lẻ ");
  }

 document.getElementById("result").innerHTML = result;

}