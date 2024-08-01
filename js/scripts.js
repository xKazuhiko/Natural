document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');
    
    const products = [
        { id: 1, name: "Produit 1", price: 10, image: "../images/product1.jpg" },
        { id: 2, name: "Produit 2", price: 20, image: "../images/product2.jpg" },
        // Ajoutez plus de produits ici avec leurs images respectives
    ];

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Prix: $${product.price}</p>
        `;
        productContainer.appendChild(productElement);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.querySelector('.reviews-container');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', () => {
        reviewsContainer.scrollBy({
            left: -reviewsContainer.clientWidth / 4, // Scroll by one review width
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        reviewsContainer.scrollBy({
            left: reviewsContainer.clientWidth / 4, // Scroll by one review width
            behavior: 'smooth'
        });
    });
});
