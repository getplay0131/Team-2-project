let hill1 = document.querySelector("#hill1");
let hill2 = document.querySelector("#hill2");
let hill3 = document.querySelector("#hill3");
let hill4 = document.querySelector("#hill4");
let hill5 = document.querySelector("#hill5");
let leaf = document.querySelector("#leaf");
let tree = document.querySelector("#tree");
let plant = document.querySelector("#plant");
let text = document.querySelector("#text");
let textOpa = document.querySelectorAll(".textSec p");
const activeA = document.querySelectorAll(".naviA");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  let value2 = Math.min(value / 1000, 1);
  hill1.style.top = value * 0.8 + "px";
  hill2.style.bottom = value * -0.4 + "px";
  hill3.style.left = value * 0.08 + "px";
  hill4.style.left = value * -0.025 + "px";
  hill5.style.right = value * -0.1 + "px";
  leaf.style.right = value * 0.1 + "px";
  tree.style.right = value * 0.1 + "px";
  text.style.right = value * 0.5 + "px";
  textOpa.forEach((p) => {
    p.style.opacity = value2 * 0.98 + 0.02;
  });
});
// alert("hi");

activeA.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    activeA.forEach((links) => {
      links.classList.remove("active");
    });
    link.classList.add("active");
  });
});
