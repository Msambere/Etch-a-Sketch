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
    gridBoxes.forEach(box => box.addEventListener('mouseover', addOpacity));
    gridBoxes.forEach(box => box.addEventListener('click',removeBackground));
    
};

function addShading(e){
    let gridBox =e.target;
    gridBox.style.backgroundColor ='black';
};

function addOpacity(e){
    let gridBox = e.target;
    if (gridBox.style.opacity ==='0.9'){
        gridBox.style.opacity ='1';
    }else if (gridBox.style.opacity ==='0.8'){
        gridBox.style.opacity ='0.9';
    }else if (gridBox.style.opacity ==='0.7'){
        gridBox.style.opacity ='0.8';
    }else if (gridBox.style.opacity ==='0.6'){
        gridBox.style.opacity ='0.7';
    }else if (gridBox.style.opacity ==='0.5'){
        gridBox.style.opacity ='0.6';
    }else if (gridBox.style.opacity === '0.4'){
        gridBox.style.opacity = '0.5';
    }else if (gridBox.style.opacity ==='0.3'){
        gridBox.style.opacity ='0.4';
    }else if (gridBox.style.opacity ==='0.2'){
        gridBox.style.opacity ='0.3';
    }else if (gridBox.style.opacity ==='0.1'){
        gridBox.style.opacity ='0.2';
    }else if (gridBox.style.opacity ===''){
    gridBox.style.opacity='0.1';
    };
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

//Eraser function
//const eraser = document.querySelector('#eraser');
//eraser.addEventListener('click', eraseBox);

function removeBackground(e){
    let gridBox =e.target;
    gridBox.style.backgroundColor ='';
    gridBox.style.opacity='';
};


/*
TDL:

-- create an eraser that uses clicking
-- add a reset button that clears shading, but doesn't ask for new sizing
--create a pen color selector that changes the shading class
--Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value 
entirely.

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', console.log('they wanna erase'));

const pen = document.querySelector('#pen');
pen.addEventListener('click', console.log('they wanna draw'));

msambere/JS-Fundamentals-3/number-game-errors.html check to see how to put an in-window user input box

*/