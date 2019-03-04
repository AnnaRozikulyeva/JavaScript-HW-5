var basket = [];
var sum = 0
var goods = ['Samsung GALAXY', 'Samsung A5', 'Xiaomi Mi8', 'Xiaomi Mi9', 'Xiaomi Redmi Note 5', 'HONOR V8', 'Iphone7', 'Iphone8', 'Iphone9', 'IphoneX'];
var color = ['White', 'Gold', 'Black', 'Dark Grey', 'Lite Grey', 'Blue', 'Purple', 'Red', 'Pink', 'Green'];
var addInBasket = function () {
    for (let i = 0; i < 10; i++) {
        var good = {};
        good.model = getRandomIn(goods);
        good.color = getRandomIn(color);
        good.price = 100 + Math.floor(Math.random() * 999);
        basket.push(good);
        sum = sum + good.price;
    }
}
var getRandomIn = function (mas) {
    let rand = Math.floor(Math.random() * (mas.length - 1));
    let randElem;
    return randElem = mas[rand];
}
addInBasket();
/*Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/
var shopBasket = document.querySelector('.shopBasket');
var p = document.createElement('h4');
p.innerText = 'В вашей корзине:';
shopBasket.appendChild(p);
    
for (let i = 0; i < 10; i++) {
    var item = document.createElement('p');
    item.innerText = 'Модель: ' + basket[i].model + ' цвет: ' + basket[i].color + ' цена: '+ basket[i].price;
    shopBasket.appendChild(item);
}
if (shopBasket.innerHTML == '') {
    shopBasket.innerHTML = 'Ваша корзина пуста';
} else {
    var sumBasket =  document.createElement('h4');
    sumBasket.innerText = 'В вашей корзине: ' + basket.length + ' товаров на сумму ' + sum + ' руб.'
    shopBasket.appendChild(sumBasket);
}

/* Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
*/
var goodCard = document.querySelector('.goodCard').content;
var catalog = document.querySelector('#catalog');
for (let i = 0; i < 10; i++) {
    var goodEdit = goodCard.cloneNode(true);
        goodEdit.querySelector('.itemName').innerText = basket[i].model;
        goodEdit.querySelector('.itemColor').innerText = basket[i].color;
        goodEdit.querySelector('.itemPrice').innerText = basket[i].price;
    catalog.appendChild(goodEdit);
}

