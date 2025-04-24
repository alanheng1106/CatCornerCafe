document.addEventListener("DOMContentLoaded", () => {
    // constant declaration
    const items = document.querySelectorAll(".menu-item");
    const orderList = document.getElementById("order-list");
    const subtotalDisplay = document.getElementById("subtotal");
    const taxDisplay = document.getElementById("tax");
    const totalPriceDisplay = document.getElementById("total-price");
    const placeOrderBtn = document.getElementById("place-order");

    //declaring cart element (for the instant update on the bottom of the menu)
    let cart = {};

    //functioanality for the + and - of buttons on the items 
    items.forEach(item => {
        const name = item.dataset.name;
        const price = parseFloat(item.dataset.price);
        const minusBtn = item.querySelector(".minus");
        const plusBtn = item.querySelector(".plus");
        const countDisplay = item.querySelector(".count");

        cart[name] = { quantity: 0, price: price };
        //checks if u click + to add an item of what u clicked
        plusBtn.addEventListener("click", () => {
            cart[name].quantity++;
            updateCart();
        });
        //checks if u click - to remove an item of whatever u clicked
        minusBtn.addEventListener("click", () => {
            if (cart[name].quantity > 0) {
                cart[name].quantity--;
            }
            updateCart();
        });
    });

    
    function updateCart() {
        orderList.innerHTML = "";
        let subtotal = 0;
        //making indivual items in the cart 
        for (const item in cart) {
            if (cart[item].quantity > 0) {
                const listItem = document.createElement("li");
                listItem.textContent = `${item}: ${cart[item].quantity}`;
                orderList.appendChild(listItem);
                subtotal += cart[item].quantity * cart[item].price;
            }
        }
        //money calculation 
        const tax = subtotal * 0.1;
        const totalPrice = subtotal + tax;
        //display of calculations
        subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
        taxDisplay.textContent = `$${tax.toFixed(2)}`;
        totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;

        //displaying items 
        items.forEach(item => {
            const name = item.dataset.name;
            const countDisplay = item.querySelector(".count");
            countDisplay.textContent = cart[name].quantity;
        });
    }

    placeOrderBtn.addEventListener("click", placeOrder);
    //placing order shit 
    function placeOrder() {
        if (Object.values(cart).every(item => item.quantity === 0)) {
            alert("Your cart is empty. Add items before placing an order!");
            return;
        }

        // Notification stuff
        const notification = document.createElement("div");
        notification.classList.add("order-notification");
        notification.innerHTML = `
            <p>✅ Order Placed Successfully!</p>
            <span>Your order is being processed. Thank you!</span>
        `;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.add("hide");
            setTimeout(() => notification.remove(), 500);
        }, 3000);

        // Reset cart after order placement
        cart = {};
        updateCart();
    }

    
});

