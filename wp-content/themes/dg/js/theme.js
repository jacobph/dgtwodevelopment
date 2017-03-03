function escapeNav(e) {
  var keyCode = e.keyCode;
  if(keyCode==27) {
    toggleNav();
  }    
}

function toggleNav(){
  //toggle active state on hamburger button
  document.querySelector('.js_toggle-nav').classList.toggle('nav-active');

  if (document.body.classList.contains('nav-active')) {
    //nav already active, animate the nav ul items back up
    document.querySelector('.site-header__site-nav').classList.remove('nav-active'); 

    //transition the opacity on the nav to 0 by adding a temporary class
    setTimeout(function(){
      document.body.classList.add('nav-fade-out');
    }, 200);

    //100ms later, close the nav. remove the nav-fade-out class as well
    setTimeout(function(){
      document.body.classList.remove('nav-active', 'nav-fade-out');
    }, 400);

    //finally, remove that event listener;
    document.removeEventListener("keydown", escapeNav);

  } else {
    //nav not active, lets open it
    document.body.classList.add('nav-active');

    //then, 100ms later, trigger the nav ul spread animation
    setTimeout(function(){
      document.querySelector('.site-header__site-nav').classList.add('nav-active');
    }, 100);

    //attach escapeNav func to to the document
    document.addEventListener("keydown", escapeNav, false);

  }
}

document.querySelector('.js_toggle-nav').addEventListener('click', function(){
  toggleNav();
});