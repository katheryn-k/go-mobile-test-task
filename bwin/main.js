"use strict"
document.addEventListener("DOMContentLoaded", function() {

    const playBtn = document.querySelector(".play__button");

    playBtn.addEventListener("click", function() {
        console.log("Button clicked");
    });

    const pageOverlay = document.querySelector(".page-wrapper");
    const modalBtn = document.querySelector(".modal__btn--exit");
    const ruleBtn = document.querySelector(".rule__link");
    const modal = document.querySelector(".modal");


    ruleBtn.addEventListener("click", function() {
        modal.classList.remove('modal--close');
        modal.classList.add('modal--open');
        pageOverlay.classList.remove('page-wrapper__overlay');
        pageOverlay.classList.add('page-wrapper__overlay--dark');
    });

    modalBtn.addEventListener("click", function() {
        modal.classList.remove('modal--open');
        modal.classList.add('modal--close');
        pageOverlay.classList.remove('page-wrapper__overlay--dark');
        pageOverlay.classList.add('page-wrapper__overlay');
    });
});