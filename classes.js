
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




// const Alice = new Person("Alice", 2000);
// document.getElementById("buy_button").addEventListener("click", Alice.buy());

//Alice.print_balance();

// //console.log()
// //document.getElementById("stupidParagraph").innerHTML = Alice.name + test();

//document.getElementById("stupidParagraph").innerHTML = "ASDFKJSADLFJKASLJDKF";



var myItems = ["Car", "Bus", "House"];

var myDebt = 0;

var myBalance = 5000;


document.getElementById("Items").innerHTML = myItems.toString();
document.getElementById("Balance").innerHTML = myBalance.toString();
document.getElementById("Debt").innerHTML = myDebt.toString();

function Buy(){
         myBalance = myBalance - 50;
         document.getElementById("Balance").innerHTML = myBalance.toString();
 }