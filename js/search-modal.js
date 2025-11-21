function showSearchModal() {
    let modal = document.getElementById('search-modal');
    if (modal) {
        if (!modal.dataset.handlersAttached) {
            setupExistingModalHandlers(modal);
            modal.dataset.handlersAttached = 'true';
        }
        modal.style.display = 'flex';
        const input = document.getElementById('search-input');
        if (input) {
            input.focus();
        }
        return;
    }

    modal = document.createElement('div');
    modal.id = 'search-modal';
    modal.className = 'search-modal';
    modal.innerHTML = `
        <div class="search-modal-overlay"></div>
        <div class="search-modal-content">
            <div class="search-modal-header">
                <h2>Buscar Tiendas</h2>
                <button class="search-modal-close" aria-label="Cerrar búsqueda">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="search-modal-body">
                <div class="search-input-wrapper">
                    <input type="text" 
                           id="search-input" 
                           class="search-input" 
                           placeholder="Buscar por nombre, descripción o palabras clave..." 
                           autocomplete="off">
                    <button class="search-submit-btn" aria-label="Buscar">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </button>
                </div>
                <div id="search-suggestions" class="search-suggestions"></div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const input = document.getElementById('search-input');
    input.focus();

    const closeBtn = modal.querySelector('.search-modal-close');
    const overlay = modal.querySelector('.search-modal-overlay');
    
    closeBtn.addEventListener('click', hideSearchModal);
    overlay.addEventListener('click', hideSearchModal);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            hideSearchModal();
        }
    });

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(input.value);
        }
    });

    const submitBtn = modal.querySelector('.search-submit-btn');
    submitBtn.addEventListener('click', function() {
        performSearch(input.value);
    });

    input.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length > 0) {
            showSearchSuggestions(query);
        } else {
            hideSearchSuggestions();
        }
    });
}

function setupExistingModalHandlers(modal) {
    const closeBtn = modal.querySelector('.search-modal-close') || modal.querySelector('.search-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', hideSearchModal);
    }
    
    const overlay = modal.querySelector('.search-modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', hideSearchModal);
    }
    
    const escapeHandler = function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            hideSearchModal();
        }
    };
    document.addEventListener('keydown', escapeHandler);
    
    const input = modal.querySelector('#search-input');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(input.value);
            }
        });
        
        input.addEventListener('input', function() {
            const query = this.value.trim();
            if (query.length > 0) {
                showSearchSuggestions(query);
            } else {
                hideSearchSuggestions();
            }
        });
    }
    
    const submitBtn = modal.querySelector('.search-submit-btn');
    if (submitBtn && input) {
        submitBtn.addEventListener('click', function() {
            performSearch(input.value);
        });
    }
}

function hideSearchModal() {
    const modal = document.getElementById('search-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function showSearchSuggestions(query) {
    if (typeof searchStores === 'undefined') {
        return;
    }

    const results = searchStores(query);
    const suggestionsDiv = document.getElementById('search-suggestions');
    
    if (results.length === 0) {
        suggestionsDiv.innerHTML = '<p class="no-suggestions">No se encontraron resultados</p>';
        suggestionsDiv.style.display = 'block';
        return;
    }

    const suggestions = results.slice(0, 5);
    suggestionsDiv.innerHTML = suggestions.map(store => {
        const promoBadge = store.hasPromo 
            ? '<div class="suggestion-promo-badge" title="¡Tiene oferta especial!">!</div>' 
            : '';
        
        return `
        <div class="search-suggestion-item" data-store-id="${store.id}">
            <img src="${store.image}" alt="${store.name}">
            <div class="suggestion-info">
                <h4>
                    ${store.name}
                    ${promoBadge}
                </h4>
                <p>${store.description}</p>
            </div>
        </div>
        `;
    }).join('');

    suggestionsDiv.querySelectorAll('.search-suggestion-item').forEach(item => {
        item.addEventListener('click', function() {
            const storeId = this.getAttribute('data-store-id');
            window.location.href = `store-detail.html?id=${storeId}`;
        });
    });

    suggestionsDiv.style.display = 'block';
}

function hideSearchSuggestions() {
    const suggestionsDiv = document.getElementById('search-suggestions');
    if (suggestionsDiv) {
        suggestionsDiv.style.display = 'none';
    }

}

// Function to perform search and navigate
function performSearch(query) {
    if (!query || query.trim() === '') {
        return;
    }

    // Navigate to tiendas page with search query
    window.location.href = `tiendas.html?search=${encodeURIComponent(query.trim())}`;
}

// Initialize search button handlers
document.addEventListener('DOMContentLoaded', function() {
    // Ensure modal is hidden on page load
    const existingModal = document.getElementById('search-modal');
    if (existingModal) {
        existingModal.style.display = 'none';
        // Setup handlers for existing modal
        setupExistingModalHandlers(existingModal);
        existingModal.dataset.handlersAttached = 'true';
    }
    
    // Attach search button click handler
    const searchButtons = document.querySelectorAll('.search-btn');
    searchButtons.forEach(btn => {
        btn.addEventListener('click', showSearchModal);
    });
});

