"use strict";

let list_item = document.querySelectorAll(".list-item");
console.log(list_item);
list_item.forEach(item => {
  item.addEventListener("click", function () {
    list_item.forEach(item => item.classList.remove("underlined"));
    item.classList.add("underlined");
  });
});
