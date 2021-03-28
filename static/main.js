let mainContainer = document.querySelector('#mainContainer');
let totalPrice = 0;
let subtotal = 0;

const checkoutPage = function() {
    mainContainer.innerHTML = '';
    checkoutText = document.createElement('p');
    checkoutText.textContent = 'Transaction Completed!';
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
        itemAmount.textContent = 'x' + count;
        
        itemAmountDiv.appendChild(itemName);
        itemAmountDiv.appendChild(itemAmount);
        
        mainContainer.appendChild(itemAmountDiv);
        
    };
        checkoutPrice = document.createElement('p');
        checkoutPrice.textContent = 'Total Price: ' + '$' + totalPrice;
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

const showTotal = function() {
    let subtotalTitle = document.createElement('p');
    subtotalTitle.textContent = 'Subtotal:';
    subtotalTitle.id = 'subtotalTitle';
    
    let subtotal = document.createElement('p');
    subtotal.id = 'subtotal';
    subtotal.textContent = '$0';
    
    mainContainer.appendChild(subtotalTitle);
    mainContainer.appendChild(subtotal);
}

const addToCartButton = function(event) {
    
    let parentDiv = event.target.parentElement;
    itemNumber = parentDiv.id;
    subtotal += itemList[itemNumber].price;
    document.querySelector('#subtotal').textContent = '$' + subtotal;
    
    
    cart.push(itemNumber);
};

const appendItemToList = function(name, price, itemNumber) {
    
    let itemDiv = document.createElement('div');
    
    let itemName = document.createElement('p');
    itemName.textContent = name;
    itemName.className = 'fruit';
    
    let itemPrice = document.createElement('p');
    itemPrice.textContent = '$' + price;
    itemPrice.className = 'price';
    
    itemDiv.appendChild(itemPrice);
    itemDiv.appendChild(itemName);
    itemDiv.id = itemNumber;
    
    let button = document.createElement('button');
    button.textContent = 'Add To Cart';
    button.type = 'button';
    
    button.addEventListener('click', addToCartButton)
    
    itemDiv.appendChild(button);
    
    mainContainer.appendChild(itemDiv);
};

const appendItemToCart = function(item) {
    cart.push(item);
};

showItems();
showTotal();
mainContainer.appendChild(goToCheckoutButton);
