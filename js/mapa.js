const floors = [
    {
        id: 1,
        name: 'Primer Piso',
        image: 'assets/images/MapaPrimerPiso.png',
        areas: [
            { shape: 'rect', coords: '10,50,88,126', href: 'https://totesss.github.io/HUDZ-WEB-PAGE/', alt: 'Local 1 - Tienda de Ropa' },
            { shape: 'rect', coords: '10,130,88,207', href: 'https://erickbarronb.github.io/Striker', alt: 'Local 2 - Tienda de Computadoras' },
            { shape: 'rect', coords: '10,208,88,283', href: 'https://pablitoort.github.io/Pagina-web-shooping', alt: 'Local 3 - Tienda de Figuras Coleccionables' },
            { shape: 'rect', coords: '10,283,88,359', href: 'https://lucatamasi.github.io/tpothemusicplace/index.html', alt: 'Local 4 - Tienda de Instrumentos Musicales' },
            { shape: 'rect', coords: '10,359,88,424', href: 'https://matitevezzz.github.io/index.html', alt: 'Local 5 - Tienda de Productos Prácticos y Modernos' },
            { shape: 'rect', coords: '180,50,255,87', href: 'https://totesss.github.io/HUDZ-WEB-PAGE/', alt: 'Local 6 - Tienda de Ropa' },
            { shape: 'rect', coords: '266,210,378,264', href: 'https://totesss.github.io/HUDZ-WEB-PAGE/', alt: 'Local 7 - Tienda de Ropa' },
            { shape: 'rect', coords: '266,264,378,374', href: 'https://totesss.github.io/HUDZ-WEB-PAGE/', alt: 'Local 8 - Tienda de Ropa' }
        ]
    },

    {
        id: 2,
        name: 'Segundo Piso',
        image: 'assets/images/MapaPrimerPiso.png',
        areas: [
            { shape: 'rect', coords: '10,50,88,126', href: 'https://totesss.github.io/HUDZ-WEB-PAGE/', alt: 'Local 1 - Segundo Piso' },
            { shape: 'rect', coords: '10,130,88,207', href: 'https://erickbarronb.github.io/Striker', alt: 'Local 2 - Segundo Piso' }
        ],

    },
    
    {
        id: 4,
        name: 'Estacionamiento Exterior',
        image: 'assets/images/MapaPrimerPiso.png',
        areas: [
            { shape: 'rect', coords: '10,50,88,126', href: 'https://totesss.github.io/HUDZ-WEB-PAGE/', alt: 'Local 1 - Cuarto Piso' },
            { shape: 'rect', coords: '10,130,88,207', href: 'https://erickbarronb.github.io/Striker', alt: 'Local 2 - Cuarto Piso' }
        ]
    },
    {
        id: 5,
        name: 'Estacionamiento Interior',
        image: 'assets/images/MapaPrimerPiso.png',
        areas: [
            { shape: 'rect', coords: '10,50,88,126', href: 'https://totesss.github.io/HUDZ-WEB-PAGE/', alt: 'Local 1 - Cuarto Piso' },
            { shape: 'rect', coords: '10,130,88,207', href: 'https://erickbarronb.github.io/Striker', alt: 'Local 2 - Cuarto Piso' }
        ]
    }
];

let currentFloorIndex = 0;
let originalImageDimensions = {};

