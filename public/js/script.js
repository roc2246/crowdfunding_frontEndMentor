const modal = document.querySelector(".modal");
const completed = document.querySelector(".confirm");
const mobileNav = document.querySelector(".mobile-nav");
const toggleNav = document.querySelector(".nav__toggle");

const toggleModal = (box, display1, display2) => {
  if (box.style.display = display1) {
    box.style.display = display2;
  } else {
    box.style.display = display1;
  }
};

const navToggle = () => {
  if (mobileNav.style.display === "none" || mobileNav.style.display === "") {
    toggleNav.src = "images/icon-close-menu.svg";
    mobileNav.style.display = "flex";
  } else {
    toggleNav.src = "images/icon-hamburger.svg";
    mobileNav.style.display = "none";
  }
};

const option = document.getElementsByClassName("option");
const divider = document.querySelectorAll(".option > hr");
const pledge = document.getElementsByClassName("option__pledge");
const radio = document.getElementsByClassName("radio");
Object.keys(radio).forEach((rad) => {
  radio[rad].addEventListener("change", () => {
    Object.keys(radio).forEach((rad) => {
      option[rad].style.borderColor = "#f4f4f4";
      if (rad.length >= rad > 0) {
        pledge[rad].style.display = "none";
        divider[rad].style.display = "none";
      }
    });
    option[rad].style.borderColor = "hsl(176, 72%, 28%)";
    if (rad > 0) {
      pledge[rad - 1].style.display = "block";
      divider[rad - 1].style.display = "block";
    }
  });
});

const complete = () => {
  modal.style.display = "none";
  completed.style.display = "block";
};
