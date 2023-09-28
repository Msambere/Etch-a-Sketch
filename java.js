const container = document.querySelector('#screen');

function gridMaker(boxCount){
    for (i=0; i<boxCount; i++){
    let gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    container.appendChild(gridBox);
    };
};
