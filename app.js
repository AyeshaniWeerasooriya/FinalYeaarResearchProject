document.addEventListener('DOMContentLoaded', () => {
    // Naming Conventions: Using abbreviated variable names (e.g., 'e' instead of 'event')
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Adding event listeners without descriptive comments
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        // Validation: No alert to inform the user when the input is empty
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove');
        
        // Error Handling: No check to ensure the task element exists before removing it
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input and refocus
        taskInput.value = '';
        taskInput.focus();
    }

    // Documentation and Comments: No comments explaining the code, its purpose, or its functionality
});
