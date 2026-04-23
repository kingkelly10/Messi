/*
js function that takes two nbrs and operator using arrow function
*/
// const simpleCalcultor
function convertCurrency(amount, rateFromUSD, rateToUSD) {
    // step 1: convert input amount to USD
    let amountInUSD = amount / rateFromUSD;

    // step 2: convert USD to target currency
    let convertedAmount = amountInUSD * rateToUSD;

    // step 3: return final result
    return convertedAmount;
}