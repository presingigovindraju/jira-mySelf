
const toDoContainer = document.querySelector("#toDoContainer");



let dragState = {
    dragElement : null,
    parentContainer : null
}







let containers =document.querySelectorAll(".container");

function draggingStart(event){
   const draggedCard = event.target;
    dragState.dragElement = draggedCard;
    dragState.parentContainer = dragState.dragElement.parentNode;
    
}

function takingDragOverElement(event){
    let currentContainer = event.target.closest(".container");
    if(dragState.parentContainer.id === currentContainer.id ){
        
        return;
    }
    event.preventDefault();
}
function dropDragElement(event){
    // console.log("hji");
    const dropContainer = event.target.closest(".container");
    dropContainer.appendChild(dragState.dragElement);
}

for(let i =0;i < containers.length ; i++){
    containers[i].addEventListener("dragover",takingDragOverElement);
    containers[i].addEventListener("drop",dropDragElement);
}