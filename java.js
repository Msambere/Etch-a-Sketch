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
    gridBoxes.forEach(box => box.addEventListener('mouseover', addBlack));
    gridBoxes.forEach(box => box.addEventListener('mouseover', addOpacity));
    gridBoxes.forEach(box => box.addEventListener('click',removeBackground));


    const colorButton = document.querySelector('#color');
    colorButton.addEventListener('click', switchToColor);
    colorButton.addEventListener('click', toggleInUse )

    const greyscaleButton = document.querySelector('#greyscale');
    greyscaleButton.classList.add('inUse');
    greyscaleButton.addEventListener('click',switchToGreyscale);
    greyscaleButton.addEventListener('click',toggleInUse);

    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click',resetBackground);
    
    
};
//Color and Shading functions
function addBlack(e){
    let gridBox =e.target;
    if (gridBox.style.backgroundColor!=''){
    }else {
    gridBox.style.backgroundColor ='black';
    };
};

function addRandomColor(e) {
    let gridBox =e.target;
    if (gridBox.style.backgroundColor!=''){
    }else {
        gridBox.style.backgroundColor = makeRandColor();
    };
};

function makeRandColor(){
    let colorArray =[];
    for (i=0; i<3; i++){
        let color = Math.floor(Math.random()*255 +1);
        colorArray.push(color); 
    };
    let randColor = `rgb(${colorArray[0]},${colorArray[1]},${colorArray[2]})`;
    return randColor
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

function switchToColor(e){
    const gridBoxes = Array.from(document.querySelectorAll('.gridBox'));
    gridBoxes.forEach(box => box.addEventListener('mouseover', addRandomColor));
    gridBoxes.forEach(box => box.removeEventListener('mouseover', addBlack));
};

function switchToGreyscale(e){
    const gridBoxes = Array.from(document.querySelectorAll('.gridBox'));
    gridBoxes.forEach(box => box.removeEventListener('mouseover', addRandomColor));
    gridBoxes.forEach(box => box.addEventListener('mouseover', addBlack));
};

function toggleInUse(){
    const colorButton = document.querySelector('#color');
    colorButton.classList.toggle('inUse');
    const greyscaleButton = document.querySelector('#greyscale');
    greyscaleButton.classList.toggle('inUse')
    
}

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
function removeBackground(e){
    let gridBox =e.target;
    gridBox.style.backgroundColor ='';
    gridBox.style.opacity='';
};

// Background reset 
function resetBackground() {
    const gridBoxes = Array.from(document.querySelectorAll('.gridBox'));
    gridBoxes.forEach( box => box.style.backgroundColor = '');
    gridBoxes.forEach( box => box.style.opacity = '');

};


/*
TDL:



msambere/JS-Fundamentals-3/number-game-errors.html check to see how to put an in-window user input box

*/