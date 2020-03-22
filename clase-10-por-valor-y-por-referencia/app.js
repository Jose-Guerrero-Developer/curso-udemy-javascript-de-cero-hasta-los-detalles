
var a = 10;
var b = a;

console.log("Por valor: a = 10", a);
console.log("Por valor: b = a", b);

a = 5;
console.log("Cambiamos a por 5")

console.log("Valor: a = 5", a);
console.log("Valor: b = a", b);

var c = {
    name: "Luis Alejandro"
}
var d = c;

console.log("Referencia: c = object", c);
console.log("Referencia: d = c", d);

c.name = "José Alexander";
console.log("Cambiamos c.name");

console.log("Referencia: c = object", c);
console.log("Referencia: d = c", d);

d.name = "Lucas Alexander";
console.log("Cambiamos d.name");

console.log("Referencia: c = object", c);
console.log("Referencia: d = c", d);
