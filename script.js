const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTaskButton');

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerText = taskText;

    li.onclick = () => {
        li.classList.toggle('completed');
    };


    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить';
    deleteButton.onclick = (event) => {
        event.stopPropagation(); // Чтобы клик по кнопке не отмечал задачу
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = ''; 
}


addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
