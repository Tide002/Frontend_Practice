document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.username === username && user.password === password)) {
      alert('Username already exists.');
      return;
    }
  
    users.push({ username, password, avatar: '', profile: {} });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedInUser', username);
    alert('Account created successfully, Kindly login.')
    window.location.href = 'login.html';
  });