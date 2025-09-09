// let tasks = []

// let add_notes_button = document.querySelector("#add-notes-button")

// let targetElement = document.querySelector(".add-notes-pop-up")

// let closeButton = document.querySelector('#close-pop-up')

// let taskForm = document.querySelector("#task-form")

// let addNotesFormContainer = document.querySelector(".add-notes-form")

// add_notes_button.addEventListener('click', (event) => {
//     targetElement.classList.add("active")
// })

// closeButton.addEventListener('click', () => {
//     targetElement.classList.remove("active")
// })

// // {
// //     titile: "some title",
// //         description : "some description",
// //             timeStamp : "T:12:50:00 D: 09/09/2025"
// // }

// addNotesFormContainer.addEventListener("mouseleave", () => {
//     document.getElementById("formSubmitButton").click()
// })

// let taskObject = {
//     title: "",
//     description: "",
//     timeStamp: ""
// }

// taskForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     try {

//         if (!event.target["title"].value || !event.target["description"].value) {
//             throw ("empty fields !")
//         }

//         taskObject.title = event.target["title"].value
//         taskObject.description = event.target["description"].value
//         taskObject.timeStamp = `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
//         console.log(taskObject)
//         tasks.push(taskObject)
//         event.target["title"].value = ""
//         event.target["description"].value = ""
//         closeButton.click()
//         displayTask()
//     } catch (err) {
//         console.log("please added task data before submitting ! : ", err)
//     }
// })

// function displayTask() {

//     document.querySelector('.tasks-container').innerHTML = ""

//     tasks.forEach((task) => {
//         let singleTask = document.createElement("div")
//         singleTask.classList.value = "task border p-4"
//         singleTask.innerHTML = `
//                             <h4 class="title">${task.title}</h4>
//                             <p class="description">
//                                 ${task.description}
//                             </p>
//                             <span class="timeStamp">${task.timeStamp}</span>
//     `
//         document.querySelector('.tasks-container').appendChild(singleTask)
//     })
// }



// short method

let tasks = [];

const add_notes_button = document.querySelector("#add-notes-button"),
      targetElement = document.querySelector(".add-notes-pop-up"),
      closeButton = document.querySelector('#close-pop-up'),
      taskForm = document.querySelector("#task-form"),
      addNotesFormContainer = document.querySelector(".add-notes-form"),
      tasksContainer = document.querySelector('.tasks-container');

add_notes_button.onclick = () => targetElement.classList.add("active");
closeButton.onclick = () => targetElement.classList.remove("active");

addNotesFormContainer.onmouseleave = () => document.getElementById("formSubmitButton").click();

taskForm.onsubmit = e => {
  e.preventDefault();
  const title = e.target["title"].value.trim(),
        description = e.target["description"].value.trim();
  if (!title || !description) return console.log("please added task data before submitting !");
  
  tasks.push({
    title,
    description,
    timeStamp: `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
  });

  e.target.reset();
  closeButton.click();
  displayTask();
};

function displayTask() {
  tasksContainer.innerHTML = tasks.map(t => `
    <div class="task border p-4">
      <h4 class="title">${t.title}</h4>
      <p class="description">${t.description}</p>
      <span class="timeStamp">${t.timeStamp}</span>
    </div>
  `).join("");
}
