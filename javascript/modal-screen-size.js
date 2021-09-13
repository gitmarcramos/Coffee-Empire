//! CHECK SCREEN SIZE
const modal = document.querySelector(".modal");
const acceptScreenSize = document.querySelector("#accept-screen-size");

if (window.screen.width < 768) {
  modal.classList.add("hidden");
}

let isScreenAccepted = false;
console.log(isScreenAccepted);

if (isScreenAccepted !== false) {
  modal.classList.add("hidden");
}

acceptScreenSize.addEventListener("click", () => {
  isScreenAccepted = true;
  modal.classList.add("hidden");
});
