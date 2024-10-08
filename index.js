"use strict";

let list_item = document.querySelectorAll(".list-item");
let others = document.querySelector(".others");
let menu_icon = document.querySelector(".menu-icon");
let navBar = document.querySelector(".navBar");

// for the underline
list_item.forEach(item => {
  item.addEventListener("click", function () {
    list_item.forEach(item => item.classList.remove("underlined"));
    item.classList.add("underlined");
  });
});

// for the sideBar
menu_icon.addEventListener("click", function () {
  others.classList.toggle("active");
});

// for making the navBar sticky
window.addEventListener("scroll", function () {
  if (window.scrollY >= 120) {
    navBar.classList.add("sticky");
    navBar.classList.remove("up");
  } else {
    // navBar.classList.remove("sticky");
    navBar.classList.add("up");
  }
});
