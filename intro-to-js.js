var TAX_RATE = 0.08;
var PHONE_PRICE = 99.99;
var ACCESSORY_PRICE = 9.99;
var SPENDING_THRESHHOLD = 100;
var amount = 0;

bank_balance = prompt('What is your bank balance?');

while (bank_balance > amount + PHONE_PRICE) {
	amount += PHONE_PRICE;
	if (amount < SPENDING_THRESHHOLD) {
		amount += ACCESSORY_PRICE;
	}
}
amount = calculateFinalPurchaseAmount(amount).toFixed(2);

if (amount < bank_balance) {
	console.log('You can afford it');
} else {
	console.log('You cannot afford it');
}
console.log(amount);

function calculateFinalPurchaseAmount(amt) {
	amt = amt + (amt * TAX_RATE);
	return amt;
}