var Cart = {};

Cart.on = function (eventName, callback) {
	if (!Cart.callbacks[eventName]) Cart.callbacks[eventName] = [];
	Cart.callbacks[eventName].push(callback);
	return Cart;
};

Cart.trigger = function (eventName, args) {
	if (Cart.callbacks[eventName]) {
	for (var i = 0; i < Cart.callbacks[eventName].length; i++) {
		Cart.callbacks[eventName][i](args || {});
	}
	}
	return Cart;
};

Cart.save = function () {
	localStorage.setItem('cart-items', JSON.stringify(Cart.items));
	Cart.trigger('saved');
	return Cart;
};

Cart.empty = function () {
	Cart.items = [];
	Cart.trigger('emptied');
	Cart.save();
	return Cart;
};

Cart.indexOfItem = function (id) {
	for (var i = 0; i < Cart.items.length; i++) {
	if (Cart.items[i].id === id) return i;
	}
	return null;
};

Cart.getItem = function (id) {
	for (var i = 0; i < Cart.items.length; i++) {
	if (Cart.items[i].id === id) {
		return Cart.items[i].price, Cart.items[i].label;
	}
	}
	return null;
};

Cart.removeEmptyLines = function () {
	newItems = [];
	for (var i = 0; i < Cart.items.length; i++) {
	if (Cart.items[i].quantity > 0) newItems.push(Cart.items[i]);
	}
	Cart.items = newItems;
	return Cart;
};

Cart.addItem = function (item) {
	if (!item.quantity) item.quantity = 1;
	var index = Cart.indexOfItem(item.id);
	if (index === null) {
	Cart.items.push(item);
	} else {
	Cart.items[index].quantity += item.quantity;
	}
	Cart.removeEmptyLines();
	if (item.quantity > 0) {
	Cart.trigger('added', {
		item: item
	});
	} else {
	Cart.trigger('removed', {
		item: item
	});
	}
	Cart.save();
	return Cart;
};

Cart.itemsCount = function () {
	var accumulator = 0;
	for (var i = 0; i < Cart.items.length; i++) {
	accumulator += Cart.items[i].quantity;
	}
	return accumulator;
};

Cart.currency = '&pound;';

Cart.displayPrice = function (price) {
	if (price === 0) return '0';
	var floatPrice = price / 100;
	var decimals = floatPrice == parseInt(floatPrice, 10) ? 0 : 2;
	return Cart.currency + floatPrice.toFixed(decimals);
};

Cart.displaySize = function (size) {
	if (size === 0) return '0';
	var floatPrice = size;
	var decimals = floatPrice == parseInt(floatPrice, 10) ? 0 : 2;
	return Cart.currency + floatPrice.toFixed(decimals);
};

Cart.linePrice = function (index) {
	return Cart.items[index].price * Cart.items[index].quantity;
};

Cart.lineSize = function (index) {
	if ((typeof Cart.items[index].size !== 'undefined')) {
	return Cart.items[index].size * Cart.items[index].quantity;
	}
};

Cart.subTotal = function () {
	var accumulator = 0;
	for (var i = 0; i < Cart.items.length; i++) {
		accumulator += Cart.linePrice(i);
	}

	if (Cart.items.length == 1) {
		accumulator += 90;
	}
	return accumulator * 100;
};

Cart.subSizing = function () {
	var sizing = 0;

	for (var i = 0; i < Cart.items.length; i++) {
	sizing += Cart.lineSize(i);
	}

	return sizing;
};

Cart.init = function () {
	var items = localStorage.getItem('cart-items');
	if (items) {
	Cart.items = JSON.parse(items);
	} else {
	Cart.items = [];
	}
	Cart.callbacks = {};
	return Cart;
}

Cart.initJQuery = function () {

	Cart.init();

	Cart.templateCompiler = function (a, b) {
	return function (c, d) {
		return a.replace(/#{([^}]*)}/g, function (a, e) {
		return Function("x", "with(x)return " + e).call(c, d || b || {})
		})
	}
	};

	Cart.lineItemTemplate = "<tr>" +
	// "<td><img src='#{this.image}' alt='#{this.label}' /></td>" + 
	"<td class='text-center'>#{this.quantity}</td>" +
	"<td colspan=6>#{this.label}</td>" +
	"</tr>";

	$(document).on('click', '.cart-add', function (e) {
	e.preventDefault();
	var button = $(this);
	var item = {
		id: button.data('id'),
		price: button.data('price'),
		quantity: button.data('quantity'),
		label: button.data('label'),
		image: button.data('image')
	}
	Cart.addItem(item);
	});

var updateReport = function () {
	var count = Cart.itemsCount();
	$('.cart-items-count').text(count);
	$('.cart-subtotal').html(Cart.displayPrice(Cart.subTotal()));
	if (Cart.subSizing()) {
		$('.cart-sizetotal').html(Cart.displaySize(Cart.subSizing()));
	} else {
		$('.cart-sizetotal').html("0");
	}
	if (count === 1) {
		$('.cart-items-count-singular').show();
		$('.cart-items-count-plural').hide();
	} else {
		$('.cart-items-count-singular').hide();
		$('.cart-items-count-plural').show();
	}
};

	var updateCart = function () {
		if (Cart.items.length > 0) {
			var template = Cart.templateCompiler(Cart.lineItemTemplate);
			var lineItems = "";
			for (var i = 0; i < Cart.items.length; i++) {
				lineItems += template(Cart.items[i]);
			}
			$('.cart-line-items').html(lineItems);
			$('.cart-table').show();
			$('.cart-is-empty').hide();
		} else {
			$('.cart-table').hide();
			$('.cart-is-empty').show();
		}
	};

	var update = function () {
	updateReport();
	updateCart();
	};
	update();

	Cart.on('saved', update);

	return Cart;
};