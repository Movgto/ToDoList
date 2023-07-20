import List from './listStorage.js';
import {
  updateIndex, updateStorage, createTask, addToList,
} from './listFunctions.js';
import { clearCompleted } from './interactive.js';

const list = document.getElementById('list');
const addInput = document.querySelector('#add input');
const addBtn = document.querySelector('#add button');
const clear = document.querySelector('#clear');
const resetBtn = document.querySelector('#reset-btn');

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

  addInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      addToList(0, addInput.value, false, true);
    }
  });

  clear.addEventListener('click', () => { clearCompleted(List, updateIndex); });
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