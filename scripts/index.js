let headerButton = document.getElementById("header-button")
let headerNav = document.getElementById("header-nav")
let header = document.getElementById("header")
headerButton.addEventListener("click", dropdown)




function vh(percent) {
   var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
   return (percent * h) / 100;
 }
 
 function vw(percent) {
   var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
   return (percent * w) / 100;
 }
//https://stackoverflow.com/questions/44109314/javascript-calculate-with-viewport-width-height


function dropdown() {
   headerNav.classList.toggle("visible")
   // headerNav.style.height = "fit-content"
   if (headerNav.classList.contains("visible")) {
      whiteLogo.src = "./images/logo-white.svg";
      burgerImage.style.color = "white";
   }
   else {
      if (window.scrollY > vh(80)) {
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
window.addEventListener("load", colors);
window.addEventListener("scroll", colors);
function colors(){
      if (!headerNav.classList.contains("visible")) {
      if (window.scrollY < vh(80)) {
         whiteLogo.src = "./images/logo-white.svg";
         burgerImage.style.color = "white";
      }
      else {
         whiteLogo.src = "./images/logo-black.svg";
         burgerImage.style.color = "black";

      }
   }
}



//-------------------------------------------------------------

// drink = document.getElementById("drink");
// drinkOffers = document.getElementById("drink-offers")
// drink.addEventListener("click", drinksExpand);
// function drinksExpand(){
//    drinkOffers.classList.toggle("not-expanded")
// }
// drink2 = document.getElementById("drink2");
// drinkOffers2 = document.getElementById("drink-offers2")
// drink2.addEventListener("click", drinksExpand2);;
// function drinksExpand2(){
//    drinkOffers2.classList.toggle("not-expanded")
// }
// drink3 = document.getElementById("drink3");
// drinkOffers3 = document.getElementById("drink-offers3")
// drink3.addEventListener("click", drinksExpand3);;
// function drinksExpand3(){
//    drinkOffers3.classList.toggle("not-expanded")
// }



let drinkTypes = document.getElementsByClassName("drink-type");

for (let i = 0; i < drinkTypes.length; i++) {
    drinkTypes[i].addEventListener("click", drinksExpand);   
}
function drinksExpand(){
   if (this.children[1].classList.contains("not-expanded")) {
      this.children[1].classList.toggle("not-expanded")
      this.children[0].children[0].children[0].classList.toggle("rotated")
   }
   else{
      this.children[1].classList.toggle("not-expanded")
      this.children[0].children[0].children[0].classList.toggle("rotated")

   }
}
// function drinksExpand(){
//    if (this.children[1].style.maxHeight === "999px") {
//       this.children[1].style.maxHeight = "0px"
//    }
//    else{
//       this.children[1].style.maxHeight = "999px"
//    }
// }
// let buttonScrollToMenu = document.getElementById("buttonScrollToMenu");
// console.log(drinkTypes)
// console.log(buttonScrollToMenu)
// buttonScrollToMenu.addEventListener("click", scrollToId);
function scrollToId(){
   console.log("idk")
   document.getElementById("menu").scrollIntoView();

}