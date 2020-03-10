'use strict';

let inputBox = document.getElementById('palindrome-input');
let bgColor =  document.getElementById('bg-color');
let resultBox = document.getElementById('result');

function checkPalindrome(str) {
    str = str.replace(/\s/g, '');
    let size = str.length;
    let mid = size >> 1;

    for (let i=0; i<mid; ++i) {
        if (str[i].toLowerCase() != str[size - i - 1].toLowerCase())
            return false;
    }

    return true;
}

inputBox.onkeyup = function() {
    if (inputBox.value.length == 0) {
        bgColor.style.backgroundColor = '#fff';
        resultBox.textContent = "";
    } else if (checkPalindrome(inputBox.value) === true) {
        bgColor.style.backgroundColor = '#0f0';
        resultBox.textContent = "입니다";
   } else {
        bgColor.style.backgroundColor = '#f00';
        resultBox.textContent = "이 아닙니다";
    }
}