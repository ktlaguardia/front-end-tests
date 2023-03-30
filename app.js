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
      navBtns[i].addEventListener("mouseover", function () {});
      navBtns[i].addEventListener("mouseout", function () {});
    }
  }
};
buttonsHoverInit();
/*--------buttons hover animation end------*/

/*----------modal/hamburger menu start-----*/
const hamburger = document.querySelector(".hamburger");
const modalCover = document.querySelector(".modal-cover");
const sidemenu = document.querySelector(".side-menu");
const modalToggle = function (show) {
  show.style.display == "block"
    ? (show.style.display = "none")
    : (show.style.display = "block");
};
hamburger.addEventListener("click", function () {
  modalToggle(modalCover);
  modalToggle(sidemenu);
});
modalCover.addEventListener("click", function () {
  modalToggle(modalCover);
  modalToggle(sidemenu);
});
