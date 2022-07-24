
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
 }

