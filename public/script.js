/*document.querySelector(".home").style.height = `${
  document.querySelector(".bottom-img").height
}px`;*/

setTimeout(function () {
  {
    document
      .querySelector(".main-text-home")
      .classList.remove("main-text-hidden");
    setTimeout(function () {
      document.querySelector(".link-home").classList.remove("link-hidden");
    }, 1000);
  }
}, 1000);
