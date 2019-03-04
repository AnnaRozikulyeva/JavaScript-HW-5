/*3)1)** Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. 
Доска должна быть разлинована соответствующим образом, т.е.
чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы
– латинскими буквами A,*/
/*2) *Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К-
король, Ф – ферзь и тп., причем все фигуры должны стоять на своих местах и быть
соответственно черными и белыми.*/
var doc = document;
    table = doc.createElement('table'),
    nameString = ['', 'A', 'B', 'C','D', 'E', 'F', 'G', 'H', '',],
    Figures1Black = [ '8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8' ],
    Figures1White = [ '1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9821;','&#9815;','&#9814;','1' ],
    Figures2Black = [ '7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7' ],
    Figures2White = [ '2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2' ];

for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
    var tr = table.insertRow(i);
    for (var j = 0; j < 10; j++) {
        var td = tr.insertCell(j);
        if ( j == 0 || j == 9 ) {
            td.className = 'col0';
            td.innerHTML = a;
        }
        switch (i) {
            case 0: td.innerText = nameString[j];
                break;
            case 1: td.innerHTML = Figures1Black[j];
                break;
            case 2: td.innerHTML = Figures2Black[j];
                break;
            case 7: td.innerHTML = Figures2White[j];
                break;
            case 8: td.innerHTML = Figures1White[j];
                break;
            case 9: td.innerText = nameString[j];
                break;
            default: break;
        }
    }
    doc.body.appendChild(table);
}
    
    
    

