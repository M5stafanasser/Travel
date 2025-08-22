let currentindx = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");

function showslide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}
function nextslide() {
  currentindx++;
  if (currentindx > slides.length - 1) {
    currentindx = 0;
  }
  showslide(currentindx);
}
function prevslide() {
  currentindx--;
  if (currentindx < 0) {
    currentindx = slides.length - 1;
  }
  showslide(currentindx);
}
prevbtn.addEventListener("click", prevslide);
nextbtn.addEventListener("click", nextslide);
dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    currentindx = index;
    showslide(currentindx);
  });
});
setInterval(() => {
  nextslide();
}, 5000);

//Dark Mode
let btn = document.getElementById("darkbtn");
let image = document.getElementById("plannne");
let a = true;
function darkmode() {
  document.body.classList.toggle("darktheme");
  btn.textContent = btn.textContent === "🌙" ? "☀️" : "🌙";
  if (a) {
    image.src = "images/plane darkmode.png";
    a = false;
  } else {
    image.src = "images/planenav.png";
    a = true;
  }
}

darkbtn.addEventListener("click", darkmode);
