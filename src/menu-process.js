import Data from './menu.csv';
import defaultImage from './img/default.jpeg';
const getImagesOnline = false;


const getImage = function(URL) {
    const imageElement = new Image();
    imageElement.classList = 'cookie-image';
    
    if (getImagesOnline) {
        imageElement.src = URL;
    } else {
        imageElement.src = defaultImage;
    }

    return imageElement;
}

const createArray = function() {
    let arrMenu = [];
    
    //To identify the column mapping
    const index = {
        id: 0,
        name: 1,
        description: 2,
        unitPrice: 3,
        dozenPrice: 4,
        imageURL: 5,
    };

    Data.slice(1).forEach(function(item) {
        const id = item[index.id];
        const name = item[index.name];
        const description = item[index.description];
        const unitPrice = item[index.unitPrice];
        const dozenPrice = item[index.dozenPrice];
        const imageURL = item[index.imageURL];
        const imageElement = getImage();

        arrMenu.push({id, name, description, unitPrice, dozenPrice, imageURL,imageElement});
    })
    
    return arrMenu;
}

const arrMenu = createArray();

export default function() {return arrMenu;}
