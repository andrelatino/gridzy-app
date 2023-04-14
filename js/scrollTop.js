const scrollToTopButton = document.getElementById("scroll-to-top-btn");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
