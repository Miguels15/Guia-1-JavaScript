var num1=prompt("Conversion de metros a yardas, por favor digite un numero:");
const yarda=1.09361;
var resultado= num1*yarda;
var resultado2 = resultado.toFixed(2);
document.write("<h1>Los metros a convertir son: "+num1+"</h1>");
document.write("<h1>La conversion de metros a yardas es: " + resultado2 + "</h1>");