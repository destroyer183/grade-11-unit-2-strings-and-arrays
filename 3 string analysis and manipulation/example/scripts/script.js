'use strict';

// constants to get HTML elements
const TXT_PASSWORD = document.getElementById('password-textbox');


// notifies if the user has typed an all uppercase password
function checkAllUppercase(){
    // get the original password from the textbox
    let password = TXT_PASSWORD.value;

    // compare the original password to the uppercase version of the password
    // if they are the same, that means the original is all uppercase
    if ( password === password.toUpperCase()){
        alert('Password is all uppercase.');
    }

}

// checks if there are $ signs in the password
function checkForDollars(){
    // get the original password from the textbox
    let password = TXT_PASSWORD.value;

    // remove all the dollar signs from the password
    let noDollars = password.replaceAll('$', '');

    // if the original password is the same as the no dollar sign version
    // that means there were NO dollar signs
    // if the original password is NOT the same as the no dollar sign 
    // version, that means there WERE dollar signs
    if (password !== noDollars){
        alert('There were $ signs in the password.');
    }
    else {
        alert('There were NO $ signs in the password.');
    }

}

// counts how many dollar signs are in the password
function countDollars(){
    // get the original password from the textbox
    let password = TXT_PASSWORD.value;

    // remove all the dollar signs from the password
    let noDollars = password.replaceAll('$', '');

    // calculate how many dollar signs there were
    alert('Number of $ signs: ' + (password.length - noDollars.length));
}

// prints out the last character in the password
function getLastCharacter(){

    // make sure there is something written before getting the last character
    if (TXT_PASSWORD.value !== ''){
        // the last character's index is at the string's length - 1
        // to get to the end of the string, stop at the string's length
        let lastChar = TXT_PASSWORD.value.substring( TXT_PASSWORD.value.length - 1, TXT_PASSWORD.value.length)
        alert(lastChar);
    }
}

// get the password minus the first letter
function removeHead(){
    // get the textbox input
    let password = TXT_PASSWORD.value;

    // start the substring at index 1 which is the 2nd character in the password
    // stop the substring AFTER the last character's index, which would be
    // calculated as password.length - 1
    let tail = password.substring(1, password.length);
 
    alert(tail);
}

// look for # or @ characters in the password
function checkForSpecial(){
    // get the input
    let password = TXT_PASSWORD.value;

    // find the locations of the @ and # and calculate the sum
    let indexSum = password.indexOf('@') + password.indexOf('#');

    // if indexSum is -2, that means indexOf could not find either @ or #
    if (indexSum === -2){
        alert('No @ or # found.');
    }
    else{
        alert('# or @ is in password.')
    }
}

// finds out if there is a set of matching brackets
function checkMatchingBrackets(){
    // get the input
    let password = TXT_PASSWORD.value;

    // get the location of the open bracket (
    let indexOfOpen = password.indexOf('(');

    // if there is an open bracket, check for the closing bracket
    if (indexOfOpen >= 0){
        // look for a close bracket AFTER the index of the open bracket
        let indexOfClose = password.indexOf(')', indexOfOpen + 1);

        // it found a close bracket after the open
        if (indexOfClose >= 0){
            alert('Found matching brackets');
        }
        // could not find match
        else
        {
            alert('Did not find matching bracket')
        }
    }
    // could not find open bracket, therefore no match possible
    else
    {
        alert('No matching brackets found.');
    }
    
}

function countHello() {

    let wordToCount = 'hello';

    let password = TXT_PASSWORD.value.toUpperCase();

    let passwordNoHello = password.replaceAll(wordToCount.toUpperCase(), '');

    let lengthDifference = password.length - passwordNoHello.length;

    let helloCount = Math.floor(lengthDifference / wordToCount.length);

    alert('the password contains \'' + wordToCount + '\' ' + helloCount + ' times.');
}``