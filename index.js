let sidebar = document.querySelector(".nav-links");

function showSideBar() {
  sidebar.style.display = "block";
}

function hideSideBar() {
  sidebar.style.display = "none";
}
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      let num = 0;
      if (button.id === "prev-slide") {
        num--;
      } else {
        num++;
      }
      changeSlide(num);
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
};

window.addEventListener("load", initSlider);

function changeSlide(n) {
  const images = document.querySelectorAll(".image-list .image-item");
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const dots = document.querySelectorAll(".dot");
  console.log(n, imageList, dots);
  for (let i = 0; i < Math.floor(images.length / 2); i++) {
    // images[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[n].className += " active";
  //   images[n].style.opacity = 1;
  const direction = n === 0 ? -1 : 1;
  const scrollAmount = imageList.clientWidth * direction;
  imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
}
