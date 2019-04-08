    //event bouton supprimer
    clearCart.addEventListener('click', e => clearCartFun(e));

    /* ------------- NOMBRE DEMENAGEURS --------------- */
    $('.radio-nb-demen').on('click', e => {
        Cart.addItem({
            id: "nb_demen",
            quantity: -1,
        });
        Cart.addItem({
            id: "nb_demen",
            price: e.target.dataset.price,
            quantity: e.target.dataset.quantity,
            label: e.target.dataset.label,
            hiddenPrice: e.target.dataset.hiddenprice,
        });
    });

    /* ------------- TAILLE CAMION ------------- */

    var truckSizes = document.getElementsByClassName('radio-taille-camion');
    var noTruck = document.getElementById('radio-taille-camion-0');

    noTruck.addEventListener('click', e => {
        Cart.addItem({
            id: "taille_camion",
            quantity: -1
        });
    });

    for (var i = 0; i < truckSizes.length; i++) {
        truckSizes[i].addEventListener('click', e => {
            Cart.addItem({
                id: "taille_camion",
                quantity: -1
            });
            Cart.addItem({
                id: "taille_camion",
                price: e.target.dataset.price,
                quantity: 1,
                label: e.target.dataset.label,
                hiddenPrice: e.target.dataset.hiddenprice,
            });
        });
    }

    /* ------------- DUREE PRESTATION ------------- */


    let boxDuree4h = document.getElementById('boxDuree4h');
    let boxDuree7h = document.getElementById('boxDuree7h');
    let demiJourneeVal = document.getElementById('demi_journee_val');

    $("#boxDuree4h").click(e => {
        boxDuree4h.style.filter = "blur(0)";
        boxDuree7h.style.filter = "blur(2px)";
        boxDuree7h.style.transition = "filter 0.3s";
        document.getElementById('radio4h').click();
        demiJourneeVal.style.display = "block";
        let card = document.getElementById('radio4h');




        /* Cart.addItem({
            id: "garantie",
            quantity: -1,
        });
        Cart.addItem({
            id: "garantie",
            price: card.dataset.price,
            quantity: 1,
            label: card.dataset.label,
        }); */
    });


    $("#boxDuree7h").click(e => {
        boxDuree7h.style.filter = "blur(0)";
        boxDuree4h.style.filter = "blur(2px)";
        boxDuree4h.style.transition = "filter 0.3s";
        document.getElementById('radio7h').click();
        demiJourneeVal.style.display = "none";
        let card = document.getElementById('radio7h');
        var nbDemenPrice = parseInt(Cart.getFullItem("nb_demen").hiddenPrice);
        var taillePrice = parseInt(Cart.getFullItem("taille_camion").hiddenPrice);
        var garantie = Cart.getFullItem("garantie");
        var combo = taillePrice + nbDemenPrice + parseInt(card.dataset.price);

        Cart.addItem({
            id: "duree_presta",
            quantity: -1,
        });
        Cart.addItem({
            id: "duree_presta",
            label: card.dataset.label,
            quantity: 1,
            price: combo,
        });
    });

    $('.demi_journee_val').on('change', e => {
        var val = document.getElementById("demi_journee_val").value;
        var nbDemenPrice = parseInt(Cart.getFullItem("nb_demen").hiddenPrice);
        var taillePrice = parseInt(Cart.getFullItem("taille_camion").hiddenPrice);
        var combo = taillePrice + nbDemenPrice + parseInt(e.target.dataset.price);
        Cart.addItem({
            id: "duree_presta",
            quantity: -1,
        });
        Cart.addItem({
            id: "duree_presta",
            quantity: 1,
            label: val,
            price: combo,
        });

    });