const login = async() => {
    const username = document.getElementById('username').value;
    if (username) {
        fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify({ username })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
}