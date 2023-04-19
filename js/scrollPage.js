const scrollToTopButton = document.getElementById("scroll-to-top-btn");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const scrollToBottomButton = document.getElementById("scroll-to-bottom-btn");

scrollToBottomButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});
