var buttons = document.querySelectorAll('.article button'); //bouton ajouter
var panier = document.getElementById('recapTable'); //tableau HTML affichage
var clearCart = document.getElementById('clearCart');  //bouton supprimer
var price = document.getElementById('price'); //affichage du prix

var articleTab = []; //creation du tableau des objets selectionné 




//affiche le panier 
function displayCart() {
    panier.innerText = ""; //efface entierment le tableau 
    articleTab.forEach( article => {
        let ligne = document.createElement('tr'); //ligne du tableau 

        let name = document.createElement('td');//colonne "name"
        name.innerText = article.name;
        name.style.textTransform = "capitalize"; //capitalize css

        let quantity = document.createElement('td'); //colonne "quantité"
        quantity.innerText = article.quantity;

        let actions = document.createElement('td'); //colonne actions (bouton moins et plus)

        let buttonGroup = document.createElement('div'); //div bootstrap
        buttonGroup.classList.add('btn-group');

        let buttonLess = document.createElement('button'); //bouton moins
        buttonLess.innerText = "-";
        buttonLess.classList.add('buttonLess', 'btn', 'btn-outline-secondary');
        buttonLess.dataset.name = article.name;

        let buttonMore = document.createElement('button'); //bouton plus
        buttonMore.innerText = "+";
        buttonMore.classList.add('buttonMore', 'btn', 'btn-outline-secondary');
        buttonMore.dataset.name = article.name;

        buttonGroup.append(buttonLess, buttonMore); //place les boutons moins et plus dans la div bootstrap

        actions.append(buttonGroup); //place la div bootstrap dans la colonne actions

        ligne.append(name, quantity, actions); //place les 3 colonnes dans la ligne
        panier.append(ligne); //place la ligne dans le tableau
    });


    updateLocal(); //update le localstorage
}

//modifie la quantité d'un objet choisie en plus ou moins  
function updateQuantity(action, articleName, number) {
    if (action == "plus") { //plus 1 dans la quantité 
        articleTab.forEach( (articleOld, index) => { //parcours le tableau 
            if (articleOld.name == articleName) { //trouve l'objet concerné 
                articleOld.quantity = articleOld.quantity+number; //ajoute number a la quantité 
            }
        });
    }
    if (action == "moins") { //pareille que au dessus pour le bouton moins 
        articleTab.forEach( (articleOld, index) => {
            if (articleOld.name == articleName) {
                if (articleOld.quantity == 1) { //si la quantité est a 1 et que l'user veut baisser la quantité : ->
                    articleTab.splice(index, 1); //supprimer l'objet 
                } else {
                    articleOld.quantity = articleOld.quantity-number; //sinon on baisse de number  la quantité
                }
            }
        });
    }
    displayCart(); //affiche le panier
}

function addArticle(articleName) { //ajout d'un article

    let temp = false; //variable temporaire //0
    
    articleTab.forEach( article => { //parcours le tableau de tous les objets
        if (articleName == article.name) { //si l'article est deja dans le tablau on ajuste la quantité
            updateQuantity("plus", articleName, 1);
            temp = true; //variable tempo //1
        }
    });
    
    if (temp == false) { //si l'article n'est pas encore dans le tableau 
        //créé object contenant nom et quantité de l'article a ajouter au panier
        let article = Object({
            name: articleName,
            quantity: 1
        });
        //ajoute l'object article dans le tableau (panier)
        articleTab.push(article);
    }

    //update l'affichage du panier
    displayCart();
}

//supprime le tableau et le localstorage et affiche le tableau (vide)
function clearCartFun() {
    articleTab = [];
    displayCart();
    localStorage.removeItem('cart');
}

//LOCALSTORAGE FUNCTION

//recup data dans le localstorage
function getLocal() {
    if (localStorage.getItem('cart') == null) { //si pas de tableau dans le LS 
        return []; //retourne tableau vide
    } else {
        return JSON.parse(localStorage.getItem('cart')); //sinon renvoi les donnée du LS en decodant (JSON)
    }
}

//modifie le localstorage
function updateLocal() {
    localStorage.removeItem('cart'); //supprimer 
    localStorage.setItem('cart', JSON.stringify(articleTab)); //rajoute
}



//EVENTS
//EVENTS
//EVENTS
//EVENTS

//event pour les boutons moins
var buttonLess = $(document).on('click', '.buttonLess', (e) => {
    if (e.shiftKey == true) {
        updateQuantity("moins", e.target.dataset.name, 2);
    } else {
        updateQuantity("moins", e.target.dataset.name, 1);
    }
});

//event pour les boutons plus
var buttonMore = $(document).on('click', '.buttonMore', (e) => {
    if (e.shiftKey == true) {
        updateQuantity("plus", e.target.dataset.name, 2);
    } else {
        updateQuantity("plus", e.target.dataset.name, 1);
    }
});

//event bouton supprimer
clearCart.addEventListener('click', clearCartFun);

//event sur tout les bouton ajouter 
buttons.forEach( button => {
    //add event sur le bonton ajouter
    button.addEventListener('click', (e) => {
        addArticle(button.dataset.article); // fonction ajouter article param: nom de l'article
    });
});



//recup data dans le localstorage
articleTab = getLocal();

//Affichage du panier
displayCart();