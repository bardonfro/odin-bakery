import * as dmy from './dommy.js';

const introText = "Thank you for visiting us on the web. We pride ourselves in making the finest cookies we make. Our quality ingredients come from grocery stores, carefully selected and paid for by a shopper. In the bakery you might find workers working. There is probably a machine. You should not find any rats. We hope you stop by to buy.";

const render = function() {
    const wrapper = dmy.el("div.content-container");
    
    const header = dmy.el("h3.content-header","Welcome");

    const intro = dmy.el("p.intro",introText);

    dmy.appendChildren(wrapper,header,intro);

    return wrapper;
}

export {render};