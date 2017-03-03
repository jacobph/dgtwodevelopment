//hero height is defined as calc(100vh - $navHeight), but mobile devices have variable viewport height
// because the address bar appears/dissapears on scroll up/down
// that makes the hero resize, which is a reflow (not performant) and janky looking
function setHeroHeight(){
  const hero = document.querySelector('.js_hero-wrap');
  if (hero){
    const clientWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (clientWidth < 800) { //chosen somewhat arbitrarily. Want to capture tablets
      hero.style.height = clientHeight - 70 + 'px';
    }
  }
}

function escapeNav(e) {
  var keyCode = e.keyCode;
  if(keyCode==27) {
    toggleNav();
  }    
}

// function toggleNav(){
//   //toggle active state on hamburger button
//   document.querySelector('.js_toggle-nav').classList.toggle('nav-active');

//   if (document.body.classList.contains('nav-active')) {
//     //nav already active, animate the nav ul items back up
//     document.querySelector('.site-header__site-nav').classList.remove('nav-active'); 

//     //transition the opacity on the nav to 0 by adding a temporary class
//     setTimeout(function(){
//       document.body.classList.add('nav-fade-out');
//     }, 200);

//     //100ms later, close the nav. remove the nav-fade-out class as well
//     setTimeout(function(){
//       document.body.classList.remove('nav-active', 'nav-fade-out');
//     }, 400);

//     //finally, remove that event listener;
//     document.removeEventListener("keydown", escapeNav);

//   } else {
//     //nav not active, lets open it
//     document.body.classList.add('nav-active');

//     //then, 100ms later, trigger the nav ul spread animation
//     setTimeout(function(){
//       document.querySelector('.site-header__site-nav').classList.add('nav-active');
//     }, 100);

//     //attach escapeNav func to to the document
//     document.addEventListener("keydown", escapeNav, false);
//   }
// }

function toggleNav(){
  //toggle active state on hamburger button
  document.querySelector('.js_toggle-nav').classList.toggle('nav-active');

  if (document.body.classList.contains('nav-active')) {
    //nav already active, animate the nav ul items back up
    document.querySelector('.site-header__site-nav').classList.remove('nav-active'); 
    document.body.classList.remove('nav-active');
    //finally, remove that event listener;
    document.removeEventListener("keydown", escapeNav);

  } else {
    //nav not active, lets open it
    document.body.classList.add('nav-active');
    document.querySelector('.site-header__site-nav').classList.add('nav-active');
    //attach escapeNav func to to the document
    document.addEventListener("keydown", escapeNav, false);
  }
}


(function(){
  
  document.querySelector('.js_toggle-nav').addEventListener('click', function(){
    toggleNav();
  });
  
  setHeroHeight();

}())