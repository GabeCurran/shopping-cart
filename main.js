let mainContainer = document.querySelector('#mainContainer');

let cart = [];

let text = document.createElement('p');
text.innerHTML = 'hello';
mainContainer.appendChild(text);

const showItems = function() {
    for (let i of itemList) {
        let name = i.name;
        let price = i.price;
        appendItemToList(name, price);
    };
};

const itemList = [
    {
        name: 'Banana',
        price: 1
    },
    {
        name: 'Papaya',
        price: 2
    },
    {
        name: 'Durian',
        price: 100
    },
    {
        name: 'Watermelon',
        price: 7
    },
    {
        name: 'Strawberry',
        price: 5
    },
    {
        name: 'Kiwi',
        price: 4
    }
];

const appendItemToList = function(name, price) {
    let item = document.createElement('p')
    item.innerHTML = name + ' $' + price;
    mainContainer.appendChild(item)
};

const appendItemToCart = function(item) {
    cart.push(item);
};

showItems();
