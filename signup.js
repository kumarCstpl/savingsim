document.getElementById('signup-btn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Store the username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  
    // Redirect to the login page
    window.location.href = 'login.html';
  });
   document.getElementById('login-btn').addEventListener('click', function() {
    window.location.href = 'login.html';
  });

 
    