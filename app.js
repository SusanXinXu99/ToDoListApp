let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks = tasks.map(task => ({ 
    text: task.text, 
    completed: task.completed || false
}));
let currentEditIndex = null;

// Dark Mode Logic
function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.getElementById('darkModeToggle');
    
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️'; // Sun icon for light mode
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggleButton.textContent = '🌙'; // Moon icon for dark mode
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeToggle').textContent = '☀️'; // Sun icon for light mode
} else {
    document.getElementById('darkModeToggle').textContent = '🌙'; // Moon icon for dark mode
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
}

function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value.trim()) {
        tasks.push({ text: input.value.trim(), completed: false });
        input.value = '';
        saveTasks();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function editTask(index) {
    currentEditIndex = index;
    document.getElementById('editInput').value = tasks[index].text;
    showScreen('editScreen');
}

function saveEdit() {
    if (currentEditIndex !== null) {
        tasks[currentEditIndex].text = document.getElementById('editInput').value;
        saveTasks();
        renderTasks();
        showScreen('homeScreen');
    }
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = tasks.map((task, index) => `
        <li class="${task.completed ? 'completed' : ''}">
            <input type="checkbox" 
                   onchange="toggleCompletion(${index})" 
                   ${task.completed ? 'checked' : ''}>
            <span class="task-text">${task.text}</span>
            <div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        </li>
    `).join('');

    const savedList = document.getElementById('savedList');
    savedList.innerHTML = tasks.map((task, index) => `
        <li>
            ${task.text}
            <div>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        </li>
    `).join('');
}

// Splash Screen Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splashScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splashScreen').remove();
            document.querySelector('.container').classList.remove('hidden');
        }, 500);
    }, 2500);
});

// Initial render and screen setup
renderTasks();
showScreen('homeScreen');
