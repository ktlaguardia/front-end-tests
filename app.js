"use strict";
AOS.init();

console.log("goodbye");

const navBar = document.querySelector(".nav-bar");
const navBtns = navBar.children;
/*--------buttons hover animation------*/
const buttonsHoverInit = function () {
  for (let i = 0; i < navBtns.length; i++) {
    const button = navBtns[i];
    if (button.outerHTML.startsWith("<li")) {
      const child = navBtns[i].firstChild;
      navBtns[i].addEventListener("mouseover", function () {
        button.style.backgroundImage = "linear-gradient(rgb(121, 100, 71), rgb(121, 100, 71), rgb(121, 100, 71), rgb(109, 139, 113))";
        child.style.backgroundImage = "linear-gradient(rgb(121, 100, 71), rgb(121, 100, 71), rgb(121, 100, 71), rgb(109, 139, 113))";
        button.style.color = "rgb(109, 139, 113)";
        child.style.color = "rgb(179, 209, 183)";
      });
      navBtns[i].addEventListener("mouseout", function () {
        button.style.backgroundImage = 'linear-gradient(rgb(121, 100, 71), rgb(121, 100, 71))';
        child.style.backgroundImage = 'linear-gradient(rgb(121, 100, 71), rgb(121, 100, 71))';
        button.style.color = "white";
        child.style.color = "white";
      });
    }
  }
};
buttonsHoverInit();
