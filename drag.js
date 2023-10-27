
const toDoContainer = document.querySelector("#toDoContainer");



let dragState = {
    dragElement : null,
    parentContainer : null
}



function draggingStart(event){
   
    dragState.dragElement = event.target;
    dragState.parentContainer = dragState.dragElement.parentNode;
    
}



let containers =document.getElementsByClassName("container");

// containers.addEventListener("dragover",takingDragElement);
// containers.addEventListener("drop",dropDragElement);
function takingDragElement(event){
   event.preventDefault();
}
function dropDragElement(){
    console.log("hji");
}

for(let i =0;i < containers.length ; i++){
    containers[i].addEventListener("dragover",takingDragElement);
    containers[i].addEventListener("drop",dropDragElement);
}