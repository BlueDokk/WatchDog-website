// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );

const btn_toggler = document.querySelector('.navbar__toggler');
const navbar = document.querySelector('.navbar');

btn_toggler.addEventListener('click', () => {
    navbar.classList.toggle('collapsible--expanded');
})