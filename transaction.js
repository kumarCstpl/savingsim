// document.getElementById('logout-btn').addEventListener('click', function() {
//     // Clear the stored credentials in local storage
//     localStorage.removeItem('username');
//     localStorage.removeItem('password');
  
//     // Redirect to the login page
//     window.location.href = 'login.html';
//   });
  
//   document.getElementById('submit-btn').addEventListener('click', function() {
//     var transactionType = document.getElementById('transaction-type').value;
//     var amount = document.getElementById('amount').value;
//     var description = document.getElementById('description').value;
//     var date = document.getElementById('date').value;
  
//     var table = document.getElementById('transaction-table');
//     var row = table.insertRow(1);
//     var typeCell = row.insertCell(0);
//     var amountCell = row.insertCell(1);
//     var descriptionCell = row.insertCell(2);
//     var dateCell = row.insertCell(3);
//     var deleteCell = row.insertCell(4);
  
//     typeCell.innerHTML = transactionType;
//     amountCell.innerHTML = amount;
//     descriptionCell.innerHTML = description;
//     dateCell.innerHTML = date;
  
//     var deleteButton = document.createElement('button');
//     deleteButton.innerHTML = 'Delete';
//     deleteButton.addEventListener('click', function() {
//       deleteTransaction(row.rowIndex);
//     });
//     deleteCell.appendChild(deleteButton);
  
//     document.getElementById('amount').value = '';
//     document.getElementById('description').value = '';
//     document.getElementById('date').value = '';
//   });
  
//   function deleteTransaction(rowIndex) {
//     var table = document.getElementById('transaction-table');
//     table.deleteRow(rowIndex);
//   }
document.getElementById('logout-btn').addEventListener('click', function() {
    // Clear the stored credentials in local storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  
    // Redirect to the login page
    window.location.href = 'login.html';
  });
  
  document.getElementById('submit-btn').addEventListener('click', function() {
    var transactionType = document.getElementById('transaction-type').value;
    var amount = document.getElementById('amount').value;
    var description = document.getElementById('description').value;
    var date = document.getElementById('date').value;
  
    // Create a transaction object
    var transaction = {
      type: transactionType,
      amount: amount,
      description: description,
      date: date
    };
  
    // Get the existing transactions from local storage
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  
    // Add the new transaction to the array
    transactions.push(transaction);
  
    // Save the updated transactions array back to local storage
    localStorage.setItem('transactions', JSON.stringify(transactions));
  
    // Reset the form fields
    document.getElementById('transaction-type').value = 'credit';
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('date').value = '';
  
    // Refresh the transaction table
    loadTransactions();
  });
  
  function deleteTransaction(rowIndex) {
    // Get the existing transactions from local storage
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  
    // Remove the transaction at the specified index
    transactions.splice(rowIndex - 1, 1);
  
    // Save the updated transactions array back to local storage
    localStorage.setItem('transactions', JSON.stringify(transactions));
  
    // Refresh the transaction table
    loadTransactions();
  }
  
  function loadTransactions() {
    // Get the existing transactions from local storage
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  
    var table = document.getElementById('transaction-table');
  
    // Clear the existing table rows
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
  
    // Add the transactions to the table
    for (var i = 0; i < transactions.length; i++) {
      var transaction = transactions[i];
  
      var row = table.insertRow(i + 1);
      var typeCell = row.insertCell(0);
      var amountCell = row.insertCell(1);
      var descriptionCell = row.insertCell(2);
      var dateCell = row.insertCell(3);
      var deleteCell = row.insertCell(4);
  
      typeCell.innerHTML = transaction.type;
      amountCell.innerHTML = transaction.amount;
      descriptionCell.innerHTML = transaction.description;
      dateCell.innerHTML = transaction.date;
  
      var deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteTransaction(row.rowIndex);
      });
      deleteCell.appendChild(deleteButton);
    }
  }
  
  // Load the transactions on page load
  loadTransactions();
  