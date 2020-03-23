
function getName(nombre)
{
    return `Nombre => ${ nombre }`;
}

function getRandom()
{
    return Math.random();
}

function getBoolean()
{
    return getRandom() >= 0.5 ? true : false;
}

function getFunction()
{
    return function()
    {
        console.log("Primera función de retorno");
        return function(name)
        {
            console.log("Segunda función de retorno");
            return name;
        }
    }
}

console.log(getName("Susana Medina"));
console.log(getBoolean());

var firts   = getFunction();
var secound = firts();

console.log(secound("Alaxandra Lopez"));


