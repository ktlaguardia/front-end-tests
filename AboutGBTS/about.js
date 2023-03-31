
const titlecard = document.querySelector('#title');
const colorText = document.querySelector('.color-text');
//titlecard.children[0].style.visibility = 'hidden'
const bubbleTeaDesc = ['the delicious ', 'the colorful ', 'your favourite ', 'our homemade ', 'Generic ']
let i = 0;
colorText.innerHTML = bubbleTeaDesc[i];

/*setInterval(function(){
    //titlecard.children[0].style.visibility == 'hidden' ? titlecard.children[0].style.visibility = 'visible' : titlecard.children[0].style.visibility = 'hidden';
    i==4 ? i= 0 : i++;
    colorText.innerHTML = bubbleTeaDesc[i];
}, 3000)*/

window.onresize = function(){
    colorText.innerHTML = document.body.offsetWidth;
    if(document.body.offsetWidth >= 1200) console.log(true);
}