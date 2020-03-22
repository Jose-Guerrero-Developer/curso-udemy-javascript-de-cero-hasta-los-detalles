
var person = {
    name: "Luis Alejandro",
    lastName: "Lopéz Mendez",
    age: 25,
    address: {
        country: "Colombia",
        city: "Bogotá",
        building: {
            name: "Edificio principal",
            phone: "222-522541"
        }
    }
}

console.log(person.address.building.name);

console.warn("Notación de punto con referencia");

var building = person.address.building;
console.log("Edificio =>", building.name);

console.log("Notación de corchetes");

var field = "phone";
console.log("Teléfono =>", building[field]);