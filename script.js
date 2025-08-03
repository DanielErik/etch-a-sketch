const xAxis = 16;
const yAxis = 16;

document.addEventListener("DOMContentLoaded", function(){
    gridLoad();
});

function gridLoad(){
    const container = document.querySelector('.gridContainer');
    for(let x = 0; x < xAxis; x++){
        for(let y = 0; y < yAxis; y++){
            let div = document.createElement("div");
                div.className ="pixel";
            container.appendChild(div);
        }
    }
}
