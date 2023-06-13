// var newListItem = document.createElement('li');
// console.log(newListItem);

// newListItem.appendChild(document.createTextNode('List Item 3'));

// newListItem.id = "item3";


var list = document.getElementById('todo-list');
var fisrtItem = document.getElementById('item1');
var btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    var newListItem = document.createElement('li');
    var textNode = document.createTextNode('List Item ' + (list.childElementCount + 1));
    newListItem.appendChild(textNode);
    newListItem.id = "item" + (list.childElementCount+1);
    // console.log(newListItem);

    var fisrtItem = list.firstElementChild
    console.log(fisrtItem)

    // list.appendChild(newListItem)
    list.insertBefore(newListItem, fisrtItem);
    console.log(newListItem);

});