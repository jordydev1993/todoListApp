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
const renderTaskList = () => {
  tasksContainer.innerHTML = taskList.map(createTask).join("");
};

//Definimos el evento del formulario
addform.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(taskInput.value);
});

