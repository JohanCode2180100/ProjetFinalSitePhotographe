//Menu responsive

const logoMenu = document.querySelector(".logoMenuImg");
const contItems = document.querySelector(".contItems");
const arrItems = document.querySelectorAll(".Items");

logoMenu.addEventListener("click", () => {
  if (contItems.className === "contItems") {
    contItems.className += " responsive";
    logoMenu.style.width = "30px";
    logoMenu.style.top = "5px";
    logoMenu.src = "assets/pictures/close.svg";
  } else {
    contItems.className = "contItems";
    logoMenu.style.width = "30px";
    logoMenu.style.top = "13px";
    logoMenu.src = "assets/pictures/menu.svg";
  }
});

arrItems.forEach((item) => {
  item.addEventListener("click", () => {
    contItems.className = "contItems";
    logoMenu.src = "assets/pictures/menu.svg";
  });
});
