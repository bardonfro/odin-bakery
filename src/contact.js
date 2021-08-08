import * as dmy from './dommy.js';

const render = function() {
    const wrapper = dmy.el("div.content-container");

    const p = document.createElement('p');
    p.textContent = "Contact Info";
    wrapper.appendChild(p);
    return wrapper;
}

export {render};