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

var submissions = 0;

let formBtm = document.getElementById("submit");
// let total = document.getElementById("totalsub");
formBtm.addEventListener("click", function(e) {
  submissions++;

  document.getElementById("totalsub").innerHTML = "Total # of submissions: " + submissions;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
                         