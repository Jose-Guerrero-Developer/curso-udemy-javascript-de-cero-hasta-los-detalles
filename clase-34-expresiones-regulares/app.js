var text = `Hello world, ${ Date.now() }`

console.log(
    `var text = ${ Date.now() }`, '\n--------------------------------'
)
console.log(
    'buscar al inicio de la cadena => text.match(/^H/):',
    text.match(/^H/), '\n--------------------------------'
)
console.log(
    'buscar al final de la cadena => text.match(/d$/):',
    text.match(/d$/), '\n--------------------------------'
)
console.log(
    'buscar las primeras 3 coincidencias en la cadena => text.match(/.../):',
    text.match(/.../), '\n--------------------------------'
)
console.log(
    'ignorar la primera letra y en el siguiente caracter => text.match(/^.o/):',
    text.match(/^.e/), '\n--------------------------------'
)
console.log(
    'buscar desde a-z en minusculas => text.match(/[a-z]/):',
    text.match(/[a-z]/), '\n--------------------------------'
)
console.log(
    'buscar desde a-z en mayusculas => text.match(/[A-Z]/):',
    text.match(/[A-Z]/), '\n--------------------------------'
)
console.log(
    'buscar desde a-z en minusculas, mayusculas => text.match(/[a-zA-Z]/):',
    text.match(/[a-zA-Z]/), '\n--------------------------------'
)
console.log(
    'buscar desde 0-9 => text.match(/[0-9]/):',
    text.match(/[0-]/), '\n--------------------------------'
)
