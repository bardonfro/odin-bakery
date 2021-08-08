import './style.css';
import CookieStack from './cookie-stack.jpg';
import * as home from './home.js';
import * as menu from './menu.js';
import * as contact from './contact.js';

let pages =[
    {name: "Home", render: home.render},
    {name: "Menu", render: menu.render},
    {name: "Contact", render: contact.render},
];

const pageWrapper = document.createElement('div');
    pageWrapper.id = "page-wrapper";
    document.body.appendChild(pageWrapper);

const headerWrapper = document.createElement('div');
    headerWrapper.id = "header";
    pageWrapper.appendChild(headerWrapper);

const pageHeader = document.createElement('h1');
    pageHeader.textContent = "Golden Edge";
    headerWrapper.appendChild(pageHeader);

const pageSubhead = document.createElement('h2');
    pageSubhead.textContent = "Confectioners of Fine Cookies"
    headerWrapper.appendChild(pageSubhead);

const nav = document.createElement('div');
    nav.classList.add("nav");
    pageWrapper.appendChild(nav);

    const menuBtnWrapper = document.createElement('div');
        menuBtnWrapper.classList = "menu-button-wrapper";
        nav.appendChild(menuBtnWrapper);

    pages.forEach(function(page) {
        menuBtnWrapper.appendChild(newNavButton(page));
    })

const contentWrapper = document.createElement('div');
    contentWrapper.id = "content";
    pageWrapper.appendChild(contentWrapper);

    

function newNavButton(obj) {
    const btn = document.createElement('button');
    btn.textContent = obj.name;
    btn.onclick = clickNavButton.bind(obj);
    btn.classList = 'nav-button';
    return btn;
}

function clickNavButton() {
    contentWrapper.textContent = "";
    contentWrapper.appendChild(this.render());
}