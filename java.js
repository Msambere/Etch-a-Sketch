const container = document.querySelector('#screen');

let x = prompt("How many columns?");
let y = prompt ("How many rows?");
let boxCount = x*y;

function gridMaker(boxCount){
    for (i=0; i<boxCount; i++){
    let gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    container.appendChild(gridBox);
    };
};


gridMaker(boxCount);

/*
TDL:



*/