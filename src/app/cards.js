import { getProducts } from "../api/api.js";
import { showModal } from "./modal.js";

const containerCards = document.querySelector("#container-cards");


getProducts().then(data => {
    window.showDetails = (id) => {
        const product = data.find(p => p.id === parseInt(id));
        showModal(product);
    }
    containerCards.innerHTML = data.map(product => `
        <div class="col d-flex justify-content-center">
            <div class="card p-4 h-100">
                <img src="${product.image}" class="card-img-top object-fit-contain" alt="${product.title}" style="height: 200px;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-truncate">${product.title}</h5>
                    <p class="card-text text-truncate text-muted">${product.description}</p>
                    <div class="mt-auto">
                        <p class="card-text fw-bold h4 mb-3 text-center">$${product.price}</p>
                        <button type="button" class="btn btn-primary w-100" onclick="showDetails(${product.id})">Más detalles</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
});