var person = {
    name: "Susana Alexandra",
    lastName: "Lopéz Medina",
    age: 18,
    getGreeting: function() {
        return `Hola, ${ this.name} ${ this.lastName }`;
    },
    address: {
        country: "Colombia",
        city: "Bogotá",
        getLocation: function() {
            var self     = this;
            var response = function() {
                console.log(`Objeto this => window ${ this }`);
                return `Ubicación: ${ self.country }, ${ self.city }`;
            }
            return response();
        }
    }
}

console.log(person.getGreeting());
console.log(person.address.getLocation());