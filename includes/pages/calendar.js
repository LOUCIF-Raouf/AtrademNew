var dateSelect;
var isWK = false;

var calendar = new HelloWeek({
    selector: '.hello-week',
    lang: 'fr',
    langFolder: './includes/Atradem/calendarPicker/lib/langs/',
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
        /** callback function */
    },
    onChange: () => {
        /** callback function */
    },
    onSelect: () => {
        dateSelect = calendar.getDays();
        display();
    },
    onClear: () => {
        /** callback function */
    }
});

function display() {

    if (isWK == true) {
        Cart.addItem({
            id: 'dateDem',
            quantity: -1,
        });
        Cart.addItem({
            id: 'dateDem',
            price: 200,
            label: 'Date : ' + calendar.getDays(),
        });
    } else {
        Cart.addItem({
            id: 'dateDem',
            quantity: -1,
        });
        Cart.addItem({
            id: 'dateDem',
            price: 0,
            label: 'Date : ' + calendar.getDays(),
        });
    }
}

$(document).on('click', 'div.day', (e) => {
    if (e.target.classList.contains('is-disabled')) {
        return;
    }
    if (e.target.classList.contains('is-weekend')) {
        isWK = true;
    } else {
        isWK = false;
    }
    display(isWK);
});