'use strict';

const newArray = new Array(4);

function start() {

    console.log('array[1]: \'' + newArray[1] + '\'');

    newArray[3] = '5';

    console.log('array: ' + newArray);
    newArray.push('1');
    console.log('array: ' + newArray);
    newArray.push('2');
    console.log('array: ' + newArray);
    newArray.push('3');
    console.log('array: ' + newArray);
    newArray.push('4');
    console.log('array: ' + newArray);
    newArray.push('6');
    console.log('array: ' + newArray);

    console.log('array.length: ' + newArray.length);


}