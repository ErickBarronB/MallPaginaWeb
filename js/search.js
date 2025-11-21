function searchStores(query) {
    if (!query || query.trim() === '') {
        return [];
    }

    if (typeof stores === 'undefined') {
        console.error('Stores array not found. Make sure stores.js is loaded before search.js');
        return [];
    }

    const searchTerm = query.toLowerCase().trim();
    const searchTerms = searchTerm.split(/\s+/);

    const results = stores.filter(store => {
        const nameMatch = store.name.toLowerCase().includes(searchTerm);
        const descriptionMatch = store.description.toLowerCase().includes(searchTerm);
        let keywordMatch = false;
        if (store.keywords && Array.isArray(store.keywords)) {
            keywordMatch = store.keywords.some(keyword => 
                keyword.toLowerCase().includes(searchTerm) ||
                searchTerms.some(term => keyword.toLowerCase().includes(term))
            );
        }
        
        let multiKeywordMatch = false;
        if (store.keywords && Array.isArray(store.keywords)) {
            multiKeywordMatch = searchTerms.some(term => 
                store.keywords.some(keyword => keyword.toLowerCase().includes(term))
            );
        }

        return nameMatch || descriptionMatch || keywordMatch || multiKeywordMatch;
    });

    return results;
}

function displaySearchResults(results, containerId) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Container ${containerId} not found`);
        return;
    }

    container.innerHTML = '';

    if (results.length === 0) {
        container.innerHTML = `
            <div class="search-no-results">
                <h3>No se encontraron resultados</h3>
                <p>Intenta buscar con diferentes palabras clave</p>
            </div>
        `;
        return;
    }

    const resultsHeader = document.createElement('div');
    resultsHeader.className = 'search-results-header';
    resultsHeader.innerHTML = `<h2>Resultados de búsqueda (${results.length})</h2>`;
    container.appendChild(resultsHeader);

    const grid = document.createElement('div');
    grid.className = 'stores-grid';
    grid.id = 'search-results-grid';

    results.forEach(store => {
        const card = document.createElement('a');
        card.href = `store-detail.html?id=${store.id}`;
        card.className = 'store-card';
        card.setAttribute('data-store-id', store.id);

        const promoBadge = store.hasPromo 
            ? '<div class="store-card-promo-badge">¡OFERTA!</div>' 
            : '';

        card.innerHTML = `
            <div class="store-card-image">
                <img src="${store.image}" alt="${store.name}" loading="lazy">
                ${promoBadge}
            </div>
            <div class="store-card-info">
                <h3 class="store-card-name">${store.name}</h3>
                <p class="store-card-description">${store.description}</p>
            </div>
        `;

        grid.appendChild(card);
    });

    container.appendChild(grid);
}

function performSearch(query) {
    const results = searchStores(query);
    
    sessionStorage.setItem('searchQuery', query);
    sessionStorage.setItem('searchResults', JSON.stringify(results));
    
    window.location.href = `tiendas.html?search=${encodeURIComponent(query)}`;
}

