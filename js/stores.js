const stores = [
    {
        id: 1,
        name: "Striker Components",
        description: "Tecnología y Electrónica de última generación",
        image: "assets/images/TechStore.jpg",
        link: "https://erickbarronb.github.io/Striker/",
        details: "Striker Components es tu destino para tecnología y electrónica de última generación. Ofrecemos una amplia selección de componentes electrónicos, dispositivos móviles, computadoras y accesorios tecnológicos. Contamos con personal especializado para ayudarte a encontrar exactamente lo que necesitas.",
        keywords: ["tecnología", "electrónica", "computadoras", "smartphones", "accesorios", "dispositivos", "componentes", "tech", "gadgets"],
        hasPromo: true
    },
    {
        id: 2,
        name: "HUDZ",
        description: "Ropa y Accesorios de moda urbana",
        image: "assets/images/Urban.png",
        link: "https://totesss.github.io/HUDZ-WEB-PAGE/",
        details: "HUDZ es la tienda de moda urbana más exclusiva del centro comercial. Descubre las últimas tendencias en ropa y accesorios para todos los estilos. Desde streetwear hasta moda casual, tenemos todo lo que necesitas para expresar tu personalidad única.",
        keywords: ["moda", "ropa", "urban", "streetwear", "accesorios", "estilo", "fashion", "casual", "urbano"],
        hasPromo: true
    },
    {
        id: 3,
        name: "Multiverse Figures",
        description: "Figuras coleccionables y juguetes",
        image: "assets/images/Comic.png",
        link: "https://pablitoort.github.io/Pagina-web-shooping/",
        details: "Multiverse Figures es el paraíso de los coleccionistas. Tenemos figuras de acción, estatuas premium, figuras coleccionables de anime, cómics y más. También ofrecemos juguetes para todas las edades y productos exclusivos de las mejores marcas.",
        keywords: ["figuras", "coleccionables", "anime", "cómics", "juguetes", "action figures", "estatuas", "toys", "hot toys", "multiverse"],
        hasPromo: true
    },
    {
        id: 4,
        name: "The Music Place",
        description: "Instrumentos y accesorios musicales de verdadera calidad",
        image: "https://lucatamasi.github.io/tpothemusicplace/img1.webp",
        link: "https://lucatamasi.github.io/tpothemusicplace/index.html",
        details: "Un espacio dedicado a los amantes de la música. Encontrá instrumentos de calidad, accesorios y un ambiente pensado para que vivas la experiencia musical al máximo.",
        keywords: ["música", "instrumentos", "guitarras", "teclados", "batería", "bajo", "accesorios musicales", "partituras", "audio", "tienda de música"],
        hasPromo: true
    },
    {
        id: 18,
        name: "Local Nova",
        description: "Productos Prácticos y Modernos",
        image: "https://www.momat.go.jp/wp-content/uploads/2023/02/shop-1.jpg",
        link: "https://matitevezzz.github.io/index.html",
        details: "Local Nova es la tienda de productos prácticos y modernos. Encuentra las últimas colecciones de productos para el hogar, oficina, belleza, cuidado personal y más. Innovación, estilo y rendimiento para todos los productos.",
        keywords: ["local nova", "productos prácticos", "productos modernos", "hogar", "oficina", "belleza", "cuidado personal", "productos", "productos para el hogar", "productos para la oficina"],
        hasPromo: true
    },
    {
        id: 6,
        name: "Apple Store",
        description: "Dispositivos, accesorios y servicios Apple oficiales",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
        link: "https://www.apple.com",
        details: "La Apple Store oficial de Centro Arcadia ofrece todos los productos Apple más recientes. iPhone, iPad, Mac, Apple Watch y más, junto con accesorios oficiales y servicios de soporte técnico. Nuestros especialistas te ayudarán a elegir el dispositivo perfecto para ti.",
        keywords: ["apple", "iphone", "ipad", "mac", "apple watch", "tecnología", "smartphone", "tablet", "computadora", "accesorios apple"],
        hasPromo: false
    },
    {
        id: 7,
        name: "Starbucks",
        description: "Café premium, bebidas y snacks deliciosos",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
        link: "https://www.starbucks.com",
        details: "Starbucks es el lugar perfecto para relajarte con un café premium o una bebida especial. Ofrecemos una amplia variedad de bebidas calientes y frías, snacks deliciosos y productos exclusivos. Ambiente acogedor ideal para reuniones o un momento de tranquilidad.",
        keywords: ["starbucks", "café", "bebidas", "cappuccino", "latte", "frappuccino", "snacks", "postres", "cafetería", "coffee"],
        hasPromo: false
    },
    {
        id: 8,
        name: "Adidas",
        description: "Deportes, fitness y estilo de vida activo",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop",
        link: "https://www.adidas.com",
        details: "Adidas en Centro Arcadia ofrece equipamiento deportivo de alta calidad para todos los niveles. Desde calzado deportivo hasta ropa de entrenamiento, tenemos todo lo que necesitas para tu estilo de vida activo. Innovación y diseño alemán al alcance de todos.",
        keywords: ["adidas", "deportes", "calzado deportivo", "ropa deportiva", "fitness", "running", "fútbol", "zapatillas", "sneakers", "tres rayas"],
        hasPromo: false
    },
    {
        id: 9,
        name: "Sephora",
        description: "Belleza, maquillaje y cuidado de la piel",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
        link: "https://www.sephora.com",
        details: "Sephora es el destino de belleza definitivo. Encuentra las mejores marcas de maquillaje, cuidado de la piel, fragancias y más. Nuestros expertos en belleza te ayudarán a encontrar los productos perfectos y ofrecemos servicios de maquillaje personalizados.",
        keywords: ["sephora", "belleza", "maquillaje", "cuidado de la piel", "fragancias", "perfumes", "cosméticos", "beauty", "makeup", "skincare"],
        hasPromo: false
    },
    {
        id: 10,
        name: "H&M",
        description: "Moda asequible y sostenible para toda la familia",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        link: "https://www.hm.com",
        details: "H&M ofrece moda para toda la familia a precios accesibles. Nuestras colecciones incluyen ropa para mujer, hombre y niños con un compromiso fuerte hacia la sostenibilidad. Moda de calidad sin comprometer el medio ambiente.",
        keywords: ["h&m", "hm", "moda", "ropa", "fashion", "mujer", "hombre", "niños", "sostenible", "accesible", "precio"],
        hasPromo: false
    },
    {
        id: 11,
        name: "GameStop",
        description: "Videojuegos, consolas y accesorios gaming",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
        link: "https://www.gamestop.com",
        details: "GameStop es el lugar perfecto para gamers. Tenemos los últimos videojuegos, consolas de nueva generación, accesorios gaming, figuras coleccionables y más. También aceptamos intercambios de juegos usados. Todo lo que un gamer necesita.",
        keywords: ["gamestop", "videojuegos", "gaming", "consolas", "playstation", "xbox", "nintendo", "switch", "games", "juegos", "gamer"],
        hasPromo: false
    },
    {
        id: 12,
        name: "Victoria's Secret",
        description: "Lencería, ropa interior y cuidado personal",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop",
        link: "https://www.victoriassecret.com",
        details: "Victoria's Secret ofrece la más exclusiva selección de lencería, ropa interior, pijamas y cuidado personal. Productos de alta calidad con diseños elegantes y sofisticados. Personal especializado para encontrar la talla perfecta.",
        keywords: ["victoria's secret", "victorias secret", "lencería", "ropa interior", "pijamas", "intimates", "lingerie", "cuidado personal", "beauty"],
        hasPromo: false
    },
    {
        id: 13,
        name: "Forever 21",
        description: "Moda joven y accesorios a precios increíbles",
        image: "https://images.unsplash.com/photo-1523264939339-c89f9dadde2e?w=800&h=600&fit=crop",
        link: "https://www.forever21.com",
        details: "Forever 21 es la tienda de moda joven más popular. Ofrecemos las últimas tendencias de la moda a precios increíbles. Ropa casual, formal, accesorios y más. Perfecto para jóvenes que buscan estilo sin gastar una fortuna.",
        keywords: ["forever 21", "moda joven", "ropa", "fashion", "casual", "accesorios", "tendencias", "juvenil", "barato", "precio"],
        hasPromo: false
    },
    {
        id: 14,
        name: "Best Buy",
        description: "Electrónica, tecnología y electrodomésticos",
        image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=600&fit=crop",
        link: "https://www.bestbuy.com",
        details: "Best Buy es tu tienda de tecnología y electrónica. Encuentra televisores, computadoras, electrodomésticos, cámaras y más de las mejores marcas. Nuestros expertos en tecnología te ayudarán a encontrar exactamente lo que necesitas.",
        keywords: ["best buy", "tecnología", "electrónica", "televisores", "computadoras", "electrodomésticos", "cámaras", "tech", "electronics", "gadgets"],
        hasPromo: false
    },
    {
        id: 15,
        name: "Pandora",
        description: "Joyería personalizada y accesorios únicos",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
        link: "https://www.pandora.net",
        details: "Pandora ofrece joyería única y personalizable. Crea tu propia pulsera con charms significativos, elige entre una amplia selección de anillos, collares y aretes. Joyería de plata esterlina 925 y oro de alta calidad para momentos especiales.",
        keywords: ["pandora", "joyería", "pulseras", "charms", "anillos", "collares", "aretes", "plata", "oro", "jewelry", "accesorios"],
        hasPromo: false
    },
    {
        id: 16,
        name: "The Body Shop",
        description: "Productos de belleza natural y cuidado personal ético",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop",
        link: "https://www.thebodyshop.com",
        details: "The Body Shop ofrece productos de belleza naturales y éticos. Desde cuidado de la piel hasta maquillaje, todos nuestros productos están hechos con ingredientes naturales y son cruelty-free. Comprometidos con el comercio justo y la sostenibilidad.",
        keywords: ["the body shop", "belleza natural", "cuidado de la piel", "cruelty-free", "ético", "natural", "skincare", "beauty", "cosméticos", "sostenible"],
        hasPromo: false
    },
    {
        id: 17,
        name: "Nike",
        description: "Calzado deportivo de alta calidad",
        image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&h=600&fit=crop",
        link: "https://www.nike.com",
        details: "Nike es la tienda de calzado deportivo más popular. Encuentra las últimas colecciones de zapatillas, indumentaria para running, entrenamiento, fútbol, básquet y mucho más. Innovación, estilo y rendimiento para todos los deportes.",
        keywords: ["nike", "zapatillas", "ropa deportiva", "tenis", "moda deportiva", "sneakers", "accesorios", "fútbol", "básquet", "running"],
        hasPromo: false
    },
    {
        id: 5,
        name: "Zara",
        description: "Moda y ropa de tendencia para toda la familia",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        link: "https://www.zara.com",
        details: "Zara te ofrece las últimas tendencias de la moda internacional. Nuestra tienda incluye colecciones para mujer, hombre y niños con diseños exclusivos que se actualizan constantemente. Moda rápida y accesible sin comprometer el estilo.",
        keywords: ["zara", "moda", "ropa", "fashion", "mujer", "hombre", "niños", "tendencias", "estilo", "prêt-à-porter"],
        hasPromo: false
    }
];

function generateStoreCards() {
    const storesContainer = document.getElementById('stores-grid');
    
    if (!storesContainer) {
        console.error('Stores grid container not found');
        return;
    }

    storesContainer.innerHTML = '';

    stores.forEach(store => {
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

        storesContainer.appendChild(card);
    });

    console.log(`Generated ${stores.length} store cards`);
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery && typeof searchStores !== 'undefined' && typeof displaySearchResults !== 'undefined') {
        const results = searchStores(searchQuery);
        displaySearchResults(results, 'stores-grid');
        
        const titleElement = document.querySelector('.stores-title');
        if (titleElement) {
            titleElement.textContent = `Resultados para: "${searchQuery}"`;
        }
    } else {
        generateStoreCards();
    }
});

