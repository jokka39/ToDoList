const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTaskButton');

// Функция для добавления задачи
function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerText = taskText;

    // Обработчик для отметки задачи как выполненной
    li.onclick = () => {
        li.classList.toggle('completed');
    };

    // Кнопка удаления задачи
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить';
    deleteButton.onclick = (event) => {
        event.stopPropagation(); // Чтобы клик по кнопке не отмечал задачу
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = ''; // Очищаем input
}

// Слушатель события для кнопки добавления
addTaskButton.addEventListener('click', addTask);

// Слушатель события для нажатия Enter в поле ввода
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});