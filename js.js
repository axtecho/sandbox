document.querySelector(".rotatingText-adjective1").classList.add("rot1");
document.querySelector(".rotatingText-adjective2").classList.add("rot2");
document.querySelector(".rotatingText-adjective3").classList.add("rot3");
document.querySelector(".rotatingText-adjective4").classList.add("rot4");

/* ------------------------------------------------------------- */
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
