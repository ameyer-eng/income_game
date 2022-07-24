
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

var myDebt = 0;

var myBalance = 5000;


document.getElementById("Items").innerHTML = "ITEMS:" + myItems.toString();
document.getElementById("Balance").innerHTML = "Money:" + myBalance.toString();
document.getElementById("Debt").innerHTML = "DEBT" + myDebt.toString();

function Buy(){
         myBalance = myBalance - 50;
         document.getElementById("Balance").innerHTML = myBalance.toString();
         Seller();

 }

function Seller(){
    var index =  Math.floor(Math.random()*3);
    console.log(index.toString());
    var items = ["Car", "Bus", "House"];
    var item_cost = [4000, 8000, 1000000000000000];

    document.getElementById("SALE").innerHTML = "Item " + items[index].toString() + "  is for sale";
    document.getElementById("SALE_1").innerHTML = "It will cost " + item_cost[index].toString() + "at rate";
    

}