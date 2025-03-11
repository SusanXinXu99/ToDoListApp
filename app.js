let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentEditIndex = null;

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

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function renderTasks() {
    // Render home screen tasks
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = tasks.map((task, index) => `
        <li>
            ${task.text}
            <div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        </li>
    `).join('');

    // Render saved tasks (same as home in this example)
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


// ===== Splash Screen Logic =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splashScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splashScreen').remove();
            document.querySelector('.container').classList.remove('hidden');
        }, 500); // Matches CSS transition time
    }, 2500); // Total splash time = 2.5s (2s visible + 0.5s fade)
});

// ===== Initialization =====
renderTasks();
showScreen('homeScreen');
