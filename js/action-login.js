const url = "http://localhost:8080/";

myForm = document.getElementById('loginform'); //Il faudra add un ID au form

myForm.addEventListener('submit', login);


function login(event) {
    event.preventDefault();
    const username = document.getElementsByName('username').value;
    const password = document.getElementsByName('password').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ username: 'Toto', password: '@z3rtY' }));
    new Promise((resolve, reject) => {
        xhr.onload = () => resolve(JSON.parse(xhr.response));
    }).then(user => {
        console.log(user);
        return user;
    })
}
