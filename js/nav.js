// enum that I may use, probably not
// const pages = {
//   index: 'index.html',
//   page1: 'page1.html',
//   page2: 'page2.html',
//   page3: 'page3.html'
// };

// find the current page based on url
var currenturl = document.URL.toString()
const urlArray = currenturl.split("/", 4);
var navId = "sideBar/" + urlArray[3];

// check if page right
console.log(navId);

// top of page function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// side bar script
function openNav() {
  try {
    document.getElementById(navId).style.width = "auto"; 
    document.getElementById(navId).style.minWidth = "220px";
  } catch (typeError) {
    document.getElementById(navId + "index.html").style.width = "auto"; 
    document.getElementById(navId + "index.html").style.minWidth = "220px";
  }
}
function closeNav() {
  try {
    document.getElementById(navId).style.width = "0";
    document.getElementById(navId).style.minWidth = "0"; 
  } catch (typeError) {
    document.getElementById(navId + "index.html").style.width = "0";
    document.getElementById(navId + "index.html").style.minWidth = "0";
  }
}