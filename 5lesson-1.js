var doc = document;

//1.

function hello () {	 
	doc.querySelector("#hello").innerText = 'Привет' ;
} 

//2.

var changebtn = doc.querySelector(".change");
var changed = doc.querySelector(".changed");
changebtn.addEventListener("click", function () {
    if (changed.innerHTML == "<b>Hello</b>") {
        changed.innerHTML = "<h3>123</h3>";
    } else {
        changed.innerHTML = "<b>Hello</b>";
    }
})

//3. Поменяйте содержимое списка на текст list их порядковый номер в коде.

var ul_1 = doc.querySelector('.ul_1');
ul_1.innerHTML = '';
var docfrag = doc.createDocumentFragment();

for (let i = 0; i < 4; i++) {
    var newLi = doc.createElement('li');
    newLi.innerText = "List " + (i + 1);
    docfrag.appendChild(newLi);
}
ul_1.appendChild(docfrag);

//4. Создаем калькулятор 
var oper = doc.querySelector('#operation');
var result = doc.querySelector('#result');
var sum =  doc.querySelector('#sum');
var minus =  doc.querySelector('#minus');
var div =  doc.querySelector('#div');
var mult =  doc.querySelector('#mult');

var num1 = doc.getElementById('num1');
var num2 = doc.getElementById('num2');

sum.addEventListener("click", function () {
    oper.innerHTML = '+';
    result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
}); 
minus.addEventListener("click", function () {
    oper.innerHTML = '-';
    result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
}); 
div.addEventListener("click", function () {
    oper.innerHTML = '/';
    result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
}); 
mult.addEventListener("click", function () {
    oper.innerHTML = '*';
    result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
}); 

//5 Дан элемент ul, а в нем li #list. Вставьте перед элементом #list новую li с текстом 'Первый элемент списка'
var ul5 = doc.querySelector('.ul5');
var lastlist= doc.querySelector('#list');
var newLiElement = doc.createElement('li');
ul5.appendChild(newLiElement);

newLiElement.innerText = lastlist.innerText;
newLiElement.id = 'list';

lastlist.innerText = 'Первый элемент списка';
lastlist.id = 'first';

//6 Упростим задачу шахматной доски, создать просто доску 8 на 8, в которой будут черные и белые ячейки.
var table = doc.createElement("table");
var nameString = ['', 'A', 'B', 'C','D', 'E', 'F', 'G', 'H'];
for (let i = 0; i < 8; i++) {
    var tr = doc.createElement('tr');
    for (let j = 0; j < 8; j++) {
        var td = doc.createElement('td');
        td.className = 'col0';
        tr.appendChild(td);   
    } 
    table.appendChild(tr);
};
doc.body.appendChild(table);
