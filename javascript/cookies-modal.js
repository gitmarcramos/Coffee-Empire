//! cookies modal

let areCookiesAccepted = false;


const acceptCookiesBTN = document.querySelector("#accept-cookies");
const refuseCookiesBTN = document.querySelector("#refuse-cookies");
const cookiesModal = document.querySelector(".cookies-modal");


function acceptCookies() {
   return areCookiesAccepted = true;
}


// setTimeout(() => {
//     cookiesModal.classList.remove('hidden-cookies')
// }, 1000);

acceptCookiesBTN.addEventListener("click", () => {
    cookiesModal.classList.add('hidden-cookies');
    acceptCookies()
});

if(areCookiesAccepted === false) {
    console.log("cookies not accepted");
} else if(areCookiesAccepted === true) {
    cookiesModal.classList.add("hidden");
}

console.log(areCookiesAccepted);