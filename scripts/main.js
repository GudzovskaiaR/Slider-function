function Slider(slider) {
  console.log(slider);
  if (!slider) {
    throw new Error("Gallery element should be passed!");
  }

  let currentContent = slider.querySelector(".slide");
  const slideContainer = slider.querySelector(".slider-wrapper");
  const prevButton = slider.querySelector(".btn-prev");
  const nextButton = slider.querySelector(".btn-next");

  function showImage(content) {
    currentContent = content;
    if (slider.querySelector("img")) {
      slider.querySelector("img").src = content.querySelector("img").src;
    } else {
      slider.querySelector("h2").textContent =
        content.querySelector("h2").textContent;
      slider.querySelector("p").textContent =
        content.querySelector("p").textContent;
    }
  }

  function showNextImage() {
    showImage(
      currentContent.nextElementSibling || slideContainer.firstElementChild
    );
  }
  function showPrevImage() {
    showImage(
      currentContent.previousElementSibling || slideContainer.lastElementChild
    );
  }
  nextButton.addEventListener("click", showNextImage);
  prevButton.addEventListener("click", showPrevImage);
}
const slider1 = Slider(document.querySelector(".slider1"));
const slider2 = Slider(document.querySelector(".slider2"));
