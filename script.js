document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const deadlineInput = document.getElementById('deadline-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = input.value.trim();
        const deadlineText = deadlineInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText, deadlineText);
            input.value = '';
            deadlineInput.value = '';
        }
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('complete');
        } else if (event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        }
    });

    function addTodoItem(text, deadline) {
        const li = document.createElement('li');
        li.textContent = text + " (Fecha límite: " + deadline + ")";
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete');
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    }
});

