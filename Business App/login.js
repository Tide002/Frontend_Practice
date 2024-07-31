document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'dashboard.html';
      loadUserProfile();
    } else {
      alert('Invalid username or password.');
    }
  });