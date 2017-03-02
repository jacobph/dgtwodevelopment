function escapeNav(e) {
  var keyCode = e.keyCode;
  if(keyCode==27) {
    console.log("You hit the esc key.");
    toggleNav();
  } else {
    console.log("Oh no you didn't.");
  }   
}

function toggleNav(){
  console.log('toggleNav');
  document.body.classList.toggle('nav-active');
  if (document.body.classList.contains('nav-active')) {
    document.addEventListener("keydown", escapeNav, false);
  } else {
    document.removeEventListener("keydown", escapeNav);
  }
}



document.querySelector('.js_toggle-nav').addEventListener('click', function(){
  toggleNav();
  console.log('clicked js_toggle-nav');
});