var x = document.getElementById("myLinks");
function myFunction() {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.addEventListener("resize", closeMobileMenu);
function closeMobileMenu() {
  if (window.innerWidth >= 760) {
    x.style.display = "none";
  }
}
