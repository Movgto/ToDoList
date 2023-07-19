const list = document.getElementById('list');
const addInput = document.querySelector('#add input');
const addBtn = document.querySelector('#add button');
const clear = document.querySelector('#clear');

class List {
    static tasks = [
        {
            index: 0,
            description: 'Cook something',
            completed: true
        },
        {
            index: 1,
            description: 'Clean the kitchen',
            completed: false
        },
        {
            index: 2,
            description: 'Grocery shopping',
            completed: false
        }
    ];
}

const createTask = (desc, completed) => {
    const taskEl = document.createElement('div');
    taskEl.className = 'task';
    taskEl.innerHTML = `<input class="check" type="checkbox" />
                        <input class="desc" type="text"/>
                        <button class="move-btn" type="button">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>`;

    const checkbox = taskEl.querySelector('.check');
    const descField = taskEl.querySelector('.desc');
    const btn = taskEl.querySelector('button');
    let mouseHovering = false;
    descField.value = desc;

    const taskIcon = taskEl.querySelector('i');
    if(completed) {
        checkbox.setAttribute('checked', 'true');
        taskEl.classList.add('completed');
    }

    checkbox.addEventListener('click', () => {
        if(checkbox.checked == true) {
            taskEl.classList.add('completed');
        } else {
            taskEl.classList.remove('completed');
        }
    });

    descField.addEventListener('focus', () => {
        taskEl.classList.add('selected');
        taskIcon.classList.remove('fa-ellipsis-vertical');
        taskIcon.classList.add('fa-trash');
    });

    descField.addEventListener('focusout', () => {
        if (!mouseHovering) {
            taskIcon.classList.remove('fa-trash');
            taskEl.classList.remove('selected');
            taskIcon.classList.add('fa-ellipsis-vertical');
        }
    });

    descField.addEventListener('change', () => {
        let index = taskEl.getAttribute('key');
        List.tasks[index].description = descField.value;
        updateStorage();
        console.log(List.tasks);
    });

    btn.addEventListener('click', () => {
        console.log('button clicked');
        if (taskEl.classList.contains('selected')) {
            const index = parseInt(taskEl.getAttribute('key'));
            List.tasks = List.tasks.filter((item) => {
                return (item.index !== index);
            });
            taskEl.remove();
            updateIndex();
        }
    })

    btn.addEventListener('mouseenter', () => {
        console.log('Mouse hovering');
        mouseHovering = true;
    })

    btn.addEventListener('mouseout', () => {
        console.log('Mouse out');
        mouseHovering = false;
    })

    return taskEl;
}

const clearCompleted = () => {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach((task) => {
        List.tasks = List.tasks.filter((item) => {
            return (item.index !== parseInt(task.getAttribute('key')));
        })
        task.remove();
    })

    updateIndex();
};

const addToList = (index, description, completed, push = false) => {
    const newTask = createTask(description, completed);
    if (push && (description !== null || description !== '' )) {
        list.appendChild(newTask);
        List.tasks.push({
            description: description,
            completed: completed
        });
    } else {
        const listElements = document.querySelectorAll('.task');
        listElements[index].insertBefore(newTask);
        List.tasks.splice(index, 0, {
            description: description,
            completed: completed
        })
    }

    updateIndex();
};

const updateIndex = () => {
    const taskElements = document.querySelectorAll('.task');

    taskElements.forEach((taskEl, i) => {
        taskEl.setAttribute('key', i);
    });

    List.tasks.forEach((task, i) => {
        task.index = i;
    });
    console.log(List.tasks);

    updateStorage();
}

const updateStorage = () => {
    localStorage.setItem('taskList', JSON.stringify(List.tasks));
};

const initiateList = () => {
    const listData = JSON.parse(localStorage.getItem('taskList'));
    if (!listData || listData.length > 0) {
        List.tasks = listData;
    }

    List.tasks.forEach((task) => {
        const newTask = createTask(task.description, task.completed);
        list.appendChild(newTask);
    });

    updateIndex();

    addBtn.addEventListener('click', () => {
        addToList(0, addInput.value, false, true);
    })

    clear.addEventListener('click', clearCompleted);
}

export default initiateList;