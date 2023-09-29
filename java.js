const container = document.querySelector('#screen');

let x = 16;
let boxCount = x*x;
gridMaker(boxCount);


const gridBoxes = Array.from(document.querySelectorAll('.gridBox'));
gridBoxes.forEach(box => box.addEventListener('mouseover', addShading));

const resizer = document.querySelector('#resizer');
resizer.addEventListener('click', changeGridSize);


function changeGridSize(){
    const gridBoxes = Array.from(document.querySelectorAll('.gridBox'));
    gridBoxes.forEach(box => container.removeChild(box));
    let x = parseInt(prompt("How many rows/columns?"));
    boxCount= x*x;
    gridMaker(boxCount);
};


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
};



/*
TDL:

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', console.log('they wanna erase'));

const pen = document.querySelector('#pen');
pen.addEventListener('click', console.log('they wanna draw'));



*/