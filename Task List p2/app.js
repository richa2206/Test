//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listners
loadEventListeners();



//Load all event listner
function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear task event
    clearBtn.addEventListener('click', clearTasks);
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
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);

    //clear Input
    taskInput.value = '';



    e.preventDefault();


}

//Remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item'))
    {

        if(confirm('Are you sure?'))
        {
            e.target.parentElement.parentElement.remove();

        }
    }

}

//Clear Tasks
function clearTasks() {
 taskList.innerHTML = '';

 // faster
 //while(taskList.firstChild){
 //    taskList.removeChild(taskList.firstChild);

 //}


}
