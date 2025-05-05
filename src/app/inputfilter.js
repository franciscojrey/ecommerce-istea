import { getProducts } from "../api/api.js";

let filter = document.querySelector('#filter-input');

export async function filterInput() {
    let data = await getProducts();
    
    filter.addEventListener('input', (e) => {
    let value = e.target.value.toLowerCase();

    let cardList = document.querySelector('#container-cards');
    cardList.innerHTML = ''

    let newList = data.filter((product) => {
        return product.title.toLowerCase().includes(value);
    });

   newList.forEach((product) => {
    let templateCard =`
        <div class="col d-flex justify-content-center">
            <div class="card p-4 h-100">
                <img src='${product.image}' class="card-img-top object-fit-contain" alt='${product.title}' style="height: 200px;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-truncate">${product.title}</h5>
                    <div class="mt-auto">
                        <button type="button" class="btn btn-primary w-100" onclick="showDetails(${JSON.stringify(product)})" id='prod-${product.id}'>Más detalles</button>
                    </div>
                </div>
            </div>
        </div>
    `  
    cardList.innerHTML += templateCard;
}); 
})
    
}
