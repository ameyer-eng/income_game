
// class Person {
//   constructor(name, balance) {
//     this.name = name;
//     this.balance = balance;
//   }
//     buy()
//     {
//         document.getElementById("stupidParagraph").innerHTML = "Buy  Button Hit " + this.balance.toString();
//         this.balance = this.balance - 500;
//     }


// }






var myItems = ["Car", "Bus", "House"];
var myDebts = [];

var myDebt = 0;

var myBalance = 5000;

var current_item_cost = 0;

var interest = 0.04;


document.getElementById("Items").innerHTML = "ITEMS:" + myItems.toString();
document.getElementById("Balance").innerHTML = "Money:" + myBalance.toString();
document.getElementById("Debt").innerHTML = "DEBT  " + myDebt.toString();

function Buy(){
         
        if(myBalance < 1){
            myDebt = myDebt + current_item_cost;
            myBalance = 0; 
            document.getElementById("Debt").innerHTML = "DEBT  " + myDebt.toString();
            Calculate_interest(myDebt);
        }else{
            myBalance = myBalance - current_item_cost;
            document.getElementById("Balance").innerHTML =  "MONEY:" + myBalance.toString();
        }

         

         //call the seller function to put a new item for sale (seller should also be a class....)
         Seller();

 }

function Sell()
{
    //pop the last element of the array and subtract it's cost
    myBalance = myBalance + myDebts.pop();
    //update the balance paragraph
    document.getElementById("Balance").innerHTML = myBalance.toString();
    //remove the item from my items
    myItems.pop();
    //update the items paragraph
    document.getElementById("Items").innerHTML = "ITEMS:" + myItems.toString();



}
 

function Seller(){
    var index =  Math.floor(Math.random()*3);
    console.log(index.toString());
    var items = ["Car", "Bus", "House"];
    var item_cost = [4000, 8000, 10];
    //var rates = [1.01, 5.5, 25];

    current_item_cost = item_cost[index];

    myItems.push(items[index]);
    document.getElementById("Items").innerHTML = "ITEMS:" + myItems.toString();

    myDebts.push(item_cost[index]);

    document.getElementById("SALE").innerHTML = "Item " + items[index].toString() + "  is for sale";
    document.getElementById("SALE_1").innerHTML = "It will cost " + item_cost[index].toString() + " at rate " + rates[index];
    

}

function Calculate_interest(X)
{
    var owed =  X*interest;
    //update interest para
    document.getElementById("Interest").innerHTML = "Interest " + owed.toString();
}