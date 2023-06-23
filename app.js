

var totalExpense = 0;

function Get_budget() {
  var budget = document.querySelector("#budget").value;

  if (budget === "" || isNaN(parseFloat(budget))) {
    document.getElementById("error").innerHTML = "Please enter a valid value";
  } else {
    document.getElementById("showing_content").innerHTML = "<h2>Budget</h2>" + budget;
    var elements = document.getElementsByClassName("All_cont");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "skyblue";
    }
  }
}

function put_expense() {
  var budget = parseFloat(document.querySelector("#budget").value);
  var product = document.querySelector("#Product");
  var expense = document.querySelector("#Expense");

  if (product.value === "" || expense.value === "") {
    document.getElementById("rror2").innerHTML = "Please enter a value";
  } else {
    var newItemId = Date.now(); // Generate a unique ID for the expense item
    var expenseItem = `<li id='${newItemId}'>
      ${product.value}<span>${expense.value}</span>
      <i onclick='edit("${newItemId}")' class="fa-solid fa-pencil"></i>
      <i onclick='del("${newItemId}")' class="fa-solid fa-trash"></i>
    </li>`;

    document.getElementById('main_content').innerHTML += expenseItem;
    product.value = "";

    var expenseValue = parseFloat(expense.value);
    totalExpense += expenseValue;
    expense.value = "";

    document.getElementById("showing_expense").innerHTML = `<h2>Expense</h2> ${totalExpense}`;
    document.getElementById("after").innerHTML = `<h2>Remaining</h2> ${budget - totalExpense}`;
  }
}

function del(itemId) {
  var item = document.getElementById(itemId);
  var expenseValue = parseFloat(item.querySelector("span").textContent);
  totalExpense -= expenseValue;
  item.remove();

  document.getElementById("showing_expense").innerHTML = `<h2>Expense</h2> ${totalExpense}`;
}

function edit(itemId) {
  var item = document.getElementById(itemId);
  var product = item.firstChild;
  var expense = item.querySelector("span");

  var newProduct = prompt("Enter the new product name", product.textContent);
  var newExpense = parseFloat(prompt("Enter the new expense amount", expense.textContent));

  if (newProduct !== null && newExpense !== null && !isNaN(newExpense)) {
    totalExpense -= parseFloat(expense.textContent);
    totalExpense += newExpense;

    product.textContent = newProduct;
    expense.textContent = newExpense;

    document.getElementById("showing_expense").innerHTML = `<h2>Expense</h2> ${totalExpense}`;
    document.getElementById("after").innerHTML = `<h2>Remaining</h2> ${budget - totalExpense}`;
  }
}

    




    
    
    
    
    
    