//Definimos las variables seleccionando los elementos del DOM
const addform = document.querySelector(".add-form");
const taskInput = document.querySelector(".input-text");
const tasksList = document.querySelector(".tasks-list");
const deleteAllBtn = document.querySelector(".deleteAll-btn");

//Almaceno en la variable el contenido del storage
//Obtenemos las tareas del localStorage, 
// si no hay, se crea un array vacio, esto es un ternario (|| []) 
// si hay, se convierte el string a un array
let taskList = JSON.parse(localStorage.getItem("tasks")) || []; 

//Creamos la funcion para guardar las tareas en el localStorage
const saveLocalStorage = (task) => {
  localStorage.setItem("tasks", JSON.stringify(taskList));
};

//Funcion que crea cada tarea
const createTask = (task) => 
  `<li>${task.name}<img src="./img/delete.svg" alt="delete" class="delete-btn"></li>`

//Funcion que renderiza las tareas
// el join es para que se renderice cada tarea en una linea sin las ","
const renderTaskList = () => { 
  tasksContainer.innerHTML = taskList.map(createTask(task)).join("");
};

//Funcion de ocultar el boton de eliminar todas las tareas
const toggleDeleteAllBtn = () => {
  if (!taskList.length) {// si no hay tareas, se oculta el boton. evalua que no exista length, es decir que el array este vacio
    deleteAllBtn.classList.add("hidden");
    return; // si no hay tareas, se sale de la funcion. Corta todo el bloque de ejecucion
  } 
    deleteAllBtn.classList.remove("hidden");
};



