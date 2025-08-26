document.addEventListener('DOMContentLoaded', () => {
    const TodoInput = document.getElementById('todo-input');
const BtnAddTask = document.getElementById('btn-addTask');
const TodoList = document.getElementById('todo-list');

let TaskStore = JSON.parse(localStorage.getItem("tasks")) || [];

TaskStore.forEach(Taskelemnt => RenderTasks(Taskelemnt));

BtnAddTask.addEventListener('click', () => {
    const Tasks  = TodoInput.value.trim()
    if (Tasks === "") return;

    const Taskobj = {
        id: Date.now(),
        text: Tasks,
        completed: false
    }

    TaskStore.push(Taskobj)
    saveTasks();   
    RenderTasks(Taskobj) 
    TodoInput.value = "";
    console.log(Taskobj);
});

function RenderTasks(Taskelemnt) {
    localStorage.getItem("tasks");
    console.log(Taskelemnt.text);
    console.log(JSON.parse(localStorage.getItem("tasks")));

    const li =  document.createElement('li');
    li.setAttribute("data-id", Taskelemnt.id);

    if(Taskelemnt.completed){
        li.classList.add
        ('completed')
    }

    li.innerHTML = `
    <span> ${Taskelemnt.text} </span>
    <button>  Delete  </button> `

    li.addEventListener('click', (e) => {
        if(e.target.tagName ===  'BUTTON') return;
        Taskelemnt.completed = !Taskelemnt.completed;
        li.classList.toggle('completed')
        saveTasks();
    })

    li.querySelector('button').addEventListener('click', (e) => {
        e.stopPropagation();
        TaskStore = TaskStore.filter((t) => t.id != Taskelemnt.id) //If the ids don’t match, return true.
        li.remove();
        saveTasks();
    })

    TodoList.appendChild(li);
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(TaskStore))
}


})