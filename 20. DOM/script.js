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
    itemUpdateBtn.onclick = updateItem;
    // itemUpdateBtn.id = "item" + (taskList.childElementCount) + 1;

    let itemDeleteBtn = document.createElement('button');
    let itemDeleteText = document.createTextNode('Delete');
    itemDeleteBtn.appendChild(itemDeleteText);
    itemDeleteBtn.onclick = deleteItem;
    // itemDeleteBtn.id = "item" + (taskList.childElementCount) + 1;

    itemDiv.appendChild(itemHeading);
    itemDiv.appendChild(itemUpdateBtn);
    itemDiv.appendChild(itemDeleteBtn);

    newItem.appendChild(itemDiv);

    taskList.appendChild(newItem);
}

function updateItem(){
    let item = document.getElementById()
}

function deleteItem(){
    console.log("Delete");
}
