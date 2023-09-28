const container = document.querySelector('#screen');

const gridBox = document.createElement('div');
gridBox.classList.add('gridBox');
container.appendChild(gridBox);

const gridBox2 = document.createElement('div');
gridBox2.classList.add('gridBox');
container.appendChild(gridBox2);

document.getElementById("screen").appendChild(document.createElement('div'));

let x=2;
let y=2;
let boxCount= x*y;

function gridMaker(boxCount){
    for (i=0; i<boxCount; i++){
    let gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    container.appendChild(gridBox);
    };
};
