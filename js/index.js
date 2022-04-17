window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar").classList.add("smaller");
    document.querySelector(".scroll-top-btn").classList.add("open")
  } else {
    document.querySelector(".navbar").classList.remove("smaller");
    document.querySelector(".scroll-top-btn").classList.remove("open")

    
  }
} 

const openSearchForm = document.querySelector(".navbar__right-search").addEventListener('click', function() {
    const headerSearch = document.querySelector(".header-search").classList.toggle("toggled");

})
function scrollOnTop () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}