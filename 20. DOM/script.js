let taskList = document.getElementById("taskList");

function addItem(){
    let addItem = document.getElementById("inputTask").value.trim();

    if(addItem === "") return;

    let newItem = document.createElement('li');
    
    let itemDiv = document.createElement('div');    
    // itemDiv.id = "item" + (taskList.childElementCount) + 1;

    let itemHeading = document.createElement('h3');
    let taskText = document.createTextNode(addItem);
    itemHeading.appendChild(taskText);

    let itemUpdateBtn = document.createElement('button');
    let itemUpdateText = document.createTextNode('Done');
    itemUpdateBtn.appendChild(itemUpdateText);
    itemUpdateBtn.onclick = function(){
        updateItem(this);
    };
    // itemUpdateBtn.id = "item" + (taskList.childElementCount) + 1;

    let itemDeleteBtn = document.createElement('button');
    let itemDeleteText = document.createTextNode('Delete');
    itemDeleteBtn.appendChild(itemDeleteText);
    itemDeleteBtn.onclick = function(){
        deleteItem(this);
    };
    // itemDeleteBtn.id = "item" + (taskList.childElementCount) + 1;

    itemDiv.appendChild(itemHeading);
    itemDiv.appendChild(itemUpdateBtn);
    itemDiv.appendChild(itemDeleteBtn);

    newItem.appendChild(itemDiv);

    taskList.appendChild(newItem);

    document.getElementById("inputTask").value = "";
}

function updateItem(button){
    let div = button.parentElement;
    let heading = div.querySelector("h3");
    heading.style.textDecoration = "line-through";
}

function deleteItem(button){
    let li = button.parentElement.parentElement;
    li.remove();
}
