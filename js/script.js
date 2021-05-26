

var p = {

    btnToggler: document.querySelector('.navbar__toggler'),
    navbar: document.querySelector('.navbar'),

}

var m = {

    startApp: () => {
        m.collapse(p.btnToggler, p.navbar);
    },

    collapse: (element, target) => {
        element.addEventListener("click", () => {
            target.classList.toggle("collapsible--expanded");
        })
    },
}


m.startApp();




