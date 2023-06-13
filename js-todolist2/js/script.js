var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var btnAdd = document.getElementById('add-btn');
var btnUpdate = document.getElementById('update-btn');
var btnDelete = document.getElementById('delete-btn');

var currentInput = '';
inputBox.addEventListener('input',function(e){
    currentInput = e.target.value;
});

inputBox.addEventListener('keyup', function(e) {
    if(e.keyCode === 13){
        // alert('Key enter clikced');
        addListItem();
    }
});

function createNewNode(){
    var newListItem = document.createElement('li');
    var textNode = document.createTextNode(currentInput);
    newListItem.appendChild(textNode);
    newListItem.id = "item" + (list.childElementCount+1);

    return newListItem;
}

function addListItem(){
    if(currentInput !== undefined && currentInput !== null && currentInput !== ''){
        var newListItem =  createNewNode();

        list.appendChild(newListItem)
        console.log(newListItem.id);

        inputBox.value = '';
        currentInput = '';
    }
    else{
        alert('Please enter a value');
    }
}

function updateFirstItem(){
    var firstElement = list.firstElementChild;
    var newListItem = createNewNode();

    list.replaceChild(newListItem, firstElement);
}

function deleteFirstItem(){
    var firstElement = list.firstElementChild;

    list.removeChild(firstElement);
}

btnAdd.addEventListener('click', addListItem);

btnUpdate.addEventListener('click', updateFirstItem);

btnDelete.addEventListener('click', deleteFirstItem);