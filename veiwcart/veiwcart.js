ready()
function ready() {
    const removeCartButtons = document.getElementsByClassName('cart-remove');

    for (let i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItems)
    }

    //change quantity
    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener("change", updatetotal);
    }
}

function removeCartItems(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.remove()
}

function updatetotal() {
    let total = 0;


    let priceElement = document.getElementsByClassName('product-price')[0];

    //ep kieu
    let price = parseFloat(priceElement.innerText.replace("$", ""));

    let quantityElement = document.getElementsByClassName('cart-quantity')[0].value;

    total = total + (price * quantityElement);

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;

}


// let total = 0;
// let cartBoxes = document.getElementsByClassName('product')
// for (let i = 0; i < cartBoxes.length; i++) {
//     let cartBox = cartBoxes[i]
//     let priceElement = cartBox.getElementsByClassName('product-price')[0]

//     //ep kieu
//     let price = parseFloat(priceElement.innerText.replace("$", ""))

//     let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
//     console.log(cartBox.getElementsByClassName("cart-quantity"));


//     let quantity = quantityElement.value
//     console.log(typeof quantity);


//     total = total + (price * quantity)

//     document.getElementsByClassName("total-price")[0].innerText = "$" + total;
// }