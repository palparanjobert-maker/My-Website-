let users = [];

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let user = users.find(user => user.username === username && user.password === password);
  if (user) {
    alert('Hello, ' + username + '!');
  } else {
    alert('Invalid username or password!');
  }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let username = document.getElementById('register-username').value;
  let password = document.getElementById('register-password').value;
  let confirmPassword = document.getElementById('confirm-password').value;
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
  } else {
    let user = users.find(user => user.username === username);
    if (user) {
      alert('Username already exists!');
    } else {
      users.push({ username, password });
      alert('Registration successful!');
    }
  }
});