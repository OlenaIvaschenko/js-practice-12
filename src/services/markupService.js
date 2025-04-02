export function markupAllProducts(products) {
    return products.map(({brand, title, description, price, images, tag })=>{
        return`
        <li>
    <img src="${images[0]}" alt="${tag}">
    <h3>${title}</h3>
    <p>${brand}</p>
    <p>${description}</p>
    <p>${price}</p>
  </li>`;
    })
    .join('');
    
}

export function markupProduct({brand, title, description, price, images, tag, id }){
    return`
    <div data-id="${id}">
<img src="${images[0]}" alt="${tag}">
<h3>${title}</h3>
<p>${brand}</p>
<p>${description}</p>
<p>${price}</p>
</div>`;
}