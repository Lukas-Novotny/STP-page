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
//-------------------------------------------------------------

drink = document.getElementById("drink");
drinkOffers = document.getElementById("drink-offers")
drink.addEventListener("click", drinksExpand);;
function drinksExpand(){
   drinkOffers.classList.toggle("not-expanded")
}
drink2 = document.getElementById("drink2");
drinkOffers2 = document.getElementById("drink-offers2")
drink2.addEventListener("click", drinksExpand2);;
function drinksExpand2(){
   drinkOffers2.classList.toggle("not-expanded")
}
drink3 = document.getElementById("drink3");
drinkOffers3 = document.getElementById("drink-offers3")
drink3.addEventListener("click", drinksExpand3);;
function drinksExpand3(){
   drinkOffers3.classList.toggle("not-expanded")
}