const render = function() {
    const wrapper = document.createElement('div');
        wrapper.classList = "content-container";

    const p = document.createElement('p');
    p.textContent =  "Home Page"
    wrapper.appendChild(p);

    return wrapper;
}

export {render};