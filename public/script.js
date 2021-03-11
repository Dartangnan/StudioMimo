// ============== Declaration of variables ==============

const mainTitle = document.querySelector(".main-text-home");
const mainLinkHome = document.querySelector(".link-home");
const navBarIcon = document.querySelector(".nav-ham-icon");
const navBarMobile = document.querySelector(".nav-items-m");

// ============== Declaration of functions ==============

// ===================== Scripts =======================

// Loading animation in the home page:
setTimeout(function () {
  {
    mainTitle.classList.remove("main-text-hidden");
    setTimeout(function () {
      mainLinkHome.classList.remove("link-hidden");
    }, 1000);
  }
}, 1000);

// Nav Bar movement for mobile:
document.querySelector("body").addEventListener("click", function (e) {
  console.log(e.target.classList.value);
  console.log(e.target.classList.value === "fas fa-bars");
  console.log(e.target.classList.value === "nav-ham-icon");
  if (
    e.target.classList.value === "fas fa-bars" ||
    e.target.classList.value === "nav-ham-icon"
  ) {
    console.log("in");
    navBarMobile.classList.toggle("nav-items-hidden");
  } else {
    if (!navBarMobile.classList.contains("nav-items-hidden")) {
      navBarMobile.classList.add("nav-items-hidden");
    }
  }
});
