import {foodItems} from './food.js'

const container = document.getElementById('container')
const cartItems = document.getElementById('cart-items')
const submitBtn = document.getElementById('submit-btn')
const cardDetails = document.getElementById('card-details')
const paymentCont = document.getElementById('container2')



let totalPrice = 0;

document.addEventListener('click', function(e){
    if(e.target.classList.contains('addBtn')){
        const name = e.target.dataset.name
        const price = parseFloat(e.target.dataset.price)
        addToCart(name, price)
    } 
    else if(e.target.classList.contains('removeBtn')){
        const price = parseFloat(e.target.dataset.price)
        const cartItem = e.target.closest('.cart-item-row')
        removeFromCart(cartItem, price)
    }
    
})


function foodItemsArr(){
     foodItems.forEach((item)=>{
        container.innerHTML += 
        `
        <div class="foodItems">
                    <img src="${item.image}" alt="${item.name}" class="img">
                    <div class="text">
                        <h2>${item.name}</h2>
                        <p>${item.description}</p>
                        <span class="currency">$${item.price.toFixed(2)}</span>
                    </div>
                    <input type="button" name="addToMenu" id="addBtn" value=" + "
                        data-name="${item.name}"
                        data-price="${item.price}"
                        class="addBtn">
                </div>
                <hr>
        `
    })
}

foodItemsArr()

function addToCart(name, price){
        cartItems.innerHTML +=
            `
            <div class="cart-item-row">
                <div class="item-details">
                    <h4>${name}</h4>
                    <input type="button" name="remove" id="removeBtnId" value="remove"
                    class="removeBtn" data-price="${price}">
                </div>
                <span>$${price.toFixed(2)}</span>
            </div>
            `
        totalPrice += price;
        updateTotalPrice();
        completeOrder();
        
}

function removeFromCart(cartItem, price){
    if(cartItem){
        cartItem.remove();
        totalPrice -= price;
        updateTotalPrice();
    }
}

function updateTotalPrice(){
    const totalPriceEl = document.querySelector('.total-price span')
    totalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;
}


function closeBtn(){
    document.getElementById('close-btn')
        .addEventListener('click', function(){
            cardDetails.style.display = 'none'
        })
}

closeBtn()

function payBtn(){
    document.getElementById('submit')
        .addEventListener('click', function(){
            cardDetails.style.display = 'none';
            paymentCont.innerHTML = 
            `
            <div class="message-container">
            <p class="message">Thanks, John Wick! Your order is on its way!</p>
            </div>
            `
        })
}



payBtn()

function completeOrder(){
    document.getElementById('submitBtn')
     .addEventListener('click', function(){
        cardDetails.style.display = 'block'
    })

}

