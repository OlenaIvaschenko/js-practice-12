import { getAllProducts, getProductById } from "./requests/products";

import { markupAllProducts, markupProduct } from "./services/markupService";


const allProducts = document.getElementById('allProducts');
const singleProduct = document.getElementById('singleProduct');
const form = document.getElementById('singleProductForm')
// getAllProducts().then((console.log));
getAllProducts().then (({data: {products}}) => {
    console.log(products)
    // const markupCards = markupAllProducts(products);

});
form.addEventListener('submit', findProductbyId )
function findProductbyId(event) {
    event.preventDefault();
    const id = event.target.elements.id.value;
    // getProductById(id).then(console.log);
    getProductById(id).then(({data}) =>{
        const markupCard = markupProduct(data)
        // console.log(markupCard);
        singleProduct.innerHTML = markupCard;
        form.reset();
        
    });
    
}

