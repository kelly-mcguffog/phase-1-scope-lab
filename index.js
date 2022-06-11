// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName(){
    customerName = "BOB";
    return customerName;
}

var bestCustomer;
function setBestCustomer(){
    bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Greg";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Joe";
}