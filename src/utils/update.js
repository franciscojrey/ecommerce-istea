
export function sumQttyProd(product) {
    // leyendo del localStorage,parseando y guardando en una variable
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let indexLs = cart.findIndex(p => p.id === product.id);

    if (indexLs === -1) {
        product.quantity = 1;
        cart.push(product);
    }
    else {
        cart[indexLs].quantity ++;
    }

    // guardando el array en el localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    if (indexLs !== -1) {
        return cart[indexLs].quantity;
    }
}


export function restQttyProd(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let indexLs = cart.findIndex(p => p.id === product.id);
    if (indexLs !== -1 && cart[indexLs].quantity > 1) {
        cart[indexLs].quantity--;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    return cart[indexLs].quantity;
}


export function removeProd(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let indexLs = cart.findIndex(p => p.id === product.id);

    cart.splice(indexLs,);
    localStorage.setItem("cart", JSON.stringify(cart));
}