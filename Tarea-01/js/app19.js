/*
19. La compra:
Ha realizado una compra y sabe el precio del producto y su iva. Haga un script que
calcule el precio total a pagar por la compra.
*/

const compra = {
    precioUnit: parseInt(prompt('Ingrese el precio unitario')),
    iva: parseInt(prompt('Ingrese su iva'))
}

alert(`El total del precio es: ${compra.precioUnit + compra.iva}`);
