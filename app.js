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
function hamburgerInit(){
  const hamburger = document.querySelector(".hamburger");
  const modalCover = document.querySelector(".modal-cover");
  const sidemenu = document.querySelector(".side-menu");
  const closeSide = document.querySelector('.close-side');

  window.onresize = function(){
    if(modalCover.style.display == 'block'){
      console.log('true');
      modalCover.style.display = 'none';
    }
    if(document.body.offsetWidth >= 1200){
      sidemenu.style.display = 'block'; 
      modalCover.style.display = 'none';
      console.log(true);
    } else{
      sidemenu.style.display = 'none';
    }
  };
  const modalToggle = function (show) {
    show.style.display == "block"
      ? (show.style.display = "none")
      : (show.style.display = "block");
  };
  const sideBarToggle = function(){
    modalToggle(modalCover);
    modalToggle(sidemenu);
  }

  hamburger.addEventListener("click", function () {
    sideBarToggle();
  });
  modalCover.addEventListener("click", function () {
    /*if(modalCover.style.display == 'block' && sidemenu.style.display == 'none'){
      modalToggle(modalCover);
    };*/
    sideBarToggle();
  });
  closeSide.addEventListener("click", function () {
    sideBarToggle();
  });
};
hamburgerInit();
