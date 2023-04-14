const scrollToBottomButton = document.getElementById("scroll-to-bottom-btn");

scrollToBottomButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});
