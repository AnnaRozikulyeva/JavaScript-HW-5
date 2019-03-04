/* Задание из 4 методички №2
Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

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
console.log(basket);
console.log('Общая сумма покупки ' + sum + '$');