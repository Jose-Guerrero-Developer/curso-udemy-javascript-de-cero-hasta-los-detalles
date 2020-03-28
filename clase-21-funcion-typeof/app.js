function  identify(parameter)
{
    return typeof parameter;
}

function Person(name, lastName, age)
{
    return `${ name } ${ lastName } (${ age })`;
}

var first = new Person("Susuna Alexandra", "Lopéz Medina", 18);


console.log(`true | false:`, identify(true), identify(false));
console.log(`18:`, identify(18));
console.log(`25.5:`, identify(25.5));
console.log(`Susana Alexandra Lopéz Medina:`, identify(`Susana Alexandra Lopéz Medina`));
console.log(`Objeto sin ():`, identify(Person));
console.log(`Objeto con ():`, identify(Person()));
console.log(`Objeto new:`, identify((new Person())));

console.log(`First:`, identify(first));

/**********************************************************************
    Console:
    -------------------------------------------------------------------
    Value                               Result
    -------------------------------------------------------------------
    true | false                        boolean boolean
    18                                  number
    25.5                                number
    Susana Alexandra Lopéz Medina       string
    Objeto sin ()                       function
    Objeto con ()                       string
    Objeto new                          object
    First                               object
***********************************************************************/
