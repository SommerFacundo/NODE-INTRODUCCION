const os = require('os');
console.log("Memoria libre: "+os.freemem());

const arr = new Array(1000000);

console.log("Despues de crear el arreglo");
console.log("Memoria libre: " + os.freemem());