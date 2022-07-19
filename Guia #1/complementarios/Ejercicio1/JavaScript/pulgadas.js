var num1=prompt("Conversion de metros a pulgadas, por favor digite un numero:");
const pulg=39.3701;
var resultado= num1*pulg;
var resultado2 = resultado.toFixed(2);
document.write("<h1>Los metros a convertir son: "+num1+"</h1>");
document.write("<h1>La conversion de metros a pulgadas es: " + resultado2 + "</h1>");