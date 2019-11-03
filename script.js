// document.querySelector(".weeklyBudget").innerHTML = `
// <div class="weeklybudget"> Number Goes Here
// </div> `;


// //test 2//
// let earned = (document.querySelector("#earnings"));
// document.querySelector("#earned").addEventListener("submit", function budgetValue(e) {

//     e.preventDefault();
//     document.querySelector(".weeklyBudget").innerHTML = (`$${earned.value}`);

// })

//Test 3
// class UI {
//     constructor(earned) {
//         this.earned = document.querySelector(earned.value);
//         console.log(this.earned);
//         this.expenseFeedback = document.querySelector(".expense-feedback");
//         this.budgetForm = document.getElementById("budget-form");
//         this.budgetInput = document.getElementById("budget-input");
//         this.budgetAmount = document.getElementById("budget-amount");
//         this.expenseAmount = document.getElementById("expense-amount");
//         this.balance = document.getElementById("balance");
//         this.balanceAmount = document.getElementById("balance-amount");
//         this.expenseForm = document.getElementById("expense-form");
//         this.expenseInput = document.getElementById("expense-input");
//         this.amountInput = document.getElementById("amount-input");
//         this.expenseList = document.getElementById("expense-list");
//         this.itemList = [];
//         this.itemID = 0;
//     }
//     new UI {
//         consturctor(earned)
//         console.log(earned)
//     }
// }
function budgetValue(e) {

    e.preventDefault();
    document.querySelector(".weeklyBudget").innerText = "$" + document.querySelector("#earnings").valueAsNumber;

}

let earned = (document.querySelector("#earnings"));
document.querySelector("#earned").addEventListener("submit", budgetValue)