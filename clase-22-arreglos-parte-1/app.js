var first = [5, 4, 3, 2, 1];

console.log('First', first);
console.log('Longitud', first.length);
console.log('Algunos valores', first[0], first[4], first[5]);
console.log('Invertir array', first.reverse());

console.log(
    'Multiplicar por dos',
    first.map(function (item) {
        return item * 2;
    })
);
console.log(
    'Raíz cuadrada',
    first.map(Math.sqrt)
);

console.log('Convertir array => string (,)', first.join());
console.log('Convertir array => string (|)', first.join('|'));

var second = first;

console.log('-------------------------------------------------------------------');

console.log('Second', second);
console.log('Convertir array => string (,)', second = second.join(','));
console.log('Convertir string => array (,)', second = second.split(','));

second.push("6");
console.log('Agregar item', second);

second.unshift("0");
console.log('Agregar item al inicio', second);
console.log('Convertir en string', second.toString());

var trash = second.pop();
console.log(second, trash);

var state = second.splice(1, 2);
console.log("Eliminar: start 1 - number count 1", state, second);

state = second.splice(1, 1, "7");
console.log("Eliminar & Remplazar: start 1 - number count 1", state, second);

second = second.slice(1, 4);
console.log("Obtener una parte: start 1 - end 4", second);


/**********************************************************************
    Console:
    -------------------------------------------------------------------
    Value                               Result
    -------------------------------------------------------------------
    first                               [5, 4, 3, 2, 1]
    first.length                        5
    first[0], first[4], first[5]        5 1 undefined
    first.reverse()                     [1, 2, 3, 4, 5]

    first.map(item * 2)                 [2, 4, 6, 8, 10]
    first.map(Math.sqrt)                [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]

    first.join()                        1,2,3,4,5
    first.join('|')                     1|2|3|4|5

    second.join(',')                    1,2,3,4,5
    second.split(',')                   ["1", "2", "3", "4", "5"]

    second.push("6")                    ["1", "2", "3", "4", "5", "6"]
    second.unshift("0")                 ["0", "1", "2", "3", "4", "5", "6"]
    second.toString()                   0,1,2,3,4,5,6
    second, trash                       ["0", "1", "2", "3", "4", "5"] "6"
    
    second.splice(1, 2)                 ["1", "2"] (4) ["0", "3", "4", "5"]
    second.splice(1, 1, "7")            ["3"] (4) ["0", "7", "4", "5"]
    second.slice(1, 4)                  ["7", "4", "5"]
***********************************************************************/