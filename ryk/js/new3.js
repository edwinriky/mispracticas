function sumar(){
	var x = document.getElementsByClassName("tres");
	var numer = document.getElementsByClassName("numerador");
	var divsor = document.getElementsByClassName("divisor");

	var a = numer[0].value;
	var b = divsor[0].value;

	var result = parseInt(a) + parseInt(b);

	var x = document.getElementsByClassName("result");

	x[0].innerHTML = result;

}

function restar(){
	var x = document.getElementsByClassName("tres");
	var numer = document.getElementsByClassName("numerador");
	var divsor = document.getElementsByClassName("divisor");

	var a = numer[0].value;
	var b = divsor[0].value;

	var result = parseInt(a) - parseInt(b);

	var x = document.getElementsByClassName("result");

	x[0].innerHTML = result;

}

function multiplicar(){
	var x = document.getElementsByClassName("tres");
	var numer = document.getElementsByClassName("numerador");
	var divsor = document.getElementsByClassName("divisor");

	var a = numer[0].value;
	var b = divsor[0].value;

	var result = parseInt(a) * parseInt(b);

	var x = document.getElementsByClassName("result");

	x[0].innerHTML = result;

}

function dividir(){
	var x = document.getElementsByClassName("tres");
	var numer = document.getElementsByClassName("numerador");
	var divsor = document.getElementsByClassName("divisor");

	var a = numer[0].value;
	var b = divsor[0].value;

	var result = parseInt(a) / parseInt(b);

	var x = document.getElementsByClassName("result");

	x[0].innerHTML = result;

}