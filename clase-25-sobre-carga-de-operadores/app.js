function createProduct(name, price)
{
    name  = name  || "Por definir";
    price = price || 0;
    console.log("Producto:", name.toLowerCase(), "Precio:", price);
}

function createProductIn100(name)
{
    createProduct(name, 100);
}

function createBalloonProduct(price)
{
    createProduct("balon de futbol", price);
}


createProduct();
createProduct("Lapiz", 15);
createProductIn100("Camisa de futbol");
createBalloonProduct(25.5);

/**********************************************************************
    Console:
    -------------------------------------------------------------------
    Value                                  Result
    -------------------------------------------------------------------
    createProduct()                        Producto: por definir Precio: 0
    createProduct("Lapiz", 15)             Producto: lapiz Precio: 15
    createProductIn100("Camisa de futbol") Producto: camisa de futbol Precio: 100
    createBalloonProduct(25.5)             Producto: balon de futbol Precio: 25.5
***********************************************************************/
