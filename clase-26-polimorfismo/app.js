function determineDataType(value)
{
    
    if (value === undefined) {
        console.log("El valor es undefined");
    }
    
    if (typeof value === "number") {
        console.log("El valor es de tipo númerico");
    }

    if (typeof value === "string") {
        console.log("El valor es de tipo cadena");
    }

    if (typeof value === "object") {
        console.log("El valor es de tipo objeto, pero puede ser cualquier objecto");
        if (value instanceof Number) {
            console.log("El valor es un objecto de tipo Number");
        }
    }

}

determineDataType();
determineDataType(25.5);
determineDataType("Susana Alexandra Lopéz Medina");

var number = new Number(50); determineDataType(number);

/**********************************************************************
    Console:
    -------------------------------------------------------------------
    Value                                               Result
    -------------------------------------------------------------------
    determineDataType()                                 El valor es undefined
    determineDataType(25.5)                             El valor es de tipo númerico
    determineDataType("Susana Alexandra Lopéz Medina")  El valor es de tipo cadena
    
    determineDataType(number)                           El valor es de tipo objeto, pero puede ser cualquier objecto
                                                        El valor es un objecto de tipo Number
***********************************************************************/