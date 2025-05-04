import "./app/cards.js";
import "./app/modal.js";
import { renderCart } from "./app/cart.js";

// Cuando se abre el offcanvas del carrito, ejecuta renderCart() para cargar los productos.
document.querySelector("#offcanvasRight").addEventListener("show.bs.offcanvas", () => {
    renderCart();
});