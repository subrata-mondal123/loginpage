function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (!username || !password) {
        alert('Please fill in both fields.');
        return;
    }

    // Check if the user already exists
    if (localStorage.getItem(username)) {
        alert('Username already exists. Please choose another.');
        return;
    }

    // Save user credentials in LocalStorage
    localStorage.setItem(username, password);
    alert('Registration successful! Please log in.');
    clearFields();
}

// Function to login a user
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        alert('Please fill in both fields.');
        return;
    }

    // Check if credentials match
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        localStorage.setItem('loggedInUser', username); // Save session
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid username or password.');
    }
}

// Utility function to clear input fields
function clearFields() {
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}