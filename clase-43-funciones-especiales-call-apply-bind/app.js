var cart = {
    color: 'Azul',
    brand: 'Mazda',
    print: function () {
        return `${ this.brand } - ${ this.color }`
    }
}

var cart2 = {
    color: 'Blanco',
    brand: 'Toyota'
}

console.log(cart.print())

var Cart = function (arg1, arg2) {
    console.log(`Carro: ${ this.print() }`)
    console.log(`Argumentos: ${ arg1 } - ${ arg2 }`, '\n--------------------------------------')
}

/* bind */
var ModelCart = Cart.bind(cart)
ModelCart('abc', 'xzy')

/* call */
ModelCart.call(cart, '123', '456')

/* apply */
ModelCart.apply(cart, ['789', '012'])

console.log(
    cart.print.apply(cart2)
)

/**
Mazda - Azul
Carro: Mazda - Azul
Argumentos: abc - xzy 
--------------------------------------
Carro: Mazda - Azul
Argumentos: 123 - 456 
--------------------------------------
Carro: Mazda - Azul
Argumentos: 789 - 012 
--------------------------------------
Toyota - Blanco
 */
