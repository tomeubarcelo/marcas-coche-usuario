var name = prompt('Introduzca su nombre');
var arrayCars = [];

for (var i = 0; i < 3; i++) {
    var car = prompt('Introduzca tres marcas de coche que haya tenido');
    arrayCars.push(car);
}

console.log('Su nombre es: ' + name);
console.log('Sus coches han sido: ' + arrayCars);

document.write("<img class='imgFloat' src='_assets/img/user_icon.png' width='2%'>")
document.write("<section><article><h1>Su nombre es: " + name + "</section></article></h1>");
document.write("<img class='imgFloat' src='_assets/img/car_icon.png' width='2%'>")
document.write("<section><article><h1>Sus coches son: " + arrayCars + "</section></article></h1>");