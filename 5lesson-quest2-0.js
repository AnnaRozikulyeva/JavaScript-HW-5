/*Вернемся к игре из четвертого урока — ей нужна история вопросов и ответов. 
Теперь, когда умеем управлять DOM, можем выводить историю на экран. 
Реализуем это улучшение.*/
var doc = document;
var temp = doc.querySelector('.tempQuest').content;
var quest = doc.querySelector('.quest');

quest.appendChild(temp);
var button1 = doc.querySelector('.button1');
var button2 = doc.querySelector('.button2');
var i1 = parseInt(button1.value);
var i2 = parseInt(button2.value);
var tempEdit = temp.cloneNode(true);
var click1 = function() {
    tempEdit.querySelector('.questText').innerText = works[i1].text;
    tempEdit.querySelector('.button1').value = works[i1].jump[1];
    tempEdit.querySelector('.button2').value = works[i1].jump[2];
    tempEdit.querySelector('.button1').innerText = works[i1].answer[1];
    tempEdit.querySelector('.button2').innerText = works[i1].answer[2];
    quest.appendChild(tempEdit);
    alert('123')
}

/*
var click1 = function() {
    tempEdit.querySelector('.questText').innerText = works[i1].text;
    tempEdit.querySelector('.button1').value = works[i1].jump[1];
    tempEdit.querySelector('.button2').value = works[i1].jump[2];
    tempEdit.querySelector('.button1').innerText = works[i1].answer[1];
    tempEdit.querySelector('.button2').innerText = works[i1].answer[2];
    quest.appendChild(tempEdit);
};
var click2 = function() {
    tempEdit.querySelector('.questText').innerText = works[i2].text;
    tempEdit.querySelector('.button1').value = works[i2].jump[1];
    tempEdit.querySelector('.button2').value = works[i2].jump[2];
    tempEdit.querySelector('.button1').innerText = works[i2].answer[1];
    tempEdit.querySelector('.button2').innerText = works[i2].answer[2];
    quest.appendChild(tempEdit);
};*/
