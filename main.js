const btnAdvice = document.querySelector(".btnAdvice");
const advice = document.querySelector(".advice");
const btnExit = document.querySelector(".btnExit");
const overlay = document.querySelector(".overlay");

const hideAdvice = () => {
  advice.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnAdvice.addEventListener("click", () => {
  advice.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnExit.addEventListener("click", hideAdvice);

overlay.addEventListener("click", hideAdvice);

document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.code == "Escape") {
    hideAdvice();
  }
});
