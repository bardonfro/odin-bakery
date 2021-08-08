const parseElementName = function(str) {
    let _element = {tag:"", id:"", classList:""};

    let subStrings = (function(str) {
        let symbols = ["#","."];
        symbols.forEach(function(sym){
            str = str.replaceAll(sym,("%" + sym));
        });
        return str.split("%");
    })(str);
    

    subStrings.forEach(function(sstr) {
        switch (sstr[0]) {
            case ("#"):
                _element.id = sstr.slice(1);
                break;
            case ("."):
                _element.classList = _element.classList + " " + sstr.slice(1);
                break;
            default:
                _element.tag = sstr;
        }
    })

    let element = document.createElement(_element.tag);
        element.id = _element.id;
        element.classList = _element.classList.slice(1);
    return element;

}

const el = function (name, textContent) {
    const element = parseElementName(name);
    element.textContent = textContent;
    return element;
}


export {el};