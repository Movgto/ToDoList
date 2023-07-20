import List from './listStorage.js';
import { changeCheckbox } from './interactive.js';

const list = document.getElementById('list');
const addInput = document.querySelector('#add input');

export const updateStorage = () => {
  localStorage.setItem('taskList', JSON.stringify(List.tasks));
};

export const updateIndex = () => {
  const taskElements = document.querySelectorAll('.task');

  taskElements.forEach((taskEl, i) => {
    taskEl.setAttribute('key', i);
  });

  List.tasks.forEach((task, i) => {
    task.index = i;
  });

  updateStorage();
};

export const createTask = (desc, completed) => {
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

  changeCheckbox(checkbox, taskEl, updateStorage, List);

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

export const addToList = (index, description, completed, push = false) => {
  const newTask = createTask(description, completed);

  if(description === null || description === '') {
    return;
  }

  if (push) {
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