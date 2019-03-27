class Sidebar {
    constructor() {
        this.priceContent = document.getElementById('price');
        this.cartContent = document.getElementById('menu1');
        let li = document.createElement('li');
        this.cart = [];
        this.getLocal();
    }

    addOptions(options) {
        options.forEach(option => {
            this.cartContent.append(li);
            li.innerText = option;
        });
    }

    update(price) {
        this.priceContent = parseFloat(this.priceContent) + parseFloat(price);
    }

    //LOCALSTORAGE FUNCTION

    //recup data dans le localstorage
    getLocal() {

        this.cart += this.object = JSON.parse(localStorage.getItem('cart')); //sinon renvoi les donnée du LS en decodant (JSON)
        this.cart += this.montage = JSON.parse(localStorage.getItem('montage'));
        this.cart += this.carton = JSON.parse(localStorage.getItem('carton'));
        this.cart += this.materiel = JSON.parse(localStorage.getItem('materiel'));
        this.cart += this.date = JSON.parse(localStorage.getItem('date'));
        this.cart += this.garantie = JSON.parse(localStorage.getItem('garantie'));
        this.cart += this.materiel = JSON.parse(localStorage.getItem('materiel'));
        this.cart += this.annulation = JSON.parse(localStorage.getItem('annulation'));
        this.cart += this.adresses = JSON.parse(localStorage.getItem('adresses'));
        this.cart += this.materiel = JSON.parse(localStorage.getItem('materiel'));

    }

    //modifie le localstorage
    updateLocal(name, value) {
        localStorage.removeItem(name); //supprimer 
        localStorage.setItem(name, JSON.stringify(value)); //rajoute
    }
}
let sidebar = new Sidebar();