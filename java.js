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
    gridBox.classList.add('shadedBlack');
};



//Change grid size
const resizer = document.querySelector('#resizer');
resizer.addEventListener('click', changeGridSize);


function changeGridSize(){
    const gridColumns = Array.from(document.querySelectorAll('.gridColumn'));
    gridColumns.forEach(box => container.removeChild(box));
    let boxCount = 0
    do {
         boxCount = parseInt(prompt("How many rows/columns?"));
    } while (boxCount<=0 || boxCount>100);
    makeGrid(boxCount);
};



/*
TDL:

-- create an eraser that uses clicking
-- add a reset button that clears shading, but doesn't ask for new sizing
--create a pen color selector that changes the shading class
--Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value 
entirely.
--Additionally, implement a progressive darkening effect where each interaction adds 10% more black or color 
to the square. The objective is to achieve a completely black square only after ten interactions.

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', console.log('they wanna erase'));

const pen = document.querySelector('#pen');
pen.addEventListener('click', console.log('they wanna draw'));

msambere/JS-Fundamentals-3/number-game-errors.html check to see how to put an in-window user input box

*/