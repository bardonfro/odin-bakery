import './style.css';
import CookieStack from './cookie-stack.jpg';
import render from './home.js';
import _dommy from './dommy.js';
const dommy = _dommy();

const contentWrapper = document.createElement('div');
    contentWrapper.id = "content";
    document.body.appendChild(contentWrapper);

const headerWrapper = document.createElement('div');
    headerWrapper.id = "header";
    contentWrapper.appendChild(headerWrapper);

const pageHeader = document.createElement('h1');
    pageHeader.textContent = "Golden Edge";
    headerWrapper.appendChild(pageHeader);

const pageSubhead = document.createElement('h2');
    pageSubhead.textContent = "Fine Confections"
    headerWrapper.appendChild(pageSubhead);

dommy.log("We did it!");