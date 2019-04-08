$(document).ready(function () {
  var buttons = document.querySelectorAll('.article button'); //bouton ajouter
  var panier = document.getElementById('recapTable'); //tableau HTML affichage
  var clearCart = document.getElementById('clearCart'); //bouton supprimer
  var price = document.getElementById('price'); //affichage du prix
  var selects = document.getElementsByClassName('select2-results__option'); //affichage du prix
  var articleTab = []; //creation du tableau des objets selectionné

  //affiche le panier
  function displayCart() {
    if (panier) panier.innerText = ''; //efface entierment le tableau
    articleTab.forEach(article => {
      let ligne = document.createElement('tr'); //ligne du tableau

      let name = document.createElement('td'); //colonne "name"
      name.innerText = article.name;
      name.style.textTransform = 'capitalize'; //capitalize css

      let quantity = document.createElement('td'); //colonne "quantité"
      quantity.innerText = article.quantity;

      let actions = document.createElement('td'); //colonne actions (bouton moins et plus)

      let buttonGroup = document.createElement('div'); //div bootstrap
      buttonGroup.classList.add('btn-group');

      let buttonLess = document.createElement('button'); //bouton moins
      buttonLess.innerText = '-';
      buttonLess.classList.add('buttonLess', 'btn', 'btn-outline-secondary');
      buttonLess.dataset.name = article.name;

      let buttonMore = document.createElement('button'); //bouton plus
      buttonMore.innerText = '+';
      buttonMore.classList.add('buttonMore', 'btn', 'btn-outline-secondary');
      buttonMore.dataset.name = article.name;

      buttonGroup.append(buttonLess, buttonMore); //place les boutons moins et plus dans la div bootstrap

      actions.append(buttonGroup); //place la div bootstrap dans la colonne actions

      ligne.append(name, quantity, actions); //place les 3 colonnes dans la ligne
      if (panier) panier.append(ligne); //place la ligne dans le tableau
    });
    updateMontage();
    updatePrice();
    updateLocal(); //update le localstorage
  }

  //modifie la quantité d'un objet choisie en plus ou moins
  function updateQuantity(action, articleName, number) {
    if (action == 'plus') {
      //plus 1 dans la quantité
      articleTab.forEach((articleOld, index) => {
        //parcours le tableau
        if (articleOld.name == articleName) {
          //trouve l'objet concerné
          articleOld.quantity = articleOld.quantity + number; //ajoute number a la quantité
          Cart.addItem({
            id: articleOld.id,
            quantity: 1
          });
        }
      });
    }
    if (action == 'moins') {
      //pareille que au dessus pour le bouton moins
      articleTab.forEach((articleOld, index) => {
        if (articleOld.name == articleName) {
          Cart.addItem({
            id: articleOld.id,
            quantity: -1
          });
          if (articleOld.quantity == 1) {
            //si la quantité est a 1 et que l'user veut baisser la quantité : ->
            articleTab.splice(index, 1); //supprimer l'objet
          } else {
            articleOld.quantity = articleOld.quantity - number; //sinon on baisse de number  la quantité
          }
        }
      });
    }
    displayCart(); //affiche le panier
  }

  function updatePrice(action, articlePrice) {
    /* price.innerHTML = '';
    var totalPrice = 0;

    articleTab.forEach(article => {
      totalPrice =
        totalPrice + parseFloat(article.price) * parseFloat(article.quantity);
    });

    if (articleTab.length >= 1) {
      console.log('update');
      price.innerHTML = 0;
      totalPrice += 90;
    }
    console.log(totalPrice);

    price.innerHTML = totalPrice; */
  }

  function updateMontage() {
    var listObj = document.getElementById('listObjMontage');
    var price = 80;
    if (articleTab.length === 0) {
      if (listObj) listObj.style.display = 'none';
    } else {
      if (listObj) listObj.style.display = 'block';
      $('#listObjMontage')
        .children()
        .remove();
      articleTab.forEach((article, i) => {
        if (article.quantity >= 1) {
          for (var j = 0; j < article.quantity; j++) {
            var aid = Math.random();
            var listGroup = document.createElement('li');
            listGroup.classList.add('list-group-item');
            var checkBoxDiv = document.createElement('div');
            checkBoxDiv.classList.add('checkbox', 'checkbox-success');
            var checkBoxInput = document.createElement('input');
            checkBoxInput.setAttribute('type', 'checkbox');
            checkBoxInput.setAttribute('id', aid);
            checkBoxInput.setAttribute('data-price', price);
            checkBoxInput.setAttribute('data-id', 'montage' + article.id);
            var checkBoxLabel = document.createElement('label');
            checkBoxLabel.setAttribute('for', aid);
            checkBoxLabel.innerText = article.name;
            listObj.append(listGroup);
            listGroup.append(checkBoxDiv);
            checkBoxDiv.append(checkBoxInput);
            checkBoxDiv.append(checkBoxLabel);

            let toggle = false;
            checkBoxInput.addEventListener('change', e => {
              if (toggle === false) {
                Cart.addItem({
                  id: 'montage' + article.id,
                  price: price,
                  quantity: 1,
                  label: 'Montage : ' + article.name
                });
                toggle = true;
              } else {
                Cart.addItem({
                  id: 'montage' + article.id,
                  quantity: -1
                });
                toggle = false;
              }
            });
          }
        } else {
          var listGroup = document.createElement('li');

          listGroup.classList.add('list-group-item');
          var checkBoxDiv = document.createElement('div');
          checkBoxDiv.classList.add('checkbox', 'checkbox-success');
          var checkBoxInput = document.createElement('input');
          checkBoxInput.setAttribute('type', 'checkbox');
          checkBoxInput.setAttribute('id', i);
          checkBoxInput.setAttribute('data-price', price);
          checkBoxInput.setAttribute('data-id', 'montage' + article.id);
          var checkBoxLabel = document.createElement('label');
          checkBoxLabel.setAttribute('for', i);
          checkBoxLabel.innerText = article.name;
          listObj.append(listGroup);
          listGroup.append(checkBoxDiv);
          checkBoxDiv.append(checkBoxInput);
          checkBoxDiv.append(checkBoxLabel);

          let toggle = false;
          checkBoxInput.addEventListener('change', e => {
            if (toggle === false) {
              Cart.addItem({
                id: 'montage' + article.id,
                price: price,
                quantity: 1,
                label: 'Montage : ' + article.name
              });
              toggle = true;
            } else {
              Cart.addItem({
                id: 'montage' + article.id,
                quantity: -1
              });
              toggle = false;
            }
          });
        }
      });
    }
  }

  function addArticle(articleId, articleName, articleSize, articlePrice) {
    //ajout d'un article
    let temp = false; //variable temporaire //0

    articleTab.forEach(article => {
      //parcours le tableau de tous les objets
      if (articleName == article.name) {
        //si l'article est deja dans le tablau on ajuste la quantité
        updateQuantity('plus', articleName, 1);
        temp = true; //variable tempo //1
      }
    });

    if (temp == false) {
      //si l'article n'est pas encore dans le tableau
      Cart.addItem({
        id: articleId,
        price: articlePrice,
        size: articlePrice / 36,
        quantity: 1,
        label: articleName
      });
      //créé object contenant nom et quantité de l'article a ajouter au panier
      let article = Object({
        id: articleId,
        name: articleName,
        price: articlePrice,
        size: articlePrice / 36,
        quantity: 1
      });
      //ajoute l'object article dans le tableau (panier)
      articleTab.push(article);
    }

    //update l'affichage du panier
    displayCart();
  }

  //supprime le tableau et le localstorage et affiche le tableau (vide)
  function clearCartFun(e) {
    e.preventDefault();
    articleTab = [];
    localStorage.removeItem('cart');
    Cart.empty();
    displayCart();
  }

  //LOCALSTORAGE FUNCTION

  //recup data dans le localstorage
  function getLocal() {
    if (localStorage.getItem('cart') == null) {
      //si pas de tableau dans le LS
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

  $('.checkbox_livraison').click(e => {
    Cart.addItem({
      id: 'reception',
      quantity: -1
    });
    Cart.addItem({
      id: 'reception',
      price: e.target.dataset.price,
      label: e.target.dataset.label
    });
  });

  $('#radioAnnulationNLabel').click(e => {
    Cart.addItem({
      id: 'annulation',
      quantity: -1
    });
  });

  $('#radioAnnulationYLabel').click(e => {
    let radioAnnulation = document.getElementById('radioAnnulationY');
    Cart.addItem({
      id: 'annulation',
      quantity: -1
    });
    Cart.addItem({
      id: 'annulation',
      price: radioAnnulation.dataset.price,
      label: radioAnnulation.dataset.label
    });
  });

  $('#basic-assurance').click(e => {
    document.getElementById('basic-assurance').style.filter = 'blur(0)';
    document.getElementById('default-assurance').style.filter = 'blur(2px)';
    document.getElementById('default-assurance').style.transition =
      'filter 0.3s';
    document.getElementById('radioGarantieBas').click();
    let card = document.getElementById('radioGarantieBas');
    Cart.addItem({
      id: 'garantie',
      quantity: -1
    });
    Cart.addItem({
      id: 'garantie',
      price: card.dataset.price,
      quantity: 1,
      label: card.dataset.label
    });
  });

  $('#default-assurance').click(e => {
    document.getElementById('default-assurance').style.filter = 'blur(0)';
    document.getElementById('basic-assurance').style.filter = 'blur(2px)';
    document.getElementById('basic-assurance').style.transition = 'filter 0.3s';
    document.getElementById('radioGarantieDef').click();
    let card = document.getElementById('radioGarantieDef');
    Cart.addItem({
      id: 'garantie',
      quantity: -1
    });
    Cart.addItem({
      id: 'garantie',
      price: card.dataset.price,
      quantity: 1,
      label: card.dataset.label
    });
  });

  var plus = document.getElementsByClassName('plus');
  var minus = document.getElementsByClassName('minus');

  for (var i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', e => {
      let qty =
        parseFloat(
          $(e.target)
          .prev()
          .val()
        ) + 1;

      $(e.target)
        .prev()
        .val(qty);
      Cart.addItem({
        id: e.target.dataset.id,
        price: e.target.dataset.price,
        quantity: 1,
        label: e.target.dataset.label
      });
    });
  }

  for (var i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', e => {
      let qty =
        $(e.target)
        .next()
        .val() - 1;
      if (qty >= 0) {
        $(e.target)
          .next()
          .val(qty);
      }
      Cart.addItem({
        id: e.target.dataset.id,
        quantity: -1
      });
    });
  }

  /* options = document.getElementsByTagName('option');

      for (var i = 0; i < options.length; i++) {

          options[i].addEventListener('click', e => {
              console.log(options[i].value);

          });
      } */

  $('#selectedObject').on('select2:select', function (e) {
    $('.select2-selection__choice').remove();

    var id = e.params.data.element.attributes[0].value;
    var name = e.params.data.element.attributes[1].value;
    var price = e.params.data.element.attributes[2].value;
    var size = price / 36;

    addArticle(id, name, size, price);
  });


  /*--------- OPTIONS ----------*/

  $('#option_select_mm').on('change', function (e) {


    var value = e.target.value.split(':');
    if (value[1] == undefined) {
      Cart.addItem({
        id: e.target.dataset.id,
        quantity: -1,
      });
    } else {
      Cart.addItem({
        id: e.target.dataset.id,
        quantity: -1,
      });

      Cart.addItem({
        id: e.target.dataset.id,
        price: value[0],
        label: value[1],
        quantity: 1,
      });
    }
  });

  $('.option_select_details').on('change', function (e) {


    Cart.addItem({
      id: e.target.dataset.id,
      quantity: -1,
    });

    Cart.addItem({
      id: e.target.dataset.id,
      quantity: e.target.value,
      price: e.target.dataset.price,
      label: e.target.dataset.label,
    });
  });

  //event pour les boutons moins
  var buttonLess = $(document).on('click', '.buttonLess', e => {
    if (e.shiftKey == true) {
      updateQuantity('moins', e.target.dataset.name, 2);
    } else {
      updateQuantity('moins', e.target.dataset.name, 1);
      /* updatePrice("moins", e.target.dataset.price); */
    }
  });

  //event pour les boutons plus
  var buttonMore = $(document).on('click', '.buttonMore', e => {
    if (e.shiftKey == true) {
      updateQuantity('plus', e.target.dataset.name, 2);
    } else {
      updateQuantity('plus', e.target.dataset.name, 1);
      /* updatePrice("plus", e.target.dataset.price); */
    }
  });

  //event bouton supprimer
  clearCart.addEventListener('click', e => clearCartFun(e));

  //event sur tout les bouton ajouter
  buttons.forEach(button => {
    //add event sur le bonton ajouter
    button.addEventListener('click', e => {
      e.preventDefault();
      addArticle(
        button.dataset.id,
        button.dataset.article,
        button.dataset.size,
        button.dataset.price
      ); // fonction ajouter article param: nom de l'article
    });
  });

  //recup data dans le localstorage
  articleTab = getLocal();

  //Affichage du panier
  displayCart();
});