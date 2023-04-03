'use strict';

const titlecard = document.querySelector('#title');
const colorText = document.getElementsByClassName('color-test');
const bubbleTeaDesc = ['the delicious ', 'the colorful ', 'your favourite ', 'our homemade ', 'Generic ']
let i = 0;
console.log(colorText);

setInterval(function(){
    let prevColorText = colorText[i];
    prevColorText.classList.toggle('active');
    i==4 ? i = 4 : i++;
    colorText[i].classList.toggle('active');
}, 2000);