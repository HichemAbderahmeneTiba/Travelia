"use strict";

let list_item = document.querySelectorAll(".list-item");
let others = document.querySelector(".others");
let menu_icon = document.querySelector(".menu-icon");

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
  console.log("fucking");
});
