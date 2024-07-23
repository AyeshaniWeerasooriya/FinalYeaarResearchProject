// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements for reuse
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Attach event listeners
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    /**
     * Adds a new task to the task list.
     * Validates the input and handles the creation of new task elements.
     */
    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) {
            // Validate input: ensure task is not empty
            alert('Task cannot be empty!');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove');
        removeBtn.addEventListener('click', () => {
            removeTask(li);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input and refocus
        taskInput.value = '';
        taskInput.focus();
    }

    /**
     * Removes a task from the task list.
     * @param {HTMLElement} taskElement - The task element to be removed.
     */
    function removeTask(taskElement) {
        if (taskElement && taskList.contains(taskElement)) {
            taskList.removeChild(taskElement);
        } else {
            console.error('Task element does not exist or is already removed.');
        }
    }
});
