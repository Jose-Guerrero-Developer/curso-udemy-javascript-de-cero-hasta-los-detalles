function person(age, name, lastName)
{
    if (arguments.length !== 3) {
        console.error("La función necesita 3 argumentos");
        return;
    }
    console.log(`${ name } ${ lastName } (${ age })`, arguments );
}

person(18, "Susana Alexandra");

person(18, "Susana Alexandra", "Lopéz Medina");
