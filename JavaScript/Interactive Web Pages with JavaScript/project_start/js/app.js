//problem user interaction doesn't provide desired results
//solution: add interactivity so the user can manage daily task
var taskInput = document.getElementById("new-task");
var addButton = document.getElementByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-task");
var completedTasksHolder = document.getElementById("completed-task");
//add a new task
var createdNewTaskElement = function(taskString){
  //input checkbox
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input");
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");
  //each elements, needs modified and append
  checkBox.type = "checkBox";
  editInput.type = "text";
  editButton.innertext = "Edit";
  editButton.className = "edit";
  deleteButton.innertext = "Delete";
  deleteButton.className = "delete";
  label.innerText = taskString;
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}
var addTask = function(){
  //when the button is pressed
  //create a new list task witht he text from #new-task
  var listItem = createdNewTaskElement(taskInput.value);
  //Append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = "";
};
//edit an exisitng task
var editTask = function(){
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
    if(containsClass){
      //switch to .editmode
      //label text become the input's value
      label.innerText = editInput.value;
    } else{
      //switch to .editmode
      //input value becomes the label's text
      editInput.value = label.innerText;
    }
    //toggle .editmode on the parent
    listItem.classList.toggle("editMode");
};
//delete an existing task
var deleteTask = function(){
  //remove the parent list item from the ul
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
};
//mark a task as complete
var taskComplete = function(){
  //append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  completeTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};
//mark a task as incomplete
var taskIncomplete = function(){
  //append the task list item to the #incompleted-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
};
 var bindTaskEvents = function(taskListItem, checkboxEventHandler){
   var checkBox = taskListItem.querySelector("input[type=checkbox]");
   var editButton = taskListItem.querySelector("button.edit");
   var deleteButton = taskListItem.querySelector("button.delete");
   //bind editTask to edit button
   editButton.onclick = editTask;
   //bind deleteTask to delete button
   deleteButton.onclick = deleteTask;
   //bind taskComplete to checkbox
   checkBox.onchange = checkboxEventHandler;
 }
addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);
var ajaxRequest = function(){
  console.log("ajaxRequest");
}
//cycle over incompleteTasksHolder
for(var i = 0); i < incompleteTasksHolder.children.length; i++)
  //bind events to list item's children (taskComplete)
  bindTaskEvents(incompleteTasksHolder.children[i],taskComplete)

//cycle over completeTasksHolder
for(var i = 0); i < incompleteTasksHolder.children.length; i++)
  //for each list item
bindTaskEvents(completeTasksHolder.children[i],taskIncomplete)
    //bind events to list item's children (taskIncomplete)
