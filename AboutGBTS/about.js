'use strict';

const titlecard = document.querySelector('#title');
const colorText = document.getElementsByClassName('color-test');
//titlecard.children[0].style.visibility = 'hidden'
const bubbleTeaDesc = ['the delicious ', 'the colorful ', 'your favourite ', 'our homemade ', 'Generic ']
let i = 0;
console.log(colorText);

setInterval(function(){
    //titlecard.children[0].style.visibility == 'hidden' ? titlecard.children[0].style.visibility = 'visible' : titlecard.children[0].style.visibility = 'hidden';
    let prevColorText = colorText[i];
    prevColorText.classList.toggle('active');
    i==4 ? i = 4 : i++;
    colorText[i].classList.toggle('active');
    //console.log(prevColorText, colorText[i], i)
}, 3000);