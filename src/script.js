const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

// var yourNavigation = document.querySelector(".navigationBar");
// stickyDiv = "sticky";
// yourHeader = document.querySelector(".header");
// // yourHeader = yourHeader.height();
// window.addEventListener("scroll", function () {
//   if (scrollTop() > yourHeader) {
//     yourNavigation.addClass(stickyDiv);
//   } else {
//     yourNavigation.removeClass(stickyDiv);
//   }
// });

window.addEventListener("scroll", function () {
  // alert("x");
  const header = document.querySelector(".navigationBar");
  // if (window.scrollTop() < 0.1) {
  //   alert("x");
  // }
  header.style.top = "25px";
  header.classList.toggle("sticky", window.scrollY > 0);
});
