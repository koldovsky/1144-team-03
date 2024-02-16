const burger = document.querySelector(".burger");
const headerWrapperLinks = document.querySelector(".header__wrapper-links");

burger.addEventListener("click", () => {
  if (!burger.classList.contains("active")) {
    burger.classList.add("active");
    headerWrapperLinks.classList.add("active");
  } else {
    burger.classList.remove("active");
    headerWrapperLinks.classList.remove("active");
  }
});
