document.getElementById('login-btn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if the username and password match the stored credentials
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
  
    if (username === storedUsername && password === storedPassword) {
      // Redirect to the transaction page
      window.location.href = 'transaction.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  document.getElementById('login-btn').addEventListener('click', function() {
    // Login functionality
  });
  
  document.getElementById('register-btn').addEventListener('click', function() {
    window.location.href = 'signup.html';
  });
    