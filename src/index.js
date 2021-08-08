import './style.css';
import * as home from './home.js';
import * as menu from './menu.js';
import * as contact from './contact.js';
import * as dmy from './dommy.js';

let pages =[
    {name: "Home", render: home.render},
    {name: "Menu", render: menu.render},
    {name: "Contact", render: contact.render},
];

const pageWrapper = dmy.el("div#page-wrapper");
    document.body.appendChild(pageWrapper);

const headerWrapper = dmy.el("div#header");
    pageWrapper.appendChild(headerWrapper);

const pageHeader = dmy.el("h1", "Golden Eagle");
    headerWrapper.appendChild(pageHeader);

const pageSubhead = dmy.el("h2", "Confectioners of Fine Cookies");
    headerWrapper.appendChild(pageSubhead);

const nav = dmy.el("div.nav");
    pageWrapper.appendChild(nav);

    const menuBtnWrapper = dmy.el("div.menu-button-wrapper");
        nav.appendChild(menuBtnWrapper);

    pages.forEach(function(page) {
        menuBtnWrapper.appendChild(newNavButton(page));
    })

const contentWrapper = dmy.el("div#content");
    pageWrapper.appendChild(contentWrapper);

    

function newNavButton(obj) {
    const btn = dmy.el("button.nav-button",obj.name);
    btn.onclick = clickNavButton.bind(obj);
    return btn;
}

function clickNavButton() {
    contentWrapper.textContent = "";
    contentWrapper.appendChild(this.render());
}

//Initial page load - default to Home
contentWrapper.appendChild(home.render());