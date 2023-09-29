const container = document.querySelector('#screen');

//let x = prompt("How many rows/columns?");
//let boxCount = x*x;
//let setFlexBasis = 100/x;

function gridMaker(boxCount){
    for (i=0; i<boxCount; i++){
    let gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    container.appendChild(gridBox);
    };
};

function addShading(e){
    let gridBox = e.target;
    gridBox.classList.add('shaded');
}


gridMaker(16*16);
const gridBoxes = Array.from(document.querySelectorAll('.gridBox'));
gridBoxes.forEach(box => box.addEventListener('mouseover', addShading));

/*
TDL:



*/