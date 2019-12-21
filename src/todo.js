class Todo {
  constructor(container) {
    this.container = container;
    this.addForm = container.querySelector('form.add-todo');
    this.todoList = container.querySelector('.todo-list');
  }
  init() {
    this.addForm.addEventListener('submit', e => {
      e.preventDefault();
      const todo = this.addForm.add.value.trim();
      if (todo.length) {
        this.addTodo(todo);
        this.addForm.reset();
      }
    });
    this.todoList.addEventListener('click', e => {
      if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
      }
    });
  }
  addTodo(todo) {
    const options = {
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    const time = new Date().toLocaleTimeString('en-us', options);
    const html = `<li class="todo"> 
                  <div>
                    <span class="todo"> ${todo} </span>
                    <span class ="time">${time}
                  </div>
                  <i class="far fa-trash-alt delete"></i>
                  </li>`;
    this.todoList.innerHTML += html;
  }
}

export { Todo as default };
