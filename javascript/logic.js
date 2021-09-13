//company name
const companyName = document.querySelector("#company-name");
const editCompanyName = document.querySelector("#edit-company-name");
const companyForm = document.querySelector(".form");
const inputValue = document.querySelector("input");

const bonusModalBtn = document.querySelectorAll(".bonus-Btn");

// FUNCTION toggle edit name
function toggleEditName(){
  companyForm.classList.toggle("hidden");
}


editCompanyName.addEventListener("click", () => {
  toggleEditName();
});



//FUNCTION updaten name
function updateName() {
  companyName.innerText = inputValue.value;
}


//FUNCTION create bonus bonus
function createBonusModal() {
  let bonusModal = document.createElement("div");
  bonusModal.className = "bonus-modal";
  document.body.appendChild(bonusModal);
  bonusModal.style.position = "fixed";
  bonusModal.style.top = '50%';
  bonusModal.style.left = '50%';
  bonusModal.style.transform = 'translate(-50%, -50%)'
  bonusModal.style.width = "90%"
  bonusModal.style.height = "80vh"
  bonusModal.style.backgroundColor = '#FAA14D';
  bonusModal.style.borderRadius = '1.6rem';
  bonusModal.style.padding = "2.4rem";
  bonusModal.style.display= "flex";
  bonusModal.style.flexDirection = 'column';
  bonusModal.style.justifyContent = 'center';
  bonusModal.style.alignItems = 'center';
  
  let bonusP = document.createElement('p');
  bonusModal.appendChild(bonusP);
  bonusP.className = "sub";
  bonusP.innerText = 'Congrats! This name give you a bonus of 💰 $1.000.000 💰';
  bonusP.style.color = 'white';
  bonusP.style.textAlign = 'center';
  
  let btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';
  bonusModal.appendChild(btnContainer);
  btnContainer.style.display = 'flex';
  btnContainer.style.flexDirection = 'column';
  btnContainer.style.marginTop = "2.4rem"
  
  let bonusWowBtn = document.createElement('div');
  bonusWowBtn.className = "btn";
  btnContainer.appendChild(bonusWowBtn);
  bonusWowBtn.innerText = "Wow, thanks!";
  
  let bonusNoBtn = document.createElement('div');
  btnContainer.appendChild(bonusNoBtn);
  bonusNoBtn.innerText = "I prefer to pass...";
  bonusNoBtn.className = "btn btn__raise";
  // bonusNoBtn.style.backgroundColor = "#4DD7FA"
};



//eventlistener click on btn
document.querySelector("button").addEventListener("click", () => {
  if (inputValue.value === "") {
    companyName.innerText = "";
  } else if (inputValue.value === "Jeanne") {
    createBonusModal()
  } else {
    updateName();
    companyForm.classList.add("hidden");
  }

  inputValue.value = "";
});

//eventlistener enter key btn
document.querySelector("input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (inputValue.value === "") {
      companyName.innerText = "";
    } else if (inputValue.value === "Jeanne") {
      createBonusModal()
    } else {
      updateName();
      companyForm.classList.add("hidden");
    }
    inputValue.value = "";
  }
});


