let userBudget = undefined;

function budgetValue(e) {
    e.preventDefault();
    let zeroFix = document.querySelector("#earnings").valueAsNumber || "0";
    document.querySelector(".weeklyBudget").innerText = "$" + zeroFix;
    userBudget = document.querySelector(".weeklyBudget").innerText.slice(1);
    console.log(userBudget);
    document.querySelector("#earned").style.display = "none";
}

let earned = document.querySelector("#earnings");
document.querySelector("#earned").addEventListener("submit", budgetValue);

let dropDownContent = document.querySelector(".dropDownContent");
let expenseName;
let expensePrice;
let expenseCategory;
let expensesArray = [];
let totalEnetertainment = (totalFood = totalClothing = totalBills = totalExpenses = totalSavings = 0);

function expenseValue(e) {
    e.preventDefault();
    expenseName = document.querySelector(".Name").value;
    expensePrice = document.querySelector(".Price").valueAsNumber;
    expenseCategory =
        dropDownContent.options[dropDownContent.selectedIndex].value;
    console.log(`
    Expense Category: ${expenseCategory}.
    Expense Name: ${expenseName}.
    Expense Price: ${expensePrice}.`);
    expensesArray.push([expenseCategory, expenseName, expensePrice]);
    // totals cost of each item from each category
    if (expenseCategory == "Entertainment") {
        totalEnetertainment += expensePrice;
    } else if (expenseCategory == "Food") {
        totalFood += expensePrice;
    } else if (expenseCategory == "Clothing") {
        totalClothing += expensePrice;
    } else if (expenseCategory == "Bills") {
        totalBills += expensePrice;
    }
    totalExpenses = totalFood + totalBills + totalClothing + totalEnetertainment;
    totalSavings = userBudget - totalExpenses;
    console.log(`
    budget: ${userBudget}.
    total expenses: ${totalExpenses}.
    savings left: ${totalSavings}. 
    `);
    if (totalSavings <= 0) {
        alert("Your budget is 0");
    }

    //for graphics
    document.querySelector("#foodBar").style.width = `${(totalFood / userBudget) *
    100}%`;
    document.querySelector("#billsBar").style.width = `${(totalBills /
    userBudget) *
    100}%`;
    document.querySelector("#clothingBar").style.width = `${(totalClothing /
    userBudget) *
    100}%`;
    document.querySelector(
        "#entertainmentBar"
    ).style.width = `${(totalEnetertainment / userBudget) * 100}%`;
    document.querySelector("article").innerHTML += `
    <p class="itemized">
   <span class="listed"> ${expenseCategory}:</span> <span class="listed">${expenseName} </span><span class="listed"> $ ${expensePrice}</span>
    </p>
    
    
    
    `;
    //animate
    document.querySelectorAll("#graphics div").forEach(function (el) {
        el.classList.add("animator");
        setTimeout(function () {
            el.classList.remove("animator");
        }, 1001);
    });
}

document
    .querySelector("#expenses-button")
    .addEventListener("click", expenseValue);