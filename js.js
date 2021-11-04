const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animation();
    }
  });
});

function animation() {
  gsap.from(".square-wrapper", {
    opacity: 1,
    x: 400,
    duration: 1.3,
  });
}

observer.observe(document.querySelector(".colorsquare"));

/* 
-------------------------TEXTCARUSEL---------------------------------- */

document
  .querySelector(".rotatingText-adjective:nth-of-type(4)")
  .addEventListener("animationend", restartanimation);
console.log("rotate");
function restartanimation() {
  document
    .querySelector(".rotatingText-adjective:nth-of-type(1)")
    .classList.add("rotate");
  document
    .querySelector(".rotatingText-adjective:nth-of-type(2)")
    .classList.add("rotate");
  document
    .querySelector(".rotatingText-adjective:nth-of-type(3)")
    .classList.add("rotate");
  document
    .querySelector(".rotatingText-adjective:nth-of-type(4)")
    .classList.add("rotate");
}
