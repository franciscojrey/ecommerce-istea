import { restQttyProd, sumQttyProd, removeProd, clearCart} from "../utils/update.js";

// Función para agregar un producto al carrito
export function addToCart(product) {
    let qty = sumQttyProd(product);
    alert("Producto agregado al carrito");
    return qty;
}

// Función para mostrar el carrito en el offcanvas
export function renderCart() {
    const offcanvasBody = document.querySelector(".offcanvas-body");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    //msj de carrito vacío
    if (cart.length === 0) {
        offcanvasBody.innerHTML = "<p class='text-muted'>El carrito está vacío.</p>";
        return;
    }
    //carrito con productos
    offcanvasBody.innerHTML = cart.map(p => `
        <div class="cart-item">
            <img src="${p.image}" alt="${p.title}">
            <div class="cart-item-details">
                <p class="cart-item-title">${p.title}</p>
                <p class="cart-item-price" id="total-${p.id}">Total: $${p.price * p.quantity}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="btn btn-sm btn-outline-secondary" onclick='decrementProd("${p.id}")' ${p.quantity === 1 ? "disabled" : ""}>-</button>
                <span id= "qty-${p.id}">${p.quantity}</span>
                <button class="btn btn-sm btn-outline-secondary" onclick='incrementProd("${p.id}")'>+</button>  
                <button class="btn btn-sm btn-outline-primary" onclick='removeProd("${p.id}")'>Eliminar</button>
            </div>
        </div>
        
    `).join("");
        
        
    //sumar productos al carrito
    window.incrementProd = (id) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const product = cart.find(p => p.id === id || p.id === Number(id));
        if (!product) return;
    
        const qty = sumQttyProd(product);
        document.querySelector(`#qty-${id}`).innerText = qty;
        document.querySelector(`button[onclick="decrementProd('${id}')"]`)?.removeAttribute("disabled");

        let totalElement = document.querySelector(`#total-${id}`);
        totalElement.innerHTML = "";
        totalElement.innerHTML = `Total: $${product.price * qty}`;
        renderCart();
    };
    
    //restar productos al carrito
    window.decrementProd = (id) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const product = cart.find(p => p.id === id || p.id === Number(id));
        if (!product) return;
    
        const qty = restQttyProd(product);
        document.querySelector(`#qty-${id}`).innerText = qty;
        if (qty === 1) {
            document.querySelector(`button[onclick="decrementProd('${id}')"]`)?.setAttribute("disabled", true);
        }

        let totalElement = document.querySelector(`#total-${id}`);
        totalElement.innerHTML = "";
        totalElement.innerHTML = `Total: $${product.price * qty}`;
        renderCart();
    };
    
    //eliminar productos del carrito
    window.removeProd = (id) => {
        removeProd(id);
        renderCart();  
    };

    offcanvasBody.innerHTML += `
    <div class="mt-3 text-end">
        <button class="btn btn-danger btn-sm" id="clear-cart-btn">Vaciar carrito</button>
    </div>
    `;

    document.querySelector("#clear-cart-btn")?.addEventListener("click", () => {
        clearCart();
        renderCart();
    });
    
}
