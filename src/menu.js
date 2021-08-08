import * as dmy from './dommy.js';

const render = function() {
    const wrapper = document.createElement('div');
        wrapper.classList = "content-container";

    const p = document.createElement('p');
    p.textContent =  "Our Menu"
    wrapper.appendChild(p);

    return wrapper;
}

export {render};