import { addToCart } from "./cart.js";

export function showModal(product) {
    let modal = document.querySelector("#modal");

    let modalTemplate = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${product.title}</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${product.image}" class="img-fluid rounded" alt="${product.title}">
                        </div>
                        <div class="col-md-6">
                            <p class="mb-2"><strong>Precio:</strong> $${product.price}</p>
                            <p class="mb-2"><strong>Categoría:</strong> ${product.category}</p>
                            <p class="mb-2"><strong>Calificación:</strong> ${product.rating.rate} (${product.rating.count} votos)</p>
                            <hr>
                            <p><strong>Descripción:</strong></p>
                            <p>${product.description}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="add-to-cart-btn">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `;

    modal.innerHTML = modalTemplate;

    const myModal = new bootstrap.Modal(modal);
    myModal.show();
    
    // agrego el evento al botón de agregar al carrito
    document.querySelector("#add-to-cart-btn").addEventListener("click", () => {
        addToCart(product);
    });
}
