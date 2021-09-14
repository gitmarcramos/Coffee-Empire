let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);



const buttons = document.querySelectorAll(".switch");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("click");
    btn.classList.toggle("switch--on")
  });
});
