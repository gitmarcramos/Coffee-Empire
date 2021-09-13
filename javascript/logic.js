//company name
const companyName = document.querySelector("#company-name");
const editCompanyName = document.querySelector("#edit-company-name");
const companyForm = document.querySelector(".form");
const inputValue = document.querySelector("input");

const bonusModalBtn = document.querySelectorAll('.bonus-Btn')

editCompanyName.addEventListener("click", () => {
  companyForm.classList.toggle("hidden");
});

function updateName() {
  companyName.innerText = inputValue.value;
}

document.querySelector("button").addEventListener("click", () => {
  if (inputValue.value === "") {
    companyName.innerText = "";
  } else if (inputValue.value === "Jeanne") {
    document.querySelector(".nailed-company-name").classList.remove("hidden");
  } else {
    updateName();
    companyForm.classList.add("hidden");
  }

  inputValue.value = "";
});

bonusModalBtn.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".nailed-company-name").classList.add("hidden");
  })
})