function login(token) {
  setInterval(() => {
    document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.token = `"${token}"`
  }, 50);
  setTimeout(() => {
    location.reload();
  }, 2500);
}

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'L') {
    let token = prompt("Enter a token to login:", "Enter token");
    if (token == null) {
      alert("Paste your token dumbass")
    }
    else {
      login(token);
    }
  }
});


