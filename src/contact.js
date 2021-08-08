import * as dmy from './dommy.js';

const render = function() {
    const wrapper = dmy.el("div.content-container");

    const header = dmy.el("h3.content-header","Contact Us");

    const container = dmy.el('div.contact-container');
    

    dmy.appendChildren(container,
        dmy.el('h4','Telephone'),
        dmy.el('p','(123) 456-7890'),
        dmy.el('h4','Address'),
        dmy.el('p','123 Street Town,ST')
        )
    dmy.appendChildren(wrapper,header,container)
    return wrapper;
}

export {render};