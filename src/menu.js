import * as dmy from './dommy.js';
import menuProcess from './menu-process.js';

const menuItems = menuProcess();

const renderMenuItem = function (food) {
    const card = dmy.el("div.menu-card");
    const textWrapper = dmy.el("div.text-wrapper");

    const title = dmy.el("h4.food-title",food.name);
    const description = dmy.el("p.food-description",food.description);
    const unitPrice = dmy.el("p.unit-price",food.unitPrice);
    const dozenPrice = dmy.el("p.dozen-price",food.dozenPrice);
    
    const imageWrapper = dmy.el("div.image-wrapper");
    const image = food.imageElement;
    imageWrapper.appendChild(image);
   
    dmy.appendChildren(textWrapper,title,description,unitPrice,dozenPrice)
    dmy.appendChildren(card,imageWrapper,textWrapper);
    
    return card;

}

const render = function() {
    const wrapper = dmy.el("div.content-container");
    
    const header = dmy.el("h3.content-header","Our Menu");

    const menuWrapper = dmy.el("div.menu-wrapper");

    menuItems.forEach(function(item) {
        menuWrapper.appendChild(renderMenuItem(item));
    });

    dmy.appendChildren(wrapper,header,menuWrapper);

    return wrapper;
}

export {render};