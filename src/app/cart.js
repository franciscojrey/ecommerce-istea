
export function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Producto agregado al carrito");
}

export function renderCart() {
    const offcanvasBody = document.querySelector(".offcanvas-body");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    //msj de carrito vacío
    if (cart.length === 0) {
        offcanvasBody.innerHTML = "<p class='text-muted'>El carrito está vacío.</p>";
        return;
    }

    offcanvasBody.innerHTML = cart.map(p => `
        <div class="cart-item">
            <img src="${p.image}" alt="${p.title}">
            <div class="cart-item-details">
                <p class="cart-item-title">${p.title}</p>
                <p class="cart-item-price">$${p.price}</p>
            </div>
        </div>
    `).join("");
}
