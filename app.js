"use strict";

console.log("goodbye");

const navBar = document.querySelector(".nav-bar");
const navBtns = navBar.children;
/*--------buttons hover animation------*/
const buttonsHoverInit = function () {
  for (let i = 0; i < navBtns.length; i++) {
    const button = navBtns[i];
    if (button.outerHTML.startsWith("<li>")) {
      const child = navBtns[i].firstChild;
      navBtns[i].addEventListener("mouseover", function () {
        button.style.backgroundColor = "white";
        child.style.backgroundColor = "white";
        button.style.color = "black";
        child.style.color = "black";
      });
      navBtns[i].addEventListener("mouseout", function () {
        button.style.backgroundColor = 'rgb(94, 81, 81)';
        child.style.backgroundColor = 'rgb(94, 81, 81)';
        button.style.color = "white";
        child.style.color = "white";
      });
    }
  }
};
buttonsHoverInit();
