var a = new Boolean()
console.log('var a = new Boolean()')
console.log('a:', a)
console.log('a valueOf:', a.valueOf(),
    '\n-------------------------------------------'
)

var b = new Boolean('true')
console.log('var b = new Boolean("true")')
console.log('b:', b)
console.log('b valueOf:', b.valueOf(),
    '\n-------------------------------------------'
)

var c = new Boolean('false')
console.log('var c = new Boolean("false")')
console.log('c:', c)
console.log('c valueOf:', c.valueOf(),
    '\n-------------------------------------------'
)

var d = new Boolean(false)
console.log('var d = new Boolean(false)')
console.log('d:', d)
console.log('d valueOf:', d.valueOf(),
    '\n-------------------------------------------'
)

var e = new Boolean(true)
console.log('var e = new Boolean(true)')
console.log('e:', e)
console.log('e valueOf:', e.valueOf(),
    '\n-------------------------------------------'
)

/**
var a = new Boolean()
a: Boolean {false}
a valueOf: false 
-------------------------------------------
var b = new Boolean("true")
b: Boolean {true}
b valueOf: true 
-------------------------------------------
var c = new Boolean("false")
c: Boolean {true}
c valueOf: true 
-------------------------------------------
var d = new Boolean(false)
d: Boolean {false}
d valueOf: false 
-------------------------------------------
var e = new Boolean(true)
e: Boolean {true}
e valueOf: true 
-------------------------------------------
 */
