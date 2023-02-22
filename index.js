const btnSubmit = document.querySelector(".btn-submit");
const frontContent = document.querySelector(".content-1");
const backContent = document.querySelector(".content-2");
const numberOfStars = document.querySelectorAll(".numbers li");
const numberSelected = document.querySelector(".number-selected");
const number1 = document.querySelector(".number-1"),
  number2 = document.querySelector(".number-2"),
  number3 = document.querySelector(".number-3"),
  number4 = document.querySelector(".number-4"),
  number5 = document.querySelector(".number-5");

// let numberStar = [...numberOfStars];
// numberStar = [...numberOfStars];

number1.addEventListener("click", () => {
  numberSelected.textContent = number1.textContent;
  // foreach
  numberOfStars.forEach((element) => {
    element.classList.remove("active");
  });
  number1.classList.add("active");
});
number2.addEventListener("click", () => {
  numberSelected.textContent = number2.textContent;

  numberOfStars.forEach((element) => {
    element.classList.remove("active");
  });
  number2.classList.add("active");
});
number3.addEventListener("click", () => {
  numberSelected.textContent = number3.textContent;
  numberOfStars.forEach((element) => {
    element.classList.remove("active");
  });

  number3.classList.add("active");
});
number4.addEventListener("click", () => {
  numberSelected.textContent = number4.textContent;

  numberOfStars.forEach((element) => {
    element.classList.remove("active");
  });
  number4.classList.add("active");
});
number5.addEventListener("click", () => {
  numberSelected.textContent = number5.textContent;
  numberOfStars.forEach((element) => {
    element.classList.remove("active");
  });
  number5.classList.add("active");
});

btnSubmit.addEventListener("click", () => {
  if (numberSelected.textContent !== "") {
    frontContent.classList.add("hidden");
    backContent.classList.remove("hidden");
  }
});
