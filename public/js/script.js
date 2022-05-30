const modal = document.querySelector(".modal");
const page = document.querySelector("body, .project-top");

const toggleModal = (display1, display2) => {
  if ((modal.style.display = display1)) {
    modal.style.display = display2;
  }

  // page.style.backgroundColor = "rgba(0,0,0,0.4)";
};

const option = document.getElementsByClassName("option");
const radio = document.getElementsByClassName("radio");
Object.keys(radio).forEach((rad) => {
  radio[rad].addEventListener("change", () => {
    if (radio[rad].checked === true) {
      Object.keys(radio).forEach(
        (rad) => (option[rad].style.borderColor = "#f4f4f4")
      );
      option[rad].style.borderColor = "hsl(176, 72%, 28%)";
    }
  });
});
