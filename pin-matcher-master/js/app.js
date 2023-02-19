function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        // console.log('not found 3 digit ', pin);
        return getPin();
    }
}

function genaratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function() {
    const pin = getPin();
    // console.log(pin);
    //display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calcutator').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typeNumber-Area');
    const typeNumberPriviuse = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        } else if (number === '<') {
            const digits = typeNumberPriviuse.split('');
            digits.pop();

            const remainingDigite = digits.join('');
            typeNumberField.value = remainingDigite;
        }
    } else {


        const newTypeNamber = typeNumberPriviuse + number;
        typeNumberField.value = newTypeNamber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function() {
    const displayPinField = document.getElementById('display-pin');
    const crrentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typeNumber-Area');
    const typeNumber = typeNumberField.value;

    const pinSecsse = document.getElementById('seccse-pin');
    const pinNotMacth = document.getElementById('pin-notMacth');

    if (crrentPin === typeNumber) {
        pinSecsse.style.display = 'block';
        pinNotMacth.style.display = 'none';
    } else {
        pinNotMacth.style.display = 'block';
        pinSecsse.style.display = 'none';
    }
})