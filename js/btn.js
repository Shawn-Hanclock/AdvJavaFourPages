// // button to take page to top
// let mybutton = document.getElementById("btnTop");

// // shows a button
// window.onscroll = function() {scrollFunction()};

// // function to take you to the top of page
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

let formBtm = document.getElementById("submit");
formBtm.addEventListener("click", function(e) {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
                         