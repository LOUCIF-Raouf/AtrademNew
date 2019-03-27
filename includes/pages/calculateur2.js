$('.radio-nb-demen').on('click', e => {
    Cart.addItem({
        id: "nbDéménageurs",
        quantity: -1,
    });
    Cart.addItem({
        id: "nbDéménageurs",
        price: e.target.dataset.price,
        quantity: 1,
        label: e.target.dataset.label,
    });
});

$('.demi_journee_val').on('change', e => {
    Cart.addItem({
        id: "demiJourneeVal",
        quantity: -1,
    });
    Cart.addItem({
        id: "demiJourneeVal",
        price: 0,
        quantity: 1,
        label: e.target.value,
    });
});

$("#boxDuree4h").click(e => {
    document.getElementById('boxDuree4h').style.filter = "blur(0)";
    document.getElementById('boxDuree7h').style.filter = "blur(2px)";
    document.getElementById('boxDuree7h').style.transition = "filter 0.3s";
    document.getElementById('radio4h').click();
    let card = document.getElementById('radio4h');
    console.log(card);
    Cart.addItem({
        id: "garantie",
        quantity: -1,
    });
    Cart.addItem({
        id: "garantie",
        price: card.dataset.price,
        quantity: 1,
        label: card.dataset.label,
    });
});

$("#boxDuree7h").click(e => {
    document.getElementById('boxDuree7h').style.filter = "blur(0)";
    document.getElementById('boxDuree4h').style.filter = "blur(2px)";
    document.getElementById('boxDuree4h').style.transition = "filter 0.3s";
    document.getElementById('radio7h').click();
    let card = document.getElementById('radio7h');
    console.log(card);
    Cart.addItem({
        id: "demiJourneeVal",
        quantity: -1,
    });
    Cart.addItem({
        id: "garantie",
        quantity: -1,
    });
    Cart.addItem({
        id: "garantie",
        price: card.dataset.price,
        quantity: 1,
        label: card.dataset.label,
    });
});

$('.demi_journee_val').on('change', e => {
    console.log();
    Cart.addItem({
        id: "demiJourneeVal",
        quantity: -1,
    });
    Cart.addItem({
        id: "demiJourneeVal",
        price: 0,
        quantity: 1,
        label: e.target.value,
    });
});