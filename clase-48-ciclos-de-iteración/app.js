var person = {
    age: 18,
    name: 'Susana Alexandra López Medina',
    city: 'Bogotá'
}

var persons = [
    {
        age: 25,
        name: 'María Kamila López Medina',
        city: 'Medellin'
    },
    {
        age: 19,
        name: 'Paola Alejandra López Medina',
        city: 'Bogotá'
    }
]

console.log('for in\n------------------------------')
/** for in es utilizado para iterar objetos */
for (const key in person) {
    console.log(`${ key }:`, person[key])
}

for (const person in persons) {
    console.log(`${ person }:`, persons[person])
}

console.log('for of\n------------------------------')
/** for of es utilizado para iterar array, string */
for (const person of persons) {
    console.log(`${ person }:`, persons)
}

for (const person of persons) {
    console.log(`${ person.name } (${ person.age }), ${ person.city }`)
}

console.log('for each\n------------------------------')
/** forEach es utilizado par iterar array */
persons.forEach(function (person, index, array) {
    console.log(person, index, array)
})

persons.forEach(function (person, index, array) {
    console.log(`${ person.name } (${ person.age }), ${ person.city }`)
})

/**
for in
------------------------------
age: 18
name: Susana Alexandra López Medina
city: Bogotá
0: {age: 25, name: "María Kamila López Medina", city: "Medellin"}
1: {age: 19, name: "Paola Alejandra López Medina", city: "Bogotá"}

for of
------------------------------
[object Object]: (2) [{…}, {…}]
[object Object]: (2) [{…}, {…}]
María Kamila López Medina (25), Medellin
Paola Alejandra López Medina (19), Bogotá

for each
------------------------------
{age: 25, name: "María Kamila López Medina", city: "Medellin"} 0 (2) [{…}, {…}]
{age: 19, name: "Paola Alejandra López Medina", city: "Bogotá"} 1 (2) [{…}, {…}]
María Kamila López Medina (25), Medellin
Paola Alejandra López Medina (19), Bogotá
 */
