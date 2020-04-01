var first  = 100.78595;
var second = new Number(100.78595);

console.log("First:", first);
console.log("Second:", second);
console.log("first == second", first == second)
console.log("first === second", first === second)

console.log("first.toFixed(2)", first.toFixed(2));
console.log("first.toPrecision(4)", first.toPrecision(4));

console.log("first.toString()", first.toString());

console.log("first * f", (first * "f"));

var third = new Number("20b");

console.log("Third:", third);
console.log("third.valueOf()", third.valueOf());

/**********************************************************************
    Console:
    -------------------------------------------------------------------
    Value                               Result
    -------------------------------------------------------------------
    First:                              100.78595
    Second:                             Number {100.78595}
    first == second                     true
    first === second                    false
    first.toFixed(2)                    100.79
    first.toPrecision(4)                100.8
    first.toString()                    100.78595
    first * f                           NaN
    Third:                              Number {NaN}
    third.valueOf()                     NaN
***********************************************************************/
