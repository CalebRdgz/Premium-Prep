// calculateBillTotal
// Write a function called "calculateBillTotal".
// Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.
// Notes:
// Assume that sales tax is 9.5% and tip is 15%.
// Do NOT tip on the sales tax, only on the pre tip amount.
function calculateBillTotal(preTaxAndTipAmount) {
    // calculate tax
    //calculate tip
    //add tax and tip to total and return
    var tax = preTaxAndTipAmount *.095;
    var tip = preTaxAndTipAmount*.15;
    return preTaxAndTipAmount+tip+tax;
}
//test cases:
var output = calculateBillTotal(20);
console.log(output); // --> 24.9