document.getElementsByClassName('go-button')[0].addEventListener('click', login);

// registered users
localStorage.setItem('Liza', JSON.stringify('414141'));
localStorage.setItem('Аружан', JSON.stringify('1313'));

if (localStorage.getItem('nextId') === null) {
  localStorage.setItem('nextId', JSON.stringify('21'));
}

function login() {
  if (JSON.parse(localStorage.getItem(document.getElementById('username').value)) !== document.getElementById('password').value) {
    alert('invalid login or password!');
  } else {
    localStorage.setItem('user', JSON.stringify(document.getElementById('username').value));
    location.href = 'index.html';
  }
}
