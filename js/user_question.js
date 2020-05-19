var name = prompt('Introduzca su nombre:');
while (name.length == 0) {
    alert('Introduzca su nombre correctamente!');
    var name = prompt('Introduzca su nombre:');
}
var arrayCars = [];

for (var i = 0; i < 3; i++) {
    var car = prompt('Introduzca tres marcas de coche que haya tenido:');
    arrayCars.push(car);
}

console.log('Su nombre es: ' + name);

document.write("<img class='imgFloat' src='_assets/img/user_icon.png' width='2%'>")
document.write("<section><article><h1>" + name + "</section></article></h1>");
//bucle para mostrar cada coche del array con la img
for (let i = 0; i < arrayCars.length; i++) {
    const element = arrayCars[i];
    document.write("<img class='imgFloat' src='_assets/img/car_icon.png' width='2%'>")
    document.write("<section><article><h1>" + (i + 1) + ".- Marca coche: " + element + "</section></article></h1>");
    console.log((i + 1) + ".- Marca coche: " + element);

}