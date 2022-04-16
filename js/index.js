window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar").classList.add("smaller");
  } else {
    document.querySelector(".navbar").classList.remove("smaller");
    
  }
} 

const openSearchForm = document.querySelector(".navbar__right-search").addEventListener('click', function() {
    const headerSearch = document.querySelector(".header-search").classList.toggle("toggled");

})