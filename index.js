"use strict";

const modal = document.querySelector(".skills_modal");
const introButtton = document.querySelector(".intro_button");
const skillSection = document.querySelector(".skills_wrapper");
const mainHeader = document.querySelector(".main_header");
const introButton = document.querySelector(".intro_button");
const introButton1 = document.querySelector(".intro_button1");
const closeButton = document.querySelector(".close_button");
const overview = document.querySelector(".overview");
const overviewWrapper = document.querySelector(".overview_wrapper");
const closeOverview = document.querySelector(".close_overview");
const loader = document.querySelector(".loader");
const navigation_links = document.querySelector(".nav_links");

loader.addEventListener("transitionend", () => {
  document.body.removeChild("loader");
});

window.addEventListener("load", () => {
  loader.classList.add("loader-hidden");
});

introButtton.addEventListener("load", () => {
  loader.classList.add("loader-hidden");
});

// introButtton.addEventListener("click", function () {
//   modal.classList.remove("hidden");
//   skillSection.classList.add("overlay");
// });

introButton.addEventListener("click", function () {
  skillSection.classList.add("overlay");
  skillSection.classList.remove("hidden");
});

closeButton.addEventListener("click", function () {
  skillSection.classList.remove("overlay");
  skillSection.classList.add("hidden");
});

introButton1.addEventListener("click", () => {
  overviewWrapper.classList.add("overlay2");
  overviewWrapper.classList.remove("hidden2");
});

closeOverview.addEventListener("click", () => {
  overviewWrapper.classList.remove("overlay2");
  overviewWrapper.classList.add("hidden2");
});

const add = [2, 4, 6, 8, 1];
let sum = 0;

for (let i = 0; i < add.length; i++) {
  sum = sum + add[i];
}
console.log(sum);
