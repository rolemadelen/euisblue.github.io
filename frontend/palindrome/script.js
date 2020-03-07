inputBox = document.getElementById('palindrome-input');
bgColor =  document.getElementById('bg-color');

console.log(bgColor);

function checkPalindrome(str) {
    str = str.replace(/\s/g, '');
    let size = str.length;
    let mid = size << 1;

    for (let i=0; i<mid; ++i) {
        if (str[i] != str[size - i - 1])
            return false;
    }

    return true;
}

inputBox.onkeyup = function() {
    if (inputBox.value.length == 0) {
        bgColor.style.backgroundColor = '#fff';
    } else if (checkPalindrome(inputBox.value) === true) {
        bgColor.style.backgroundColor = '#0f0';
   } else {
        bgColor.style.backgroundColor = '#f00';
    }
}