const openNavigation = document.querySelector("#openNav");
const closeNavigation = document.querySelector("#closeNav");

closeNavigation.addEventListener("click", function () {
  document.getElementById("mySidenav").style.display = "none";
  document.body.style.backgroundColor = "white";
});

openNavigation.addEventListener("click", function () {
  document.getElementById("mySidenav").style.display = "block";
  document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
});

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
