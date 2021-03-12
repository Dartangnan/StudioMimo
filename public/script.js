// ============== Declaration of variables ==============

const body = document.querySelector("body");
const mainTitle = document.querySelector(".main-text-home");
const mainLinkHome = document.querySelector(".link-home");
const navBarIcon = document.querySelector(".nav-ham-icon");
const itemsNavBarMobile = document.querySelector(".nav-items.mobile");
const navItems = document.querySelectorAll(".nav-items");
const bottomNavItems = document.querySelectorAll(".bottom-nav-items a");
const navBar = document.querySelector(".nav-bar");
const footerLinks = document.querySelector(".icons");

// ============== Declaration of functions ==============
const rollSmoothTo = function (sectionName) {
  const sectionTo = document.querySelector(`#${sectionName.replace(" ", "-")}`);
  setTimeout(
    function () {
      sectionTo.scrollIntoView({ behavior: "smooth" });
    },
    150,
    sectionTo
  );
};
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
body.addEventListener("click", function (e) {
  if (
    e.target.classList.value === "fas fa-bars" ||
    e.target.classList.value === "nav-ham-icon"
  ) {
    itemsNavBarMobile.classList.toggle("nav-items-hidden");
  } else {
    if (!itemsNavBarMobile.classList.contains("nav-items-hidden")) {
      itemsNavBarMobile.classList.add("nav-items-hidden");
    }
  }
});

// Links to the different sections of the website:
// Nav bar links
navItems.forEach((el) => {
  el.addEventListener("click", function (e) {
    rollSmoothTo(e.target.outerText);
  });
});

// Footer links
bottomNavItems.forEach((el) => {
  el.addEventListener("click", function (e) {
    rollSmoothTo(e.target.outerText);
  });
});

// Call for action button:
mainLinkHome.addEventListener("click", function (e) {
  rollSmoothTo("Contato");
});

// Make sure that the nav bar shows up if scrolling up and desapears if scrolling down
const oldPosMin = 0;
let oldPos = 70;
window.onscroll = function () {
  if (!itemsNavBarMobile.classList.contains("nav-items-hidden")) {
    itemsNavBarMobile.classList.add("nav-items-hidden");
  }
  if (pageYOffset > oldPosMin && pageYOffset < oldPos) {
    navBar.style.position = "fixed";
    navBar.style.width = "100%";
    navBar.style.transform = "translatey(0)";

    oldPos = pageYOffset;
  } else if (pageYOffset > oldPosMin && pageYOffset > oldPos) {
    setTimeout(function () {
      navBar.style.position = "fixed";
      navBar.style.width = "100%";
      oldPos = pageYOffset;
      navBar.style.transform = "translatey(-100%)";
    }, 250);
  } else {
    setTimeout(function () {
      navBar.style.transform = "translatey(0)";
      navBar.style.position = "absolute";
    }, 250);
  }
};

// Linking icons on the bottom are working:
footerLinks.addEventListener("click", function (e) {
  e.target.classList.length > 0
    ? console.log(e.target.classList[1].includes("instagram"))
    : console.log(e.target.classList);
});
