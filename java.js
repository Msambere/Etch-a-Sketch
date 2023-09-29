const container = document.querySelector('#screen');

//Set initial screen
let boxCount = 16;
makeGrid(boxCount);

function makeGrid(boxCount){
    for (i=0; i<boxCount; i++){
    let gridCol = document.createElement('div');
    gridCol.classList.add('gridColumn');
    container.appendChild(gridCol);
    };
    const gridColumns = Array.from(document.querySelectorAll('.gridColumn'));
    gridColumns.forEach(column => {
        for (i=0; i<boxCount; i++){
        let gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        column.appendChild(gridBox);
        };
    });
    
    const gridBoxes = Array.from(document.querySelectorAll('.gridBox'));
    gridBoxes.forEach(box => box.addEventListener('mouseover', addShading));
};

function addShading(e){
    let gridBox = e.target;
    gridBox.classList.add('shaded');
};



//Change grid size
const resizer = document.querySelector('#resizer');
resizer.addEventListener('click', changeGridSize);


function changeGridSize(){
    const gridColumns = Array.from(document.querySelectorAll('.gridColumn'));
    gridColumns.forEach(box => container.removeChild(box));
    let boxCount = parseInt(prompt("How many rows/columns?"));
    makeGrid(boxCount);
};



/*
TDL:

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', console.log('they wanna erase'));

const pen = document.querySelector('#pen');
pen.addEventListener('click', console.log('they wanna draw'));



*/