



const bill = document.querySelector(`#bill`);
const discount = document.querySelector(`#discount`);
const calculator = document.querySelector(`#calculator`);
const total = document.querySelector(`#total`);


calculator.addEventListener(`click`, () => {
const billValue = bill.value;
const discountValue = discount.value;
console.log(billValue);
console.log(discountValue);

const valid = isValid(discountValue);
if (valid) {
    const discountAmount = billValue - (billValue*discountValue) / 100 ;
    console.log(discountAmount);
    total.innerHTML = `Total amount to pay is: ${discountAmount}`;
} else {
    alert(`Entered Discount is not correct : ${discountValue}`);
}
});
function isValid(discount) {
    if (discount<0 || discount>100) {
        return false;
    }
    return true;
}

calculator.addEventListener(`click`, () => {
    const billValue = bill.value;
const valids = isValid(billValue);
if (valids) {
    const billAmount = discountValue - (discountValue*billValue) / 100 ;
    console.log(billAmount);
    total.innerHTML = `Total amount to pay is: ${billAmount}`;
} else {
    alert(`Entered Bill is not correct : ${billValue}`);
}
});
function isValid(bill) {
    if (bill<0) {
        return false;
    }
    return true;
}
