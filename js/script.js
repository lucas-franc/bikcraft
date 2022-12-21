//activate link in header
const link = document.querySelectorAll(".header-menu a");

function activateLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

link.forEach(activateLink);

//activate budget's item
const parameters = new URLSearchParams(location.search);

function activateProduct(parameter) {
  const elementParameter = document.getElementById(parameter);
  if (elementParameter) {
    elementParameter.checked = true;
  }
}

parameters.forEach(activateProduct);

//questions
const question = document.querySelectorAll(".questions button");

function activateQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answers = document.getElementById(controls);
  console.log(controls);
  answers.classList.toggle("active");
  const active = answers.classList.contains("active");
  question.setAttribute("aria-expanded", active);
  console.log(question);
}

function questionEvent(question) {
  question.addEventListener("click", activateQuestion);
}

question.forEach(questionEvent);

//bike's image
const bikeImage = document.querySelectorAll(".bike-image img");
const imagesContainer = document.querySelector(".bike-image");

function changeImage(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    imagesContainer.prepend(img);
  }
}

function imagesEvent(img) {
  img.addEventListener("click", changeImage);
}

bikeImage.forEach(imagesEvent);

//animation
if (window.SimpleAnime) {
  new SimpleAnime();
}
