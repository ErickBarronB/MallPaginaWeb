
const events = [
    {
        id: 1,
        name: "Entrega de Pagina Centro Comercial",
        description: "Este dia hay que hacer la entrega de la pagina web a la profe, y hacer la primera prueba de la pagina web.",
        date: "2025-11-24",
        startTime: "10:00",
        endTime: "20:00",
        image: "https://thumbs.dreamstime.com/b/handing-homework-16677502.jpg"
    },
    {
        id: 2,
        name: "Presentacion de la Pagina Centro Comercial",
        description: "Este dia hay que presentar la pagina web a la profe, y hacer la segunda prueba de la pagina web.",
        date: "2025-11-27",
        startTime: "14:00",
        endTime: "21:00",
        image: "https://media.istockphoto.com/id/1041618802/photo/hear-me-out-on-this-one.jpg?s=612x612&w=0&k=20&c=WlAjoWNJxKAg-pVD_S575XAvLlp-yPuHlXps2RU6xWI="
    },
    {
        id: 3,
        name: "Noche de Descuentos",
        description: "Una noche especial con descuentos exclusivos en todas las tiendas. Aprovecha ofertas únicas, música en vivo y un ambiente festivo en todo el centro comercial.",
        date: "2025-11-28",
        startTime: "18:00",
        endTime: "23:00",
        image: "https://blog.agilenceinc.com/hubfs/stacking-discounts.png"
    },
    {
        id: 4,
        name: "Concierto de Año Nuevo",
        description: "Da la bienvenida al nuevo año con nuestro concierto especial. Artistas locales, comida deliciosa y una celebración inolvidable para toda la familia.",
        date: "2025-12-31",
        startTime: "20:00",
        endTime: "01:00",
        image: "https://perapalace.com/wp-content/uploads/2023/12/dunyanin-farkli-yerlerinden-yilbasi-gelenekleri.jpg"
    },
    {
        id: 5,
        name: "Día de Regalos",
        description: "Último día para hacer tus compras navideñas con descuentos especiales y promociones exclusivas. Personal de atención al cliente disponible para ayudarte con tus compras.",
        date: "2025-12-21",
        startTime: "09:00",
        endTime: "22:00",
        image: "https://i.guim.co.uk/img/media/fa99654930cbf4cc2ad46f3bc2c504c5d3a00924/0_265_5027_3017/master/5027.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e96a12cfb8ceebfe286929c38148fa50"
    },
    {
        id: 6,
        name: "Taller de Cocina Familiar",
        description: "Ven con tu familia y aprende a cocinar juntos. Conoce las mejores recetas y las técnicas de cocina para que puedas cocinar en casa.",
        date: "2026-01-06",
        startTime: "16:00",
        endTime: "18:00",
        image: "https://foodal.com/wp-content/uploads/2023/02/Cooking-Benefits.jpg"
    },
    {
        id: 7,
        name: "Exposición de Arte Local",
        description: "Explora el talento artístico local con nuestra exposición especial. Obras de artistas de la región, charlas con los creadores y actividades interactivas para toda la familia.",
        date: "2026-01-21",
        startTime: "11:00",
        endTime: "19:00",
        image: "https://cdn.5280.com/2020/09/Governors-Art-Show2.jpg"
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
        image: "https://cdag.com.gt/wp-content/uploads/2025/06/ESports.jpeg"
    },
    {
        id: 10,
        name: "Evento Comidas Culturales",
        description: "Disfruta de una variedad de comidas culturales. Desde comida mexicana hasta comida japonesa. Conoce los sabores de diferentes países.",
        date: "2025-11-25",
        startTime: "12:00",
        endTime: "18:00",
        image: "https://static1.squarespace.com/static/53b839afe4b07ea978436183/53bbeeb2e4b095b6a428a13e/5fd2570b51740e23cce97919/1763061467797/traditional-food-around-the-world-Travlinmad.jpg?format=1500w"
    },
    {
        id: 11,
        name: "Cumpleaños del Web Developer",
        description: "Disfruta de una variedad de comidas culturales. Desde comida mexicana hasta comida japonesa. Conoce los sabores de diferentes países.",
        date: "2026-02-01",
        startTime: "12:00",
        endTime: "18:00",
        image: "https://bracegirdles.com.au/cdn/shop/files/Happy_Birthday.png?v=1742789481&width=1445"
    },
    {
        id: 12,
        name: "Evento UADE en el centro comercial",
        description: "UADE tiene un evento en el centro comercial. Conoce los programas de UADE y los beneficios que te ofrece.",
        date: "2025-11-25",
        startTime: "10:00",
        endTime: "18:00",
        image: "https://tn.com.ar/resizer/v2/suspendieron-a-un-profesor-de-la-uade-por-una-avalancha-de-denuncias-de-acoso-V26D5DJX5ZNSHNVCTXNQH5CWUY.jpg?auth=29fbf6fd50a422cd82a3c23a447c3e4db5fc801da66a6aa6b4bbb95a50057dd2&width=767"
    },
    {
        id: 13,
        name: "Cumpleaños de Chamo",
        description: "Feliz cumpleaños chamo, te deseamos un feliz cumpleaños y que disfrutes de tu dia.",
        date: "2025-11-21",
        startTime: "00:00",
        endTime: "23:59",
        image: "https://llevatilde.es/imagetexts/7/74/chamo.png"
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
