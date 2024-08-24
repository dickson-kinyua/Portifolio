"use strict";

const modal = document.querySelector(".skills_modal");
const viewSkills = document.querySelector(".view_skills");
const skillSection = document.querySelector(".skills_wrapper");
const mainHeader = document.querySelector(".main_header");
const main_header_wrapper = document.querySelector(".main_header-wrapper");
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
const mobileLinks = document.querySelectorAll(".mobi");
const contactLink = document.querySelector(".contact_link");
const contactForm = document.querySelector("contact_form");
const contactMeWrapper = document.querySelector(".contact_me-wrapper");

window.addEventListener("load", () => loader.classList.add("loader-hidden"));

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

mobileMenu.addEventListener("click", () => {
  // if ((mobileMenuDiv.style.display = "none"))
  mobileMenuDiv.style.display = "block";
  mobileMenu.style.display = "none";
  main_header_wrapper.style.marginTop = "270px";
});

closeMobileView.addEventListener("click", () => {
  mobileMenuDiv.style.display = "none";
  mobileMenu.style.display = "block";
  main_header_wrapper.style.marginTop = "50px";
});
mobileLinks.forEach((item) => {
  item.addEventListener("click", () => {
    // Hide the menu
    mobileMenuDiv.style.display = "none";
    mobileMenu.style.display = "block";
  });
});
contactLink.addEventListener("click", () => {
  contactMeWrapper.classList.remove("hidden2");
});

document.querySelector(".close_email-form").addEventListener("click", (e) => {
  e.preventDefault();
  contactMeWrapper.classList.add("hidden2");
});
