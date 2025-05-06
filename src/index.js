import "./app/cards.js";
import "./app/modal.js";
import { renderCart } from "./app/cart.js";
import { filterInput } from "./app/inputfilter.js";

// Cuando se abre el offcanvas del carrito, ejecuta renderCart() para cargar los productos.
document.querySelector("#offcanvasRight").addEventListener("show.bs.offcanvas", () => {
    renderCart();
});

filterInput();