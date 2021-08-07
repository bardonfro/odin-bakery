import './style.css';
import CookieStack from './cookie-stack.jpg';
import render from './home.js';

const contentWrapper = document.createElement('div');
    contentWrapper.id = "content";
    document.body.appendChild(contentWrapper);

render();