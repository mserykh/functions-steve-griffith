//food prices
var beer_cost = 6.25;
var burger_cost = 4.75;
var pop_cost = 3.00;

//user's money
var account_balance = 15.75;

//drink beer
function drink_beer() {
    account_balance = account_balance - beer_cost;
    console.log(account_balance);
}

//eat burger
function eat_burger() {
    account_balance = account_balance - burger_cost;
    console.log(account_balance);
}

//drink pop
function drink_pop() {
    account_balance = account_balance - pop_cost;
    console.log(account_balance);
}

//visit the carnival, eat, and drink
var mealList = [drink_beer, drink_pop, eat_burger, drink_beer, eat_burger];
    function visitCarnival(mList, msg) {
        for (var i=0, num = mList.length; i < num; i++)  {
            //mList[i]();
            mList[i].call();
            console.log(msg[i]);
        }
}
visitCarnival(mealList, "Hello!");