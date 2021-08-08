import * as dmy from './dommy.js';

const render = function() {
    const p = document.createElement('p');
    p.textContent = "Contact Info";
    return p;
}

export {render};