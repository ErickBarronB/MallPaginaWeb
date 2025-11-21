function getStoreIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return id ? parseInt(id) : null;
}

function findStoreById(id) {
    if (typeof stores === 'undefined') {
        console.error('Stores array not found. Make sure stores.js is loaded before store-detail.js');
        return null;
    }
    return stores.find(store => store.id === id);
}

function displayStoreDetails(store) {
    const container = document.getElementById('store-detail-container');
    
    if (!store) {
        container.innerHTML = `
            <div class="error-message">
                <h2>Tienda no encontrada</h2>
                <p>Lo sentimos, no pudimos encontrar la información de esta tienda.</p>
                <a href="tiendas.html" class="back-link">Volver a Tiendas</a>
            </div>
        `;
        return;
    }

        const detailsHtml = store.details 
            ? `<div class="store-detail-description">
                <h2>Acerca de esta tienda</h2>
                <p>${store.details}</p>
            </div>`
            : '';

        const promoBadge = store.hasPromo 
            ? '<div class="store-detail-promo-badge">¡OFERTA ESPECIAL!</div>' 
            : '';

        const promoSection = store.hasPromo 
            ? `<div class="store-detail-promo">
                <div class="promo-indicator">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                    </svg>
                    <span>Esta tienda tiene ofertas especiales disponibles</span>
                </div>
                <a href="ofertas.html" class="view-promo-btn">
                    Ver Ofertas
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </a>
            </div>` 
            : '';

        container.innerHTML = `
            <div class="store-detail-card">
                <div class="store-detail-image">
                    <img src="${store.image}" alt="${store.name}">
                    ${promoBadge}
                </div>
                <div class="store-detail-info">
                    <h1 class="store-detail-name">${store.name}</h1>
                    <p class="store-detail-short">${store.description}</p>
                    ${detailsHtml}
                    ${promoSection}
                    <div class="store-detail-actions">
                        <a href="${store.link}" target="_blank" rel="noopener noreferrer" class="visit-website-btn">
                            Visitar Sitio Web
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `;
}

document.addEventListener('DOMContentLoaded', function() {
    const storeId = getStoreIdFromURL();
    
    if (storeId) {
        const store = findStoreById(storeId);
        displayStoreDetails(store);
        
        if (store) {
            document.title = `${store.name} - Centro Arcadia`;
        }
    } else {
        const container = document.getElementById('store-detail-container');
        container.innerHTML = `
            <div class="error-message">
                <h2>ID de tienda no especificado</h2>
                <p>Por favor, selecciona una tienda desde la página de tiendas.</p>
                <a href="tiendas.html" class="back-link">Ver Todas las Tiendas</a>
            </div>
        `;
    }
});

