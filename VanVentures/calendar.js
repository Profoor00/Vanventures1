const monthNames = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];
let currentMonth1 = new Date().getMonth();
let currentMonth2 = currentMonth1 + 1; // A második hónap a következő hónap

function renderCalendar(month, year, monthDisplayId, daysContainerId) {
    const monthDisplay = document.getElementById(monthDisplayId);
    const daysContainer = document.getElementById(daysContainerId);
    monthDisplay.innerText = `${monthNames[month]} ${year}`;
    daysContainer.innerHTML = "";

    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div class="day"></div>`; // Üres napok a hónap elején
    }

    for (let day = 1; day <= daysInMonth; day++) {
        daysContainer.innerHTML += `<div class="day available">${day}</div>`;
    }
}

function updateCalendars() {
    const year = new Date().getFullYear();
    renderCalendar(currentMonth1, year, "monthYear1", "daysContainer1");
    renderCalendar(currentMonth2, year, "monthYear2", "daysContainer2");
}

document.getElementById("prevMonth1").addEventListener("click", () => {
    currentMonth1--;
    if (currentMonth1 < 0) {
        currentMonth1 = 11; // Vissza a decemberhez
    }
    updateCalendars();
});

document.getElementById("nextMonth1").addEventListener("click", () => {
    currentMonth1++;
    if (currentMonth1 > 11) {
        currentMonth1 = 0; // Vissza a januárhoz
    }
    updateCalendars();
});

document.getElementById("prevMonth2").addEventListener("click", () => {
    currentMonth2--;
    if (currentMonth2 < 0) {
        currentMonth2 = 11; // Vissza a decemberhez
    }
    updateCalendars();
});

document.getElementById("nextMonth2").addEventListener("click", () => {
    currentMonth2++;
    if (currentMonth2 > 11) {
        currentMonth2 = 0; // Vissza a januárhoz
    }
    updateCalendars();
});

// Kezdeti naptár megjelenítése
updateCalendars();