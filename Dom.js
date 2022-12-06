/** Tanpa Dom Traversal 
const close = document.querySelector(".close");
const card = document.querySelector(".card");

close.addEventListener("click", function () {
  card.style.display = "none";
}); 
  */

//  Dengan Dom Traversal
const close = document.querySelectorAll(".close");
// console.log(close);
/** 
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function (e) {
    // close[i].parentElement.style.display = "none";
    console.log((e.target.parentElement.style.display = "none"));
  });
}
*/
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    console.log((e.target.parentElement.style.display = "none"));
  });
});
