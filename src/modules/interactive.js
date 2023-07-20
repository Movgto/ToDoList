export const clearCompleted = (list, updateIndexFunc) => {
  const completedTasks = document.querySelectorAll('.completed');
  if (completedTasks.length <= 0) {
    return;
  }

  completedTasks.forEach((task) => {
    list.tasks = list.tasks.filter((item) => (item.index !== Number(task.getAttribute('key'))));
    task.remove();
  });

  updateIndexFunc();
};

export const changeCheckbox = (checkbox, task, updateStorageFunc, list) => {
  checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
      task.classList.add('completed');
      list.tasks[Number(task.getAttribute('key'))].completed = true;
      updateStorageFunc();
    } else {
      task.classList.remove('completed');
      list.tasks[Number(task.getAttribute('key'))].completed = false;
      updateStorageFunc();
    }
  });
};