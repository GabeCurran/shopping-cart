let mainContainer = document.querySelector('#mainContainer');
let totalPrice = 0;

const checkoutPage = function() {
    mainContainer.innerHTML = '';
    checkoutText = document.createElement('p');
    checkoutText.textContent = 'nice';
    mainContainer.appendChild(checkoutText);
};

const checkout = function() {
    
    mainContainer.innerHTML = '';
    
    let uniqueArray = [];
    
    for (let i of cart) {
        if (uniqueArray.includes(i)) {
            } else {
                uniqueArray.push(i);
        };
    };
    console.log(uniqueArray);
    
    for (let i of uniqueArray) {
//        i = fruit
        let count = 0;
        
        for (let j of cart) {
            if (i == j) {count++};
        };
        
        totalPrice += count * itemList[i].price;
        
        let itemAmountDiv = document.createElement('div');
        
        let itemName = document.createElement('p');
        itemName.textContent = itemList[i].name;
        
        let itemAmount = document.createElement('p');
        itemAmount.textContent = count;
        
        itemAmountDiv.appendChild(itemName);
        itemAmountDiv.appendChild(itemAmount);
        
        mainContainer.appendChild(itemAmountDiv);
        
    };
        checkoutPrice = document.createElement('p');
        checkoutPrice.textContent = 'Total Price: ' + totalPrice;
        mainContainer.appendChild(checkoutPrice);
        
    let checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Click to Purchase!';
    checkoutButton.addEventListener('click', checkoutPage);
    mainContainer.appendChild(checkoutButton);
    
};


let goToCheckoutButton = document.createElement('button');
goToCheckoutButton.textContent = 'Go To Checkout';
goToCheckoutButton.addEventListener('click', checkout);


let cart = [];

const itemList = [
    {
        name: 'Banana',
        price: 1,
        itemNumber: 0
    },
    {
        name: 'Papaya',
        price: 2,
        itemNumber: 1
    },
    {
        name: 'Durian',
        price: 100,
        itemNumber: 2
    },
    {
        name: 'Watermelon',
        price: 7,
        itemNumber: 3
    },
    {
        name: 'Strawberry',
        price: 5,
        itemNumber: 4
    },
    {
        name: 'Kiwi',
        price: 4,
        itemNumber: 5
    },
    {
        name: 'Apple',
        price: 1,
        itemNumber: 6
    }
];

const showItems = function() {
    for (let i of itemList) {
        let name = i.name;
        let price = i.price;
        let itemNumber = i.itemNumber;
        appendItemToList(name, price, itemNumber);
    };
};

const addToCartButton = function(event) {
    let parentDiv = event.target.parentElement;
    itemNumber = parentDiv.id;
    
    cart.push(itemNumber);
};

const appendItemToList = function(name, price, itemNumber) {
    
    let itemDiv = document.createElement('div');
    
    let item = document.createElement('p');
    item.textContent = name + ' $' + price;
    itemDiv.appendChild(item);
    itemDiv.id = itemNumber;
    
    let input = document.createElement('input');
    input.textContent = 'Add To Cart';
    input.type = 'button';
    
    input.addEventListener('click', addToCartButton)
    
    itemDiv.appendChild(input);
    
    mainContainer.appendChild(itemDiv);
};

const appendItemToCart = function(item) {
    cart.push(item);
};

showItems();
mainContainer.appendChild(goToCheckoutButton);
