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
const textareaOne = document.querySelector("#textareaOne");

createButton.addEventListener("click",createIssueButton);

function createIssueButton(){
    createButton.classList.toggle("hide");
    textareaOne.classList.toggle("hide");
}