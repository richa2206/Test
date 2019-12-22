//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskinput = document.querySelector('#task');

//Load all event listners
loadEventListners();

//Load all event listner
function loadEventListners() {
    //Add task event
    form.addEventListener('submit', addTask);

}

//Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task please');

    }

    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHtml = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);

    //clear Input
    taskInput.value = '';



    e.preventDefault();


}

