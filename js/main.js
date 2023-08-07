// ==== Start Mode Dark Light ====
if (localStorage.getItem("dark-mode")) {
  document.querySelector(".page").classList.add("dark");
  let divs = [...document.querySelector(".page").children];
  divs.forEach((div) => div.classList.add("dark"));
}

document.querySelector(".light-dark").onclick = function () {
  this.classList.toggle("dark");
  document.querySelector(".page").classList.toggle("dark");
  if (document.querySelector(".page").classList.contains("dark")) {
    localStorage.setItem("dark-mode", "dark");
    let divs = [...document.querySelector(".page").children];
    divs.forEach((div) => div.classList.add("dark"));
  } else {
    let divs = [...document.querySelector(".page").children];
    divs.forEach((div) => div.classList.remove("dark"));
    localStorage.removeItem("dark-mode");
  }
};

// Up Button
window.onscroll = function () {
  this.scrollY > 440
    ? document.getElementById("up").classList.add("show")
    : document.getElementById("up").classList.remove("show");
};
document.getElementById("up").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};