$(document).ready(function() {
    const $slider = $('#mapaSlider');
    const $prevBtn = $('.mapa-nav-prev');
    const $nextBtn = $('.mapa-nav-next');
    const $floorIndicator = $('.mapa-floor-indicator');
    const $floorTotal = $floorIndicator.find('.floor-total');

    $floorTotal.text(floors.length);

    function createFloorHTML(floor, index) {
        const mapName = `mapa-locales-${floor.id}`;
        let areasHTML = '';
        
        floor.areas.forEach((area, areaIndex) => {
            areasHTML += `<area shape="${area.shape}" coords="${area.coords}" href="${area.href}" alt="${area.alt}">`;
        });

        return `
            <div class="mapa-floor ${index === 0 ? 'active' : ''}" data-floor-index="${index}">
                <div class="mapa-image-wrapper">
                    <img src="${floor.image}" alt="${floor.name}" usemap="#${mapName}">
                    <map name="${mapName}">
                        ${areasHTML}
                    </map>
                </div>
            </div>
        `;
    }

    function initializeFloors() {
        $slider.empty();
        floors.forEach((floor, index) => {
            $slider.append(createFloorHTML(floor, index));
        });
        updateFloorDisplay();
        createMarkersForCurrentFloor();
    }

    function updateFloorDisplay() {
        const $sliderWrapper = $('.mapa-slider-wrapper');
        const translateX = -currentFloorIndex * 100;
        $slider.css('transform', `translateX(${translateX}%)`);

        $('.mapa-floor').removeClass('active');
        $(`.mapa-floor[data-floor-index="${currentFloorIndex}"]`).addClass('active');

        $prevBtn.prop('disabled', currentFloorIndex === 0);
        $nextBtn.prop('disabled', currentFloorIndex === floors.length - 1);

        $floorIndicator.find('.floor-current').text(currentFloorIndex + 1);
    }

    function getImageDimensions($img) {
        return new Promise((resolve) => {
            if ($img[0].complete && $img[0].naturalWidth > 0) {
                resolve({
                    naturalWidth: $img[0].naturalWidth,
                    naturalHeight: $img[0].naturalHeight,
                    displayWidth: $img[0].offsetWidth,
                    displayHeight: $img[0].offsetHeight
                });
            } else {
                $img.on('load', function() {
                    resolve({
                        naturalWidth: this.naturalWidth,
                        naturalHeight: this.naturalHeight,
                        displayWidth: this.offsetWidth,
                        displayHeight: this.offsetHeight
                    });
                });
            }
        });
    }

    function createMarkersForCurrentFloor() {
        const $currentFloor = $(`.mapa-floor[data-floor-index="${currentFloorIndex}"]`);
        const $imageWrapper = $currentFloor.find('.mapa-image-wrapper');
        const $mapImage = $currentFloor.find('img');
        
        $imageWrapper.find('.marker').remove();
        
        if ($mapImage.length === 0) return;

        const imageKey = `${floors[currentFloorIndex].id}`;
        
        getImageDimensions($mapImage).then((dimensions) => {
            if (!originalImageDimensions[imageKey]) {
                originalImageDimensions[imageKey] = {
                    width: dimensions.naturalWidth,
                    height: dimensions.naturalHeight
                };
            }

            const scaleX = dimensions.displayWidth / originalImageDimensions[imageKey].width;
            const scaleY = dimensions.displayHeight / originalImageDimensions[imageKey].height;

            const currentFloor = floors[currentFloorIndex];
            const mapName = `mapa-locales-${currentFloor.id}`;
            $(`map[name="${mapName}"] area`).each(function() {
                const $area = $(this);
                const coords = $area.attr('coords').split(',').map(Number);
                const shape = $area.attr('shape');
                const href = $area.attr('href');
                
                if (shape === 'rect' && coords.length === 4) {
                    const x1 = coords[0] * scaleX;
                    const y1 = coords[1] * scaleY;
                    const x2 = coords[2] * scaleX;
                    const y2 = coords[3] * scaleY;
                    
                    const $marker = $('<div class="marker rect"></div>');
                    $marker.css({
                        left: x1 + 'px',
                        top: y1 + 'px',
                        width: (x2 - x1) + 'px',
                        height: (y2 - y1) + 'px'
                    });
                    
                    $marker.on('click', function(e) {
                        e.preventDefault();
                        window.location.href = href;
                    });
                    
                    $imageWrapper.append($marker);
                } else if (shape === 'circle' && coords.length === 3) {
                    const centerX = coords[0] * scaleX;
                    const centerY = coords[1] * scaleY;
                    const radius = coords[2] * Math.min(scaleX, scaleY);
                    
                    const $marker = $('<div class="marker circle"></div>');
                    $marker.css({
                        left: (centerX - radius) + 'px',
                        top: (centerY - radius) + 'px',
                        width: (radius * 2) + 'px',
                        height: (radius * 2) + 'px',
                        borderRadius: '50%'
                    });
                    
                    $marker.on('click', function(e) {
                        e.preventDefault();
                        window.location.href = href;
                    });
                    
                    $imageWrapper.append($marker);
                }
            });
        });
    }

    $prevBtn.on('click', function() {
        if (currentFloorIndex > 0) {
            currentFloorIndex--;
            updateFloorDisplay();
            setTimeout(() => createMarkersForCurrentFloor(), 300);
        }
    });

    $nextBtn.on('click', function() {
        if (currentFloorIndex < floors.length - 1) {
            currentFloorIndex++;
            updateFloorDisplay();
            setTimeout(() => createMarkersForCurrentFloor(), 300);
        }
    });

    $(window).on('resize', function() {
        clearTimeout(window.mapResizeTimer);
        window.mapResizeTimer = setTimeout(() => {
            createMarkersForCurrentFloor();
        }, 250);
    });

    initializeFloors();
});
