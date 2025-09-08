let add_notes_button = document.querySelector("#add-notes-button")
let popup = document.querySelector(".add-notes-pop-up")
let closeBtn = document.querySelector(".add-notes-form .close");

add_notes_button.addEventListener('click',()=>{
     popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
   popup.classList.remove("active");
})