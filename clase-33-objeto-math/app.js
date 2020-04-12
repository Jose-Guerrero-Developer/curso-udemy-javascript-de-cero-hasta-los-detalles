var PI = Math.PI
console.log('var PI = Math.PI', PI)

var E = Math.E
console.log('var E = Math.E', E)

var number = 10.456789
console.log('var number = 10.456789', number)

console.log('(Math.round(number * 100) / 100)', (Math.round(number * 100) / 100))
console.log('Math.floor(number)', Math.floor(number))

myRandom = function (min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min))
}

console.log('myRandom(500, 850)', myRandom(500, 850))

/**
var PI = Math.PI 3.141592653589793
var E = Math.E 2.718281828459045
var number = 10.456789 10.456789
(Math.round(number * 100) / 100) 10.46
Math.floor(number) 10
myRandom(500, 850) 688
 */
