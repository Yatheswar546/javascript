var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var btn = document.getElementById('btn');

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

function addListItem(){
    if(currentInput !== undefined && currentInput !== null && currentInput !== ''){
        var newListItem = document.createElement('li');
        var textNode = document.createTextNode(currentInput);
        newListItem.appendChild(textNode);
        newListItem.id = "item" + (list.childElementCount+1);

        list.appendChild(newListItem)
        console.log(newListItem.id);

        inputBox.value = '';
        currentInput = '';
    }
    else{
        alert('Please enter a value');
    }
}

btn.addEventListener('click', addListItem);