const promotions = [
    {
        id: 1,
        storeId: 2, // HUDZ
        title: "Todo Gratis en Ropa Urbana",
        description: "Profe, si nos aprobas te podes llevar todo gratis de esta tienda. Es la mejor ropa del mercado, hecha con los mejores materiales y con el mejor diseño.",
        discount: "TODO GRATIS",
        validUntil: "31 de Diciembre, 2024",
        image: "assets/images/Urban.png",
        badge: "EXCLUSIVO",
        storeName: "HUDZ"
    },
    {
        id: 2,
        storeId: 1, // Striker Components
        title: "Gran Liquidación de Tecnología",
        description: "Aprovecha hasta un 40% de descuento en dispositivos móviles, computadoras y accesorios tecnológicos. ¡Ofertas limitadas!",
        discount: "40% OFF",
        validUntil: "15 de Enero, 2025",
        image: "assets/images/TechStore.jpg",
        badge: "LIMITADO",
        storeName: "Striker Components"
    },
    {
        id: 3,
        storeId: 3, // Multiverse Figures
        title: "Promoción de Figuras Coleccionables",
        description: "Compra 2 figuras y obtén 1 gratis en figuras de acción, estatuas premium y coleccionables de anime y cómics.",
        discount: "2x1",
        validUntil: "28 de Febrero, 2025",
        image: "assets/images/Comic.png",
        badge: "ESPECIAL",
        storeName: "Multiverse Figures"
    },
    {
        id: 4,
        storeId: 4, 
        title: "Promoción en Instrumentos Musicales",
        description: "Compra 2 instrumentos musicales y obtén 10% de descuento en tu compra. Si compras 3 o más instrumentos, obtén 15% de descuento en tu compra.",
        discount: "10/15% OFF",
        validUntil: "31 de Diciembre, 2025",
        image: "https://lucatamasi.github.io/tpothemusicplace/img1.webp",
        badge: "ESPECIAL",
        storeName: "The Music Place"
    },
    {
        id: 5,
        storeId: 5, // Sports Zone
        title: "Promoción de Productos Prácticos y Modernos",
        description: "Compra 1 producto práctico y lleva el segundo gratis",
        discount: "2x1",
        validUntil: "31 de Diciembre, 2025",
        image: "https://www.momat.go.jp/wp-content/uploads/2023/02/shop-1.jpg",
        badge: "ESPECIAL",
        storeName: "Local Nova"
    }

];

function getStoreById(storeId) {
    if (typeof stores === 'undefined') {
        console.error('Stores array not found. Make sure stores.js is loaded before promotions.js');
        return null;
    }
    return stores.find(store => store.id === storeId);
}

function generatePromotionCards() {
    const container = document.getElementById('promotions-grid');
    
    if (!container) {
        console.error('Promotions grid container not found');
        return;
    }

    container.innerHTML = '';

    promotions.forEach(promotion => {
        const store = getStoreById(promotion.storeId);
        if (!store) {
            console.warn(`Store with id ${promotion.storeId} not found for promotion ${promotion.id}`);
            return;
        }

        const card = document.createElement('div');
        card.className = 'promotion-card';
        card.setAttribute('data-promotion-id', promotion.id);

        card.innerHTML = `
            <div class="promotion-badge">${promotion.badge}</div>
            <div class="promotion-image">
                <img src="${promotion.image || store.image}" alt="${promotion.title}">
                <div class="promotion-discount">${promotion.discount}</div>
            </div>
            <div class="promotion-info">
                <div class="promotion-store">${promotion.storeName}</div>
                <h3 class="promotion-title">${promotion.title}</h3>
                <p class="promotion-description">${promotion.description}</p>
                <div class="promotion-footer">
                    <div class="promotion-validity">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Válido hasta: ${promotion.validUntil}</span>
                    </div>
                    <a href="store-detail.html?id=${store.id}" class="promotion-btn">
                        Ver Detalles
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    console.log(`Generated ${promotions.length} promotion cards`);
}

document.addEventListener('DOMContentLoaded', function() {
    generatePromotionCards();
});

