const headerEl = document.getElementById("header")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    headerEl.classList.add("background-header")
  } else {
    headerEl.classList.remove("background-header")
  }
}
