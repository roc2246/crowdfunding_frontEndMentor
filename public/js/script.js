const modal = document.querySelector(".modal");
const page = document.querySelector("body, .project-top");

const toggleModal = (display1, display2) => {
  if ((modal.style.display = display1)) {
    modal.style.display = display2;
  }

  // page.style.backgroundColor = "rgba(0,0,0,0.4)";
};

const option = document.getElementsByClassName("option");
const divider = document.querySelectorAll(".option > hr");
const pledge = document.getElementsByClassName("option__pledge");
const radio = document.getElementsByClassName("radio");
Object.keys(radio).forEach((rad) => {
  radio[rad].addEventListener("change", () => {
      Object.keys(radio).forEach((rad) => {
        option[rad].style.borderColor = "#f4f4f4";
        if(rad.length >= rad > 0 ) {
            pledge[rad].style.display = "none";
            divider[rad].style.display = "none";
          } 
      });
      option[rad].style.borderColor = "hsl(176, 72%, 28%)";
      if(rad > 0) {
        pledge[rad -1].style.display = "block";
        divider[rad -1].style.display = "block";
      } 
  });
});

