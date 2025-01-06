let getData = async () => {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(response.status + " " + response.statusText);
        }
        let data = await response.json();

        const loader = document.querySelector('.loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            displayProducts(data);
        }, 300);
    } catch (error) {
        console.error(error.message);
        document.querySelector('.loader').style.display = 'none';
        alert("Data failed to fetch");
    }
}

function displayProducts(data) {
    const container = document.createElement('div');
    container.className = 'container';

    const productsGrid = document.createElement('div');
    productsGrid.className = 'products-grid';

    data.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-details">
                        <div class="product-title">${product.title}</div>
                        <div class="product-category">${product.category}</div>
                        <div class="product-description">${product.description}</div>
                        <div class="product-price">${product.price}</div>
                    </div>
                `;

        productsGrid.appendChild(card);
    });

    container.appendChild(productsGrid);
    document.body.appendChild(container);

    setTimeout(() => {
        container.classList.add('visible');
    }, 100);
}
getData();