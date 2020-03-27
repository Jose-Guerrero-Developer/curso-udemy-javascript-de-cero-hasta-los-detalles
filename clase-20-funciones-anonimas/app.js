(function() {
    var name = 'Susana Alexandra Lopéz Medina';
    console.log(name);
})();

function printObject(fn)
{
    var response = null;
    if (fn()) {
        response = true;
    } else {
        response = false;
    }
    return response;
}

console.log(
    printObject(function() {
        console.log('Función anónima ejecutada!');
        return true;
    })
);