// const block = document.querySelector("#block");
// const container = document.querySelector("#container");

// block.addEventListener("dragstart",dragStarted);
// block.addEventListener("dragend",dragended);

// function dragStarted(){
//     console.log("dragable element started");
// }
// function dragended(){
//     console.log("dragable element ended");
// }

// container.addEventListener("dragenter",dragEntered);
// container.addEventListener("dragover",dragovering);
// container.addEventListener("dragleave",dragleaved);
// container.addEventListener("drop",dropElement);

// function dragEntered(){
//     console.log("drag element entered");
// }
// function dragovering(event){
//     console.log("drag element overing");
//     event.preventDefault();
// }
// function dragleaved(){
//     console.log("drag element leaved");
// }
// function dropElement(){
//     let blockCopy = block.cloneNode(true);
//     container.appendChild(blockCopy);
// }

const createButton = document.querySelector(".createStyle");
const input = document.querySelector("input");

createButton.addEventListener("click",createIssueButton);
input.addEventListener("keyup",onEnter);

function createIssueButton(){
    createButton.classList.toggle("hide");
    input.classList.toggle("hide");
    if(!input.classList.contains("hide")){
        input.focus();
    }
}

function onBlurTextarea(){
    
    createIssueButton();
}

function onEnter(event){
    if(event.keyCode == 13){
        let textareaName =input.value;

        if(!textareaName){
            return;
        }
       const createCard = document.createElement("div");
       createCard.style.marginBottom="6px";
       const toDoContainer =document.querySelector("#toDoContainer");
       createCard.className = "card";
       
       createCard.innerHTML =
       `<span>${textareaName} </span>
       <i class="sizing fa-solid fa-trash" onclick="DeleteOption(this)" ></i>`;


       toDoContainer.appendChild(createCard);

       createIssueButton();
       input.value="";
    }
    
}

function DeleteOption(element){
    const parentDelete = element.parentNode;
    console.log(parentDelete);
    parentDelete.remove();
}


const container2 =document.querySelector(".container2");

container2.addEventListener("dragover",takingDragElement);

function takingDragElement(event){
    event.preventDefault();
    // let dragElementRecived = toDoContainer > createCard ;

}