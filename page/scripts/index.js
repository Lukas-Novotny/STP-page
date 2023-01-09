let headerButton = document.getElementById("header-button")
let headerNav = document.getElementById("header-nav")
let header = document.getElementById("header")
headerButton.addEventListener("click", dropdown)
function dropdown() {
   headerNav.classList.toggle("visible")
   // headerNav.style.height = "fit-content"
   if (headerNav.classList.contains("visible")) {
      whiteLogo.src = "./images/logo-white.svg";
      burgerImage.style.color = "white";
   }
   else {
      if (window.scrollY > 840) {
         whiteLogo.src = "./images/logo-black.svg";
         burgerImage.style.color = "black";
      }
      else {
         whiteLogo.src = "./images/logo-white.svg";
         burgerImage.style.color = "white";
      }
   }

};
whiteLogo = document.getElementById("white");
burgerImage = document.getElementById("burger")
window.addEventListener("scroll", () => {
   if (!headerNav.classList.contains("visible")) {
      if (window.scrollY < 840) {
         whiteLogo.src = "./images/logo-white.svg";
         burgerImage.style.color = "white";
      }
      else {
         whiteLogo.src = "./images/logo-black.svg";
         burgerImage.style.color = "black";

      }
   }

});

