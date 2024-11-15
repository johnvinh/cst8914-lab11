const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // Accordion is open, so close it
      content.style.maxHeight = null;
      content.setAttribute('aria-hidden', 'true');
      this.setAttribute('aria-expanded', 'false');
    } else {
      // Accordion is closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
      content.setAttribute('aria-hidden', 'false');
      this.setAttribute('aria-expanded', 'true');
    }
  });
});
