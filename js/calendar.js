let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        renderCalendar();
        setupEventHandlers();
    }, 100);
});

function setupEventHandlers() {
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    const closeModalBtn = document.getElementById('closeEventModal');
    const modalOverlay = document.querySelector('.event-modal-overlay');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeEventModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeEventModal);
    }


    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeEventModal();
        }
    });
}


function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const monthYearHeader = document.getElementById('currentMonthYear');

    if (!calendarGrid || !monthYearHeader) return;

    if (typeof window.events !== 'undefined') {
        console.log('Events loaded:', window.events.length, 'events');
        if (window.events.length > 0) {
            console.log('Event dates:', window.events.map(e => e.date));
        }
    } else {
        console.error('Events not loaded! window.events is undefined');
    }

    monthYearHeader.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    calendarGrid.innerHTML = '';

    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day empty';
        calendarGrid.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day';
        const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        dayCell.setAttribute('data-date', dateString);

        const today = new Date();
        if (currentYear === today.getFullYear() &&
            currentMonth === today.getMonth() &&
            day === today.getDate()) {
            dayCell.classList.add('today');
        }

        const dayNumber = document.createElement('span');
        dayNumber.className = 'day-number';
        dayNumber.textContent = day;
        dayCell.appendChild(dayNumber);

        let dayEvents = [];

        if (typeof window.events !== 'undefined' && Array.isArray(window.events)) {
            if (window.events.length > 0) {
                dayEvents = window.events.filter(event => {
                    if (!event || !event.date) return false;
                    return event.date === dateString;
                });
            }
        }

        if (dayEvents.length === 0 && typeof window.getEventsForDate === 'function') {
            dayEvents = window.getEventsForDate(dateString);
        }
        
        if (dayEvents && dayEvents.length > 0) {

            dayEvents.forEach((event, index) => {
                if (index < 2) { 
                    const eventLabel = document.createElement('div');
                    eventLabel.className = 'event-label';
                    eventLabel.textContent = event.name;
                    dayCell.appendChild(eventLabel);
                } else if (index === 2) {

                    const moreLabel = document.createElement('div');
                    moreLabel.className = 'event-label event-label-more';
                    moreLabel.textContent = `+${dayEvents.length - 2} más`;
                    dayCell.appendChild(moreLabel);
                }
            });
            
            dayCell.classList.add('has-event');
            
            dayCell.addEventListener('click', () => {
                showEventModal(dayEvents);
            });
        }

        calendarGrid.appendChild(dayCell);
    }
}

function showEventModal(events) {
    const modal = document.getElementById('eventModal');
    const modalBody = document.getElementById('eventModalBody');

    if (!modal || !modalBody) return;

    const eventsArray = Array.isArray(events) ? events : [events];
    
    if (eventsArray.length === 0) return;

    if (modal._keyboardHandler) {
        document.removeEventListener('keydown', modal._keyboardHandler);
        modal._keyboardHandler = null;
    }

    let currentEventIndex = 0;

    function renderEvent(index) {
        currentEventIndex = index;
        const event = eventsArray[index];
        if (!event) return;

        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const formattedStartTime = formatTime(event.startTime);
        const formattedEndTime = formatTime(event.endTime);

        const showNav = eventsArray.length > 1;
        const prevDisabled = index === 0;
        const nextDisabled = index === eventsArray.length - 1;

        modalBody.innerHTML = `
            ${showNav ? `
                <div class="event-modal-nav">
                    <button class="event-nav-btn event-nav-prev" ${prevDisabled ? 'disabled' : ''} aria-label="Evento anterior">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <div class="event-modal-counter">
                        <span class="event-current">${index + 1}</span>
                        <span class="event-separator">/</span>
                        <span class="event-total">${eventsArray.length}</span>
                    </div>
                    <button class="event-nav-btn event-nav-next" ${nextDisabled ? 'disabled' : ''} aria-label="Siguiente evento">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            ` : ''}
            <div class="event-modal-image">
                <img src="${event.image}" alt="${event.name}">
            </div>
            <div class="event-modal-info">
                <h2 class="event-modal-title">${event.name}</h2>
                <div class="event-modal-date">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>${formattedDate}</span>
                </div>
                <div class="event-modal-time">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>${formattedStartTime} - ${formattedEndTime}</span>
                </div>
                <div class="event-modal-description">
                    <p>${event.description}</p>
                </div>
            </div>
        `;

        if (showNav) {
            const prevBtn = modalBody.querySelector('.event-nav-prev');
            const nextBtn = modalBody.querySelector('.event-nav-next');

            if (prevBtn) {
                prevBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (currentEventIndex > 0) {
                        currentEventIndex--;
                        renderEvent(currentEventIndex);
                    }
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (currentEventIndex < eventsArray.length - 1) {
                        currentEventIndex++;
                        renderEvent(currentEventIndex);
                    }
                });
            }

        }
    }

    if (eventsArray.length > 1) {
        modal._keyboardHandler = (e) => {
            if (modal.classList.contains('show')) {
                if (e.key === 'ArrowLeft' && currentEventIndex > 0) {
                    e.preventDefault();
                    currentEventIndex--;
                    renderEvent(currentEventIndex);
                } else if (e.key === 'ArrowRight' && currentEventIndex < eventsArray.length - 1) {
                    e.preventDefault();
                    currentEventIndex++;
                    renderEvent(currentEventIndex);
                }
            }
        };
        document.addEventListener('keydown', modal._keyboardHandler);
    }

    renderEvent(0);

    modal.classList.add('show');
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
}


function closeEventModal() {
    const modal = document.getElementById('eventModal');
    if (modal) {
        if (modal._keyboardHandler) {
            document.removeEventListener('keydown', modal._keyboardHandler);
            modal._keyboardHandler = null;
            modal.removeAttribute('data-keyboard-handler');
        }
        
        modal.classList.remove('show');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }
}

function formatTime(timeString) {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
}

