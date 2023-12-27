// swiper js

const swiper = new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("close-btn");
const menu = document.querySelector("nav .container ul");

menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});
// hide menu
closeBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});
// active class
const navItems = menu.querySelectorAll("li");

const changeActiveItem = () => {
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });
};

navItems.foeEach(item => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    changeActiveItem();
    link.classList.add("active");
  });
});
// toggle

const skillItems = document.querySelectorAll('section.skills .skill')

skillItems.forEach(skill=>{
  skill.querySelector('.head').addEventListener('click',()=>{
    skill.querySelector('.items').classList.toggle('show-items')
  })
})

// projects

var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
 
function openHTML(){
  content1.style.transform="translateX(0)"
  content1.style.transform="translateX(100%)"
  content1.style.transform="translateX(100%)"
}
function openCSS(){
  content1.style.transform="translateX(100%)"
  content1.style.transform="translateX(0)"
  content1.style.transform="translateX(100%)"
}
function openJS(){
  content1.style.transform="translateX(100%)"
  content1.style.transform="translateX(100%)"
  content1.style.transform="translateX(0)"
}