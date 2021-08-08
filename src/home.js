import * as dmy from './dommy.js';

const introText = "Here is something good to say about our restaurant.";

const render = function() {
    const wrapper = dmy.el("div.content-container");

    const intro = dmy.el("p.intro",introText);
    wrapper.appendChild(intro);

    return wrapper;
}

export {render};