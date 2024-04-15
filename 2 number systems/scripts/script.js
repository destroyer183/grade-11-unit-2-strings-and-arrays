'use strict';


const WIDTH = document.getElementById('width-input');
const HEIGHT = document.getElementById('height-input');

function calculatePerimiter() {

    let width = Number(WIDTH.value);
    let height = Number(HEIGHT.value);

    let perimiter = width*2 + height*2;


    if (!isNaN(width) && !isNaN(height)) {

        alert('perimiter: ' + perimiter);

    } else {
        alert('invalid width or height.');
    }



}