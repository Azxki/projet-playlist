const button = document.getElementById("add-playlist");
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalRename = document.querySelectorAll(".modal-rename");
const modalTitle = document.getElementById("modalTitle");
const type_musique = document.getElementById("type");
modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
    modalContainer.classList.toggle("active")
}

button.addEventListener('click', function (element) {
    element = document.body.appendChild(document.createElement('span'));
    element.innerHTML = modalTitle.value + "  (" + type_musique.value + ")";
    element.style.marginLeft = "10%"
    element.style.fontWeight = "bold"
})


