var a = 'Susuna Alexandra López Medina'
console.log('var a = \'Susuna Alexandra López Medina\'')
console.log('a:', a,
    '\n-------------------------------------------'
)

var b = new String()
console.log('var b = new String()')
console.log('b:', b)
console.log('b.valueOf():', b.valueOf())
console.log('b.length', b.length,
    '\n-------------------------------------------'
)

var c = new String('María Alexandra López Medina')
console.log('var c = new String(\'María Alexandra López Medina\')')
console.log('c:', c)
console.log('c.valueOf():', c.valueOf(),
    '\n-------------------------------------------'
)

var d = new String('Susana Alexandra López Medina')
console.log('var d = new String(\'Susana Alexandra López Medina\')')
console.log('d.length', d.length)
console.log('d.toLowerCase()', d.toLowerCase())
console.log('d.toUpperCase()', d.toUpperCase())
console.log('d.indexOf(\'z\')', d.indexOf('z'), d)
console.log('d.lastIndexOf(\'n\')', d.lastIndexOf('n'), d)

var name = d.substr(0, d.indexOf(' ')) 
console.log('var name = d.substr(0, d.indexOf(\' \'))', name)

var split = d.split(' ')
console.log('var split = d.split(\' \')', split)
console.log('split.length', split.length)

var startingPoint  = 7
var characterCount = 10
var slice = d.slice(startingPoint, (startingPoint + characterCount))
console.log('var startingPoint  = 7\nvar characterCount = 10\nvar slice = d.slice(startingPoint, (startingPoint + characterCount))', slice,
'\n-------------------------------------------'
)

/**
var a = 'Susuna Alexandra López Medina'
a: Susuna Alexandra López Medina 
-------------------------------------------
var b = new String()
b: String {""}
b.valueOf(): 
b.length 0 
-------------------------------------------
var c = new String('María Alexandra López Medina')
c: String {"María Alexandra López Medina"}
c.valueOf(): María Alexandra López Medina 
-------------------------------------------
var d = new String('Susana Alexandra López Medina')
d.length 29
d.toLowerCase() susana alexandra lópez medina
d.toUpperCase() SUSANA ALEXANDRA LÓPEZ MEDINA
d.indexOf('z') 21 String {"Susana Alexandra López Medina"}
d.lastIndexOf('n') 27 String {"Susana Alexandra López Medina"}
var name = d.substr(0, d.indexOf(' ')) Susana
var split = d.split(' ') (4) ["Susana", "Alexandra", "López", "Medina"]
split.length 4
var startingPoint  = 7
var characterCount = 10
var slice = d.slice(startingPoint, (startingPoint + characterCount)) Alexandra
-------------------------------------------
 */
