const foodCourt = [
    {
        id: 1,
        name: "Sakura Sushi",
        description: "Auténtica cocina japonesa con los mejores cortes de pescado fresco. Especialistas en sushi, sashimi y platos tradicionales.",
        openTime: "11:00",
        closeTime: "22:00",
        foodType: "Sushi",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop",
        keywords: ["sushi", "sashimi", "japonés", "pescado", "japonesa", "comida japonesa", "asiática", "asia"]
    },
    {
        id: 2,
        name: "Burger Paradise",
        description: "Las hamburguesas más deliciosas de la ciudad. Carne 100% natural, pan artesanal y ingredientes frescos. Opciones veganas disponibles.",
        openTime: "12:00",
        closeTime: "23:00",
        foodType: "Burgers",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop",
        keywords: ["hamburguesas", "burgers", "comida rápida", "carne", "vegano", "fast food", "americana"]
    },
    {
        id: 3,
        name: "Dragon Wok",
        description: "Sabores auténticos del Lejano Oriente. Arroz frito, fideos, platos salteados y especialidades chinas y tailandesas.",
        openTime: "11:30",
        closeTime: "22:30",
        foodType: "Asian",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop",
        keywords: ["chino", "asiático", "arroz frito", "fideos", "tailandés", "wok", "oriental", "asia"]
    },
    {
        id: 4,
        name: "Pizza Express",
        description: "Pizza italiana artesanal horneada en horno de leña. Masa fresca, ingredientes premium y recetas tradicionales de Italia.",
        openTime: "11:00",
        closeTime: "23:30",
        foodType: "Pizza",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
        keywords: ["pizza", "italiana", "italiano", "masa", "queso", "horno", "italia"]
    },
    {
        id: 5,
        name: "Taco Fiesta",
        description: "Tacos auténticos mexicanos con los mejores sabores. Carne asada, pollo, pescado y opciones vegetarianas. Salsas caseras y guacamole fresco.",
        openTime: "12:00",
        closeTime: "23:00",
        foodType: "Mexican",
        image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
        keywords: ["tacos", "mexicano", "mexicana", "carne asada", "guacamole", "tortillas", "mexico"]
    },
    {
        id: 6,
        name: "Thai Garden",
        description: "Comida tailandesa tradicional con sabores picantes y equilibrados. Pad Thai, curry verde, tom yum y especialidades tailandesas.",
        openTime: "11:30",
        closeTime: "22:00",
        foodType: "Asian",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop",
        keywords: ["tailandés", "tailandesa", "pad thai", "curry", "picante", "asiático", "asia", "oriental"]
    },
    {
        id: 7,
        name: "Healthy Bowls",
        description: "Comida saludable y nutritiva. Bowls con quinoa, vegetales frescos, proteínas y aderezos artesanales. Opciones veganas y sin gluten.",
        openTime: "10:00",
        closeTime: "21:00",
        foodType: "Healthy",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
        keywords: ["saludable", "vegano", "vegetariano", "quinoa", "bowl", "sin gluten", "orgánico", "nutritivo"]
    },
    {
        id: 8,
        name: "Noodle House",
        description: "Fideos asiáticos de todos los estilos. Ramen, udon, pho y fideos salteados. Caldos aromáticos y sabores auténticos.",
        openTime: "11:00",
        closeTime: "22:30",
        foodType: "Asian",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop",
        keywords: ["fideos", "ramen", "udon", "pho", "asiático", "caldo", "asia", "oriental", "japonés"]
    }
];

function searchFoodCourt(query) {
    if (!query || query.trim() === '') {
        return foodCourt;
    }

    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    
    return foodCourt.filter(restaurant => {
        const nameMatch = restaurant.name.toLowerCase();
        const descriptionMatch = restaurant.description.toLowerCase();
        const foodTypeMatch = restaurant.foodType.toLowerCase();
        const keywordsMatch = restaurant.keywords.join(' ').toLowerCase();
        
        return searchTerms.every(term => 
            nameMatch.includes(term) ||
            descriptionMatch.includes(term) ||
            foodTypeMatch.includes(term) ||
            keywordsMatch.includes(term)
        );
    });
}

function generateRestaurantCards(restaurants = null) {
    const grid = document.getElementById('food-court-grid');
    if (!grid) {
        console.error('Food court grid container not found');
        return;
    }

    const restaurantsToShow = restaurants !== null ? restaurants : foodCourt;

    grid.innerHTML = '';

    if (restaurantsToShow.length === 0) {
        grid.innerHTML = '<p class="no-results">No se encontraron restaurantes. Intenta con otros términos de búsqueda.</p>';
        return;
    }

    restaurantsToShow.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        
        card.innerHTML = `
            <div class="restaurant-card-image">
                <img src="${restaurant.image}" alt="${restaurant.name}" loading="lazy">
            </div>
            <div class="restaurant-card-header">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <span class="restaurant-type">${restaurant.foodType}</span>
            </div>
            <div class="restaurant-card-body">
                <p class="restaurant-description">${restaurant.description}</p>
                <div class="restaurant-hours">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>${restaurant.openTime} - ${restaurant.closeTime}</span>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function handleFoodCourtSearch() {
    const searchInput = document.getElementById('food-court-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        const results = searchFoodCourt(query);
        generateRestaurantCards(results);
    });
}

if (typeof window !== 'undefined') {
    window.foodCourt = foodCourt;
    window.searchFoodCourt = searchFoodCourt;
    window.generateRestaurantCards = generateRestaurantCards;

    document.addEventListener('DOMContentLoaded', () => {
        generateRestaurantCards();
        handleFoodCourtSearch();
    });
}

