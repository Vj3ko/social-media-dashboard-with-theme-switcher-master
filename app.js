const switchBtn = document.querySelector("#switch-button");
const body = document.querySelector(".body-light-theme");
const boxes = document.querySelectorAll(".box");
const items = document.querySelectorAll(".item");


function toggleBoxTheme() {
      boxes.forEach((box) => {
            box.classList.toggle("box-light-theme");
            box.classList.toggle("box-dark-theme");
      })
}

function toggleItemTheme() {
      items.forEach((item) => {
            item.classList.toggle("box-light-theme");
            item.classList.toggle("box-dark-theme");
      })
}

function toggleButtonTheme() {
      switchBtn.classList.toggle("active");
}

function toggleBodyTheme() {
      body.classList.toggle("body-dark-theme");
      body.classList.toggle("body-light-theme");
}

function changeStyles() {
      toggleButtonTheme();
      toggleBodyTheme();
      toggleBoxTheme();
      toggleItemTheme();
}

switchBtn.addEventListener("click", changeStyles);


