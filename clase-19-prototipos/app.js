function Person(name, lastName, age)
{
    this.name     = name;
    this.lastName = lastName; 
    this.age      = age;
}

Person.prototype.info = function() {
    return `${ this.name } ${ this.lastName } (${ this.age })`;
}

var first  = new Person(
    'Susana Alexandra',
    'Lopéz Medina',
    18
);

var second = new Person(
    'María Alejandra',
    'Salas Mendez',
    20
);

console.log(first);
console.log(first.info());

console.log(second);
console.log(second.info());