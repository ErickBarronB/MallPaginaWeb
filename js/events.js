
const events = [
    {
        id: 1,
        name: "Entrega de Pagina Centro Comercial",
        description: "Este dia hay que hacer la entrega de la pagina web a la profe, y hacer la primera prueba de la pagina web.",
        date: "2025-11-24",
        startTime: "10:00",
        endTime: "20:00",
        image: "assets/images/HappyFamilyShopping.jpg"
    },
    {
        id: 2,
        name: "Presentacion de la Pagina Centro Comercial",
        description: "Este dia hay que presentar la pagina web a la profe, y hacer la segunda prueba de la pagina web.",
        date: "2025-11-27",
        startTime: "14:00",
        endTime: "21:00",
        image: "assets/images/HappyFamilyShopping.jpg"
    },
    {
        id: 3,
        name: "Noche de Descuentos",
        description: "Una noche especial con descuentos exclusivos en todas las tiendas. Aprovecha ofertas únicas, música en vivo y un ambiente festivo en todo el centro comercial.",
        date: "2025-11-28",
        startTime: "18:00",
        endTime: "23:00",
        image: "assets/images/TechStore.jpg"
    },
    {
        id: 4,
        name: "Concierto de Año Nuevo",
        description: "Da la bienvenida al nuevo año con nuestro concierto especial. Artistas locales, comida deliciosa y una celebración inolvidable para toda la familia.",
        date: "2025-11-28",
        startTime: "20:00",
        endTime: "01:00",
        image: "assets/images/HappyFamilyShopping.jpg"
    },
    {
        id: 5,
        name: "Día de Regalos",
        description: "Último día para hacer tus compras navideñas con descuentos especiales y promociones exclusivas. Personal de atención al cliente disponible para ayudarte con tus compras.",
        date: "2025-12-21",
        startTime: "09:00",
        endTime: "22:00",
        image: "assets/images/TechStore.jpg"
    },
    {
        id: 6,
        name: "Taller de Cocina",
        description: "Aprende técnicas de cocina con chefs profesionales. Taller interactivo donde podrás aprender y degustar deliciosas recetas. Incluye materiales y degustación.",
        date: "2026-01-06",
        startTime: "16:00",
        endTime: "18:00",
        image: "assets/images/HappyFamilyShopping.jpg"
    },
    {
        id: 7,
        name: "Exposición de Arte Local",
        description: "Explora el talento artístico local con nuestra exposición especial. Obras de artistas de la región, charlas con los creadores y actividades interactivas para toda la familia.",
        date: "2026-01-21",
        startTime: "11:00",
        endTime: "19:00",
        image: "assets/images/TechStore.jpg"
    },
    {
        id: 8,
        name: "Feria de Tecnología",
        description: "Descubre las últimas innovaciones tecnológicas. Prueba nuevos dispositivos, participa en demostraciones y aprovecha ofertas especiales en productos tecnológicos.",
        date: "2026-02-06",
        startTime: "10:00",
        endTime: "20:00",
        image: "assets/images/TechStore.jpg"
    },
    {
        id: 9,
        name: "Torneo de Videojuegos",
        description: "Participa en nuestro emocionante torneo de videojuegos. Competencias para todas las edades, premios para los ganadores y zonas de juego libre.",
        date: "2026-02-07",
        startTime: "12:00",
        endTime: "18:00",
        image: "assets/images/TechStore.jpg"
    }
];

function getEventsForDate(dateString) {
    return events.filter(event => event.date === dateString);
}


function getEventsForMonth(year, month) {
    return events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });
}

if (typeof window !== 'undefined') {
    window.events = events;
    window.getEventsForDate = getEventsForDate;
    window.getEventsForMonth = getEventsForMonth;
}
