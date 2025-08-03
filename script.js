let size = 16;
let conStyle;

document.addEventListener("DOMContentLoaded", function(){
    gridLoad();
});

function mouseOver(event){
    event.target.style.backgroundColor = "grey";
}

function sizeChange(){
    let sizeChange = prompt("What Size?");
    size = sizeChange;    
    let conSize = (10 * size) + "px";

    let container = document.querySelector('.gridContainer');
    container.style.height = conSize;
    container.style.width = conSize;
    gridLoad();
}

function gridLoad(){
    const container = document.querySelector('.gridContainer');

    while(container.lastChild){
        container.removeChild(container.lastChild);
    }
    conStyle = getComputedStyle(container);

    for(let x = 0; x < size; x++){
        for(let y = 0; y < size; y++){
            let div = document.createElement("div");
            div.id ="pixel";
            div.addEventListener("mouseover", mouseOver);
            
            container.appendChild(div);
        }
    }
}
