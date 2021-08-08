import Data from './menu.csv';

export default function() {
    let arrMenu = [];
    
    //To identify the column mapping
    const index = {
        id: 0,
        name: 1,
        description: 2,
        unitPrice: 3,
        dozenPrice: 4,
        image: 5,
    };

    Data.slice(1).forEach(function(item) {
        const id = item[index.id];
        const name = item[index.name];
        const description = item[index.description];
        const unitPrice = item[index.unitPrice];
        const dozenPrice = item[index.dozenPrice];
        const image = item[index.image];

        arrMenu.push({id, name, description, unitPrice, dozenPrice, image});
    })
    
    return arrMenu;
}
