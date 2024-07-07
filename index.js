"use strict";

const modal = document.querySelector(".skills_modal");
const viewSkills = document.querySelector(".view_skills");
const skillSection = document.querySelector(".skills_wrapper");
const mainHeader = document.querySelector(".main_header");
// const introButton = document.querySelector(".intro_button");
const download_cv = document.querySelector(".download_cv-btn");
const closeButton = document.querySelector(".close_button");
const overview = document.querySelector(".overview");
const overviewWrapper = document.querySelector(".overview_wrapper");
const closeOverview = document.querySelector(".close_overview");
const loader = document.querySelector(".loader");
const navigation_links = document.querySelectorAll(".nav_links");
const menu_Icon = document.querySelector(".checkbtn");
const submitB = document.querySelector(".submit_b");
const mobileMenu = document.querySelector(".checkbtn");
const mobileMenuDiv = document.querySelector(".mobile_menu");
const closeMobileView = document.querySelector(".close_mobile-view");

// loader.addEventListener("transitionend", () => {
//   document.body.removeChild("loader");
// });

window.addEventListener("load", () => {
  loader.classList.add("loader-hidden");
});

viewSkills.addEventListener("click", function () {
  skillSection.classList.add("overlay");
  skillSection.classList.remove("hidden");
});

closeButton.addEventListener("click", function () {
  skillSection.classList.remove("overlay");
  skillSection.classList.add("hidden");
});

download_cv.addEventListener("click", () => {
  overviewWrapper.classList.add("overlay2");
  // overviewWrapper.classList.remove("hidden2");
});

// closeOverview.addEventListener("click", () => {
//   overviewWrapper.classList.remove("overlay2");
//   overviewWrapper.classList.add("hidden2");
// });

// menu_Icon.addEventListener("click", () => {
//   document.querySelector(".sidebar_nav-list").style.display = "block";
// });

submitB.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Your Message has been sent!");
});

mobileMenu.addEventListener("click", () => {
  if ((mobileMenuDiv.style.display = "none"))
    mobileMenuDiv.style.display = "block";
});

closeMobileView.addEventListener("click", () => {
  mobileMenuDiv.style.display = "none";
});
