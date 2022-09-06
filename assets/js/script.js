//Elements declarations
const curriculum = document.querySelector("#curriculum");
const curriculumBtn = document.querySelector("#curriculum-btn");
const menuBars = document.querySelector("#menu-bars");
const menuArrow = document.querySelector("#menu-arrow");
const checkboxMenu = document.querySelector("#checkboxMenu");
const menu = document.querySelector(".header__nav");
const progress = document.querySelectorAll(".progress");
const percentages = [
  "65%", //HTML5
  "60%", //CSS3
  "55%", //SASS
  "50%", //JAVASCRIPT
  "45%", //TYPESCRIPT
  "30%", //ANGULAR
  "45%", //EXPRESS
  "40%", //MONGODB
  "40%", //MYSQL
  "40%", //NODE
  "40%", //GIT GITHUB
];

//Show curriculum vitae
curriculumBtn.addEventListener("click", (e) => {
  e.preventDefault();
  curriculum.style.display = "flex";
  curriculum.style.flexFlow = "column nowrap";
});

//Close curriculum layer
curriculum.addEventListener("click", (e) => {
  e.stopPropagation();
  curriculum.style.display = "none";
});

//Set skill bars width in percentage
const setSkillRate = () => {
  for (let index = 0; index < progress.length; index++) {
    progress[index].style.width = percentages[index];
  }
};

//Variables declarations
let menuOpened = checkboxMenu.checked === true ? true : false;

//Add eventListener to menu icons
[menuBars, menuArrow].forEach((element) => {
  element.addEventListener("click", () => {
    toggleMenuIcon();
  });
});

//Add eventListener to menu elements
document.querySelectorAll(".header__nav>ul>li").forEach((element) => {
  element.addEventListener("click", () => {
    initMenu();
    closeMenu();
  });
});

//Initialize menu to "closed" state
const initMenu = () => {
  checkboxMenu.checked = false;
  menuOpened = false;
};

//Open menu function
const openMenu = () => {
  menuBars.classList.toggle("inactive");
  menuArrow.classList.toggle("inactive");
};

//Close menu function
const closeMenu = () => {
  menuBars.classList.toggle("inactive");
  menuArrow.classList.toggle("inactive");
};

//Toggles the menu icon
const toggleMenuIcon = () => {
  if (menuOpened) {
    closeMenu();
  } else {
    openMenu();
  }
  menuOpened = checkboxMenu.checked === true ? true : false;
};

//Main initialize function
const initialize = () => {
  initMenu();
  setSkillRate();
};
initialize();
