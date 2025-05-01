export function getProducts() {
    let result = fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.log(error);
    })
    return result;
}
