function Person(name, lastName, age)
{
    this.name     = name;
    this.lastName = lastName;
    this.age      = age;
    this.getData  = function() {
        return `${ this.name } ${ this.lastName } (${ this.age })`;
    } 
}

var first = new Person(
    'Susana Alexandra',
    'Lopéz Medina',
    18
);

var second = Person();

console.log('Instancia new', first);
console.log(first.getData());

console.log('------------------------------');
console.log('Eliminando la instancia new (Retorna undefined de la función Person())', second);