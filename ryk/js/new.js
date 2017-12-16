
function multiplica(num5, num2, num8) {
  var resultado = num5 * num2 * num8;
  // alert (resultado);
  document.getElementById("multi").innerHTML = resultado;
}

function suma(num_2, num_3) {
	var resultado = num_2 + num_3;
	document.getElementById("sum").innerHTML = resultado;
}

function resta(num1, num2) {
	var resultado = num1 - num2;
	return resultado;
}

function razcuadrada(num1) {
	var resultado = Math.sqrt(num1);
	return resultado;
}

function potencia(num4, num2) {
	var resultado = Math.pow(num4, num2);
	return resultado;
}

function divicion(num1, num2) {
	var resultado = num1 / num2;
	return resultado
}

var x = document.getElementsByClassName("divc");

x[0].innerHTML = divicion(49, 7);

// var numerador = 
// x[2].innerHTML = "potencia(10, 3)";


var x = document.getElementsByClassName("exp");

x[0].innerHTML = potencia(10, 2);

document.getElementById("expo").innerHTML = potencia(10, 3);

document.getElementById("raiz").innerHTML = razcuadrada(81);
multiplica(5,7,9);
suma(5,2);
//var res = resta(4,2);
document.getElementById("res").innerHTML = resta(10,5);


// var helado = 'chocolate';
// if (helado === 'chocolateoooo') {
// 	alert('si quiero helo');
// } else {
// 	alert('no helado')
// }