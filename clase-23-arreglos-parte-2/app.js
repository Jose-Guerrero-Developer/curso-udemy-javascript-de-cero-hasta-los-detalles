var first = [
    true,
    {
        age: 18,
        name: "Susana Alexandra",
        lastName: "Lopéz Medina"
    },
    function (person) {
        return `${ person.name } ${ person.lastName } (${ person.age })`;
    },
    [
        "Susana",
        "Alexandra",
        "Paola",
        [
            "Alejandro",
            "Luis",
            "Camilo",
            function () {
                return `this ${ this }`;
            }
        ]
    ]
]

console.log("First", first);
console.log("P(0)", first[0]);
console.log("P(1)", first[1]);
console.log("P(2)", first[2](first[1]));
console.log("P(3)", first[3]);
console.log("P(3)(3)()", first[3][3][3]());

/**********************************************************************
    Console:
    -------------------------------------------------------------------
    Value                               Result
    -------------------------------------------------------------------
    first                               [true, {…}, ƒ]
    P(0)                                true
    P(1)                                {age: 18, name: "Susana Alexandra", lastName: "Lopéz Medina"}
    P(2)                                Susana Alexandra Lopéz Medina (18)
    P(3)                                ["Susana", "Alexandra", "Paola", Array(4)]
    P(3)(3)()                           this Alejandro,Luis,Camilo,function () {
                                                return `this ${ this }`;
                                            }
***********************************************************************/