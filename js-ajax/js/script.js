var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var btnAdd = document.getElementById('add-btn');
var btnUpdate = document.getElementById('update-btn');

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

function createTodoDynamically(id,title){
    var newListItem = document.createElement('li');
    var textNode = document.createTextNode(title);
    newListItem.appendChild(textNode);
    newListItem.id = id;

    return newListItem;
}


function getTodoListFromBackend(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                console.log('Response Done');
                // console.log(this.responseText);
                // console.log(JSON.parse(this.responseText));
                var response = JSON.parse(this.responseText);
                for (var i=0; i<response.length; i++){
                    // console.log(createTodoDynamically(response[i].id ,response[i].title))
                    list.appendChild(createTodoDynamically(response[i].id ,response[i].title))
                }
            }
            else{
                console.log('Call Failed')
            }
        }
        else if(this.readyState === 3){
            console.log('Loading');
        }
        else if(this.readyState === 2){
            console.log('Header Received');
        }
        else if(this.readyState === 1){
            console.log('Opened');
        }
        else if(this.readyState === 0){
            console.log('Unsend');
        }
    }

    xhr.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    xhr.send();
}

btnAdd.addEventListener('click', createTodoItemAtBackEnd);

btnUpdate.addEventListener('click', updateFirstItem);

getTodoListFromBackend();

function createTodoItemAtBackEnd() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST','https://jsonplaceholder.typicode.com/todos', true);
    xhr.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 201){
                var response = JSON.parse(this.responseText)
                createTodoDynamically(response.id,currentInput);
                list.appendChild(createTodoDynamically(response.id,currentInput));
                console.log('Add Item to list')
            }
            else{
                console.log('Call Failed')
            }
        }
    }
    var obj =  JSON.stringify({
        "userId": 1,
        "title": currentInput,
        "completed": false
      });
    xhr.send(obj);
}