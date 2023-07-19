import List from './listStorage.js';

const list = document.getElementById('list');
const addInput = document.querySelector('#add input');
const addBtn = document.querySelector('#add button');
const clear = document.querySelector('#clear');
const resetBtn = document.querySelector('#reset-btn');

const updateStorage = () => {
  localStorage.setItem('taskList', JSON.stringify(List.tasks));
};

const updateIndex = () => {
  const taskElements = document.querySelectorAll('.task');

  taskElements.forEach((taskEl, i) => {
    taskEl.setAttribute('key', i);
  });

  List.tasks.forEach((task, i) => {
    task.index = i;
  });

  updateStorage();
};

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
  if (completed) {
    checkbox.setAttribute('checked', 'true');
    taskEl.classList.add('completed');
  }

  checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
      taskEl.classList.add('completed');
      List.tasks[Number(taskEl.getAttribute('key'))].completed = true;
      updateStorage();
    } else {
      taskEl.classList.remove('completed');
      List.tasks[Number(taskEl.getAttribute('key'))].completed = false;
      updateStorage();
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
    const index = taskEl.getAttribute('key');
    List.tasks[index].description = descField.value;
    updateStorage();
  });

  btn.addEventListener('click', () => {
    if (taskEl.classList.contains('selected')) {
      const index = Number(taskEl.getAttribute('key'));
      List.tasks = List.tasks.filter((item) => (item.index !== index));
      taskEl.remove();
      updateIndex();
    }
  });

  btn.addEventListener('mouseenter', () => {
    mouseHovering = true;
  });

  btn.addEventListener('mouseout', () => {
    mouseHovering = false;
  });

  return taskEl;
};

const clearCompleted = () => {
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((task) => {
    List.tasks = List.tasks.filter((item) => (item.index !== Number(task.getAttribute('key'))));
    task.remove();
  });

  updateIndex();
};

const addToList = (index, description, completed, push = false) => {
  const newTask = createTask(description, completed);
  if (push && (description !== null || description !== '')) {
    list.appendChild(newTask);
    List.tasks.push({
      description,
      completed,
    });
  } else {
    const listElements = document.querySelectorAll('.task');
    listElements[index].insertBefore(newTask);
    List.tasks.splice(index, 0, {
      description,
      completed,
    });
  }

  addInput.value = '';

  updateIndex();
};

const resetAnimation = () => {
  const animationOptions = {
    duration: 500,
    iterations: 1,
  };

  const keys = [
    {
      transform: 'rotate(0)',
    },
    {
      transform: 'rotate(360deg)',
    },
  ];
  resetBtn.animate(keys, animationOptions);
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
  });

  clear.addEventListener('click', clearCompleted);
  resetBtn.addEventListener('click', () => {
    resetAnimation();
    const taskElements = document.querySelectorAll('.task');
    taskElements.forEach((task) => {
      task.remove();
    });
    List.tasks = [];
    updateStorage();
  });
};

export default initiateList;