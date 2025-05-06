function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function sumQttyProd(product) {
    // leyendo del localStorage,parseando y guardando en una variable
    let cart = getCart();
    let indexLs = cart.findIndex(p => p.id === product.id);

    if (indexLs === -1) {
        product.quantity = 1;
        cart.push(product);
    }
    else {
        cart[indexLs].quantity ++;
    }

    // guardando el array en el localStorage
    setCart(cart) 
    if (indexLs !== -1) {
        return cart[indexLs].quantity;
    }
}


export function restQttyProd(product) {
    let cart = getCart();

    let indexLs = cart.findIndex(p => p.id === product.id);
    if (indexLs !== -1 && cart[indexLs].quantity > 1) {
        cart[indexLs].quantity--;
    }

    setCart(cart) 
    return cart[indexLs].quantity;
}


export function removeProd(id) {
    let cart = getCart();
    let indexLs = cart.findIndex(p => p.id === id || p.id === Number(id)); // por si el id es string o número

    if (indexLs !== -1) {
        cart.splice(indexLs, 1);
        setCart(cart) 
    }
}

export function clearCart() {
    localStorage.removeItem("cart");
}

