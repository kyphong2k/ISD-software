const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if(width > 767) {
      $(".navbar").classList.add("smaller");
    }
    $(".scroll-top-btn").classList.add("open")
  } else {
    $(".navbar").classList.remove("smaller");
    $(".scroll-top-btn").classList.remove("open")

    
  }
} 

const openSearchForm = $(".navbar__right-search").addEventListener('click', function() {
    const headerSearch = $(".header-search").classList.toggle("toggled");

})
;
// assign link 404 page to all links have # in attr href
const assignPageNotFound = (function() {
  const linkWithSharp = $$(".sub-menu-item__link,.super-menu-item>a");
  const linkArrayLength = linkWithSharp.length;
  for(let i =0; i< linkArrayLength; i++) {
    if(linkWithSharp[i].href.includes('#')) {
      linkWithSharp[i].href= './page404.html';
  
    }
    else if(linkWithSharp[i].href.includes('working')) {
      linkWithSharp[i].href='./page404.html'
    }
  }
})();
// scroll when click button scroll op top
function scrollOnTop () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}

function showMenuMobile(element) {
  element.classList.toggle('active');
  const navbarHeight = $(".navbar").style.height = 'auto';
  const navbarMobileList = $(".navbar__mobile-list").classList.toggle("open");

}
function showSubmenu(element) {
  element.parentElement.classList.toggle("open");
  
}
function showSupermenu(element) {
  element.parentElement.classList.toggle("open");
}
// underline navbar active



