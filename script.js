let size = 16;
let conStyle;
let mDown = false;

document.addEventListener("DOMContentLoaded", function(){
    gridLoad();
});

document.addEventListener("mousedown", function(){
    mDown = true;
});

document.addEventListener("mouseup", function(){
    mDown = false;
});

function randomRGBA(){
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function mouseOver(event){
    if(mDown === true){ 
        let color = randomRGBA();
        event.target.style.backgroundColor = color;
    }
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
