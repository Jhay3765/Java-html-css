switch (candy) {

     case chocolate : 

     case lolipop :

     case chips :

     deafault : console.log("No candy")



}

var chocolate_price = 4.99 
var lolipop_price = 3.99
var chips_price = 2.50


var account_balance = 25.43 

function buy_lolipop () {
     account_balance = account_balance -  lolipop_price
     console.log(account_balance);
}


function buy_chocolate (){
     account_balance = account_balance - chocolate_price
     console.log(account_balance);
}


function buy_chips (){
     account_balance = account_balance -  chips_price
     console.log(account_balance);
}


