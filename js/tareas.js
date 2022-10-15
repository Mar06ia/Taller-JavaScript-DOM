const tasksContainer =document.getElementById('tasksContainer');

const addNewTask = event =>{
    event.preventDefault();
    //obtener valor campo name
    const {value} =event.target.taskText;
    //evitar tarea vacia
    if(!value) return;


    const task = document.createElement('div');
    task.classList.add('task');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;

    //prepend: inicio de lista
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event =>{
    //toggle: añade o remueve clase done
    event.target.classList.toggle('done');
};

const order = () => {
    const done =[]; //Hechas
    const toDo =[]; //Por Hacer

    //childNodes:acceder a cada tarea
    tasksContainer.childNodes.forEach(tarea =>{
        //si el elemento es done 
        tarea.classList.contains('done')
        //entonces ,agregar elemento con push 
        ? done.push(tarea)
        //si no, agregar elemento con push
        : toDo.push(tarea) 
    })
    return [...toDo, ...done]; 
}

const renderOrderedTask =()=>{
    //llamar a order 
    //iterar el array
    //agregar el evento al task container
    order().forEach(tarea =>tasksContainer.appendChild(tarea))
}