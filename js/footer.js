fetch('footer.html')
.then(response => response.text())
.then(html => {
    document.getElementById('footer-container').innerHTML = html;
})
.catch(error => console.error('Error fetching footer:', error));

// window.onscroll = function() {
//   var footer = document.querySelector('footer');
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     footer.style.display = 'block';
//   } else {
//     footer.style.display = 'none';
//   }
// };