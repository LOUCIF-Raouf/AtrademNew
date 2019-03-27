var dateSelect;
var isWK = false;

var calendar = new HelloWeek({
    selector: '.hello-week',
    lang: 'fr',
    langFolder: 'http://localhost:8888/AtrademNew/bizzco/includes/Atradem/calendarPicker/lib/langs/',
    format: 'dd/mm/yyyy',
    weekShort: true,
    monthShort: false,
    multiplePick: false,
    defaultDate: null,
    todayHighlight: true,
    disablePastDays: true,
    disabledDaysOfWeek: null,
    disableDates: null,
    weekStart: 1, // week start on Monday
    daysHighlight: null,
    daysSelected: null,
    range: false,
    rtl: false,
    locked: false,
    minDate: null,
    maxDate: null,
    nav: ['◀', '▶'],
    onLoad: () => {
        /** callback function */ },
    onChange: () => {
        /** callback function */ },
    onSelect: () => {
        dateSelect = calendar.getDays();
    },
    onClear: () => {
        /** callback function */ }
});

// function oui() {
//     console.log(calendar.getDays());
//     console.log(this);
// }

function display() {
    alert("Vous avez choisi la date : " + dateSelect[0]);
    if (isWK == true) {
        alert("Attention : la date choisie est un jour de weekend");
    } else {
        alert("ok");
    }
}

$(document).on('click', 'div.day', (e) => {
    if (e.target.classList.contains('is-weekend')) {
        isWK = true;
    }
    display();
});