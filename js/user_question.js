var name = prompt('Introduzca su nombre');
var arrayCars = [];

for (var i = 0; i < 3; i++) {
    var car = prompt('Introduzca tres marcas de coche que haya tenido');
    arrayCars.push(car);
}

console.log('Su nombre es: ' + name);
console.log('Sus coches han sido: ' + arrayCars);

document.write("Su nombre es: " + name);
document.write("<br>")
document.write("Sus coches son: " + arrayCars);