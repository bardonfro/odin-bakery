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

const pageHeader = dmy.el("h1", "Golden Edge");
    headerWrapper.appendChild(pageHeader);

const pageSubhead = dmy.el("h2", "Confectioners of Fine Cookies");
    headerWrapper.appendChild(pageSubhead);

const nav = dmy.el("div.nav");
    pageWrapper.appendChild(nav);

    const navTabWrapper = dmy.el("div.nav-tab-wrapper");
        nav.appendChild(navTabWrapper);

    pages.forEach(function(page) {
        navTabWrapper.appendChild(newNavTab(page));
    })

const contentWrapper = dmy.el("div#content");
    pageWrapper.appendChild(contentWrapper);

    

function newNavTab(obj) {
    const btn = dmy.el("div.nav-tab",obj.name);
    btn.onclick = clickNavTab.bind(obj);
    return btn;
}

function clickNavTab() {
    contentWrapper.textContent = "";
    contentWrapper.appendChild(this.render());
}

//Initial page load - default to Home
contentWrapper.appendChild(home.render